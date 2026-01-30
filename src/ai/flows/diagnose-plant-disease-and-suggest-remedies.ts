'use server';

/**
 * @fileOverview Diagnoses plant diseases from an image and suggests remedies.
 *
 * - diagnosePlantDiseaseAndSuggestRemedies - Function to diagnose plant disease and suggest remedies.
 * - DiagnosePlantDiseaseAndSuggestRemediesInput - Input type for the function.
 * - DiagnosePlantDiseaseAndSuggestRemediesOutput - Output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DiagnosePlantDiseaseAndSuggestRemediesInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a plant leaf, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});

export type DiagnosePlantDiseaseAndSuggestRemediesInput =
  z.infer<typeof DiagnosePlantDiseaseAndSuggestRemediesInputSchema>;

const DiagnosePlantDiseaseAndSuggestRemediesOutputSchema = z.object({
  plantType: z.string().describe('The predicted type of plant.'),
  diseaseName: z.string().describe('The predicted name of the disease.'),
  confidenceScore: z.number().describe('The confidence score of the prediction.'),
  suggestedRemedies: z.string().describe('Suggested remedies for the identified disease.'),
});

export type DiagnosePlantDiseaseAndSuggestRemediesOutput =
  z.infer<typeof DiagnosePlantDiseaseAndSuggestRemediesOutputSchema>;

export async function diagnosePlantDiseaseAndSuggestRemedies(
  input: DiagnosePlantDiseaseAndSuggestRemediesInput
): Promise<DiagnosePlantDiseaseAndSuggestRemediesOutput> {
  return diagnosePlantDiseaseAndSuggestRemediesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'diagnosePlantDiseaseAndSuggestRemediesPrompt',
  input: {schema: DiagnosePlantDiseaseAndSuggestRemediesInputSchema},
  output: {schema: DiagnosePlantDiseaseAndSuggestRemediesOutputSchema},
  model: 'googleai/gemini-pro-vision',
  prompt: `You are an AI assistant specialized in diagnosing plant diseases and suggesting remedies based on uploaded images.

  Analyze the image of the plant leaf and provide the following information:

  - Plant Type: Identify the type of plant.
  - Disease Name: Predict the name of the disease affecting the plant.
  - Confidence Score: Provide a confidence score (0-1) for the disease prediction.
  - Suggested Remedies: Suggest remedies for the identified disease, prioritizing the most relevant advice for the user.

  Here is the image of the plant leaf: {{media url=photoDataUri}}

  Return the output as a JSON object.
  `,
});

const diagnosePlantDiseaseAndSuggestRemediesFlow = ai.defineFlow(
  {
    name: 'diagnosePlantDiseaseAndSuggestRemediesFlow',
    inputSchema: DiagnosePlantDiseaseAndSuggestRemediesInputSchema,
    outputSchema: DiagnosePlantDiseaseAndSuggestRemediesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
