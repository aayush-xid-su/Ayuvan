import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {firebaseApp} from '@/firebase/config';

export const ai = genkit({
  plugins: [googleAI(firebaseApp)],
  model: 'googleai/gemini-pro',
});
