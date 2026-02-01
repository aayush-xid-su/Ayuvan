"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Leaf, UploadCloud, X, AlertCircle, Lightbulb, TriangleAlert, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface MockDiagnosis {
  diseaseName: string;
  scientificName: string;
  riskLevel: 'High' | 'Medium' | 'Low';
  confidenceScore: number;
  description: string;
  symptoms: string[];
  commonCauses: string[];
  treatment: string[];
  prevention: string[];
  microscopicViewId: string;
}

const mockDiagnoses: MockDiagnosis[] = [
    {
        diseaseName: "Bacterial Blight",
        scientificName: "Xanthomonas campestris",
        riskLevel: 'High',
        confidenceScore: 0.85,
        description: "Bacterial blight is a serious bacterial infection that can cause rapid deterioration of plant tissue. It often starts as water-soaked spots that quickly turn brown or black. The disease can spread rapidly in warm, wet conditions and may kill entire plants if not controlled.",
        symptoms: [
            "Water-soaked spots on leaves",
            "Brown or black lesions with yellow halos",
            "Wilting of affected branches",
            "Leaf drop and defoliation",
            "Stem cankers and dieback"
        ],
        commonCauses: [
            "Bacterial infection spread by water splash",
            "Wounds from insects or pruning",
            "High humidity and rainfall",
            "Contaminated tools or hands",
            "Infected plant material"
        ],
        treatment: [
            "Remove and destroy infected plant parts",
            "Apply copper-based bactericides",
            "Disinfect tools between plants",
            "Improve drainage and air circulation",
            "Avoid working with wet plants"
        ],
        prevention: [
            "Use certified disease-free seeds and plants",
            "Disinfect tools regularly",
            "Avoid overhead irrigation",
            "Remove infected debris promptly",
            "Quarantine new plants before planting"
        ],
        microscopicViewId: "disease-bacterial-blight-micro",
    },
    {
        diseaseName: "Tomato Late Blight",
        scientificName: "Phytophthora infestans",
        riskLevel: 'High',
        confidenceScore: 0.95,
        description: "Late blight is a devastating disease of tomatoes and potatoes. It spreads rapidly in cool, wet weather and can destroy an entire crop in a short time if not managed.",
        symptoms: [
            "Large, dark, water-soaked spots on leaves and stems.",
            "A white, fuzzy mold may appear on the underside of leaves.",
            "Fruit develops large, firm, brown, greasy-looking lesions."
        ],
        commonCauses: [
            "Cool, moist conditions (60-70°F / 15-21°C) with high humidity.",
            "Spores traveling long distances on the wind.",
            "Infected potato tubers or volunteer plants from the previous season."
        ],
        treatment: [
            "Remove and destroy infected plants immediately.",
            "Apply targeted fungicides containing copper or chlorothalonil.",
            "Ensure good coverage of all plant surfaces.",
            "Alternate fungicides to prevent resistance."
        ],
        prevention: [
            "Plant certified disease-free seeds and plants.",
            "Ensure good spacing for air circulation.",
            "Water at the base of the plant to keep foliage dry.",
            "Monitor weather forecasts for favorable conditions."
        ],
        microscopicViewId: "disease-tomato-blight-micro",
    },
    {
        diseaseName: "Powdery Mildew",
        scientificName: "Erysiphales",
        riskLevel: 'Medium',
        confidenceScore: 0.92,
        description: "Powdery mildew is a fungal disease that affects a wide range of plants. It is easily recognizable by its white, powdery spots on leaves and stems. While not usually fatal, it can reduce photosynthesis and weaken the plant.",
        symptoms: [
          "White, powdery patches on the upper surface of leaves, stems, and flowers.",
          "Infected leaves may turn yellow and drop prematurely.",
          "Distorted shoot growth and flowers.",
        ],
        commonCauses: [
            "Fungi that thrive in both high humidity and dry conditions.",
            "Poor air circulation and crowded planting.",
            "Shady conditions can encourage its development."
        ],
        treatment: [
            "Spray with horticultural oils or neem oil.",
            "Potassium bicarbonate solutions can be effective.",
            "Remove and destroy heavily infected leaves.",
            "For severe cases, use sulfur-based fungicides."
        ],
        prevention: [
            "Provide good air circulation.",
            "Avoid overhead watering.",
            "Plant in sunny locations.",
            "Choose resistant plant varieties."
        ],
        microscopicViewId: "disease-powdery-mildew-micro",
    },
    {
        diseaseName: "Apple Scab",
        scientificName: "Venturia inaequalis",
        riskLevel: 'Medium',
        confidenceScore: 0.88,
        description: "Apple scab is a common disease of apple and crabapple trees, causing cosmetic blemishes on fruit and leaves. In severe cases, it can lead to defoliation, which weakens the tree.",
        symptoms: [
            "Olive-green to brown spots on leaves",
            "Spots may feel velvety",
            "Twisted and puckered leaves",
            "Dark, corky, and cracked spots on fruit"
        ],
        commonCauses: [
            "Fungus overwintering on fallen leaves",
            "Cool, wet spring weather",
            "Poor air circulation in the canopy"
        ],
        treatment: [
            "Apply fungicides preventatively",
            "Use products containing captan, sulfur, or myclobutanil",
            "Follow spray schedules from bud break"
        ],
        prevention: [
            "Choose resistant varieties",
            "Rake and destroy fallen leaves in autumn",
            "Prune trees to improve air circulation"
        ],
        microscopicViewId: "disease-apple-scab-micro",
    },
    {
        diseaseName: "Rose Black Spot",
        scientificName: "Diplocarpon rosae",
        riskLevel: 'Medium',
        confidenceScore: 0.91,
        description: "Black spot is a common fungal disease affecting roses, leading to defoliation and weakened plants. It is characterized by black spots on leaves, which then turn yellow and fall off.",
        symptoms: [
            "Black spots with fringed margins on leaves",
            "Yellowing around the spots",
            "Premature leaf drop",
            "Raised, reddish-purple spots on canes"
        ],
        commonCauses: [
            "Fungus overwintering in fallen leaves and on canes",
            "Wet leaf surfaces for several hours",
            "Warm, humid weather"
        ],
        treatment: [
            "Remove and destroy infected leaves and canes",
            "Apply fungicides like myclobutanil or chlorothalonil",
            "Neem oil can be effective if applied regularly"
        ],
        prevention: [
            "Plant resistant rose varieties",
            "Clean up all fallen leaves and debris",
            "Water at the base of the plant in the morning",
            "Prune to improve air circulation"
        ],
        microscopicViewId: "disease-black-spot-micro",
    }
];

export default function DiagnosePage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resizedDataUrl, setResizedDataUrl] = useState<string | null>(null);
  const [result, setResult] = useState<MockDiagnosis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    // Generate random number only on the client side to avoid hydration mismatch
    setRandomNumber(Math.random());
  }, []);

  const resetState = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setFile(null);
    setPreviewUrl(null);
    setResizedDataUrl(null);
    setResult(null);
    setError(null);
    setIsLoading(false);
  };

  const resizeImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = document.createElement("img");
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            return reject(new Error("Could not get canvas context"));
          }
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL(file.type, 0.9)); // Use JPEG with 90% quality
        };
        img.onerror = (error) => reject(error);
      };
      reader.onerror = (error) => reject(error);
    });
  };


  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      resetState();
      setFile(selectedFile);
      
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);

      try {
        const resized = await resizeImage(selectedFile);
        setResizedDataUrl(resized);
      } catch (err) {
        console.error("Failed to resize image", err);
        setError("Could not process the selected image. Please try another one.");
        toast({
          title: "Image Processing Failed",
          description: "There was an error preparing your image for upload.",
          variant: "destructive",
        });
      }
    }
  };

  const handleSubmit = async () => {
    if (!file || !resizedDataUrl) {
      toast({
        title: "No file selected or processed",
        description: "Please select an image of a plant leaf to diagnose.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    // Simulate API call and show a random diagnosis
    setTimeout(() => {
      const randomIndex = Math.floor(randomNumber * mockDiagnoses.length);
      const randomDiagnosis = mockDiagnoses[randomIndex];
      setResult(randomDiagnosis);
      setIsLoading(false);
    }, 1500); // Simulate a 1.5 second delay
  };
  
  const LoadingSkeleton = () => (
    <div className="w-full space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-10 w-24" />
          </div>
        </CardHeader>
        <CardContent className="flex items-center gap-6">
          <Skeleton className="h-24 w-24 rounded-lg" />
          <div className="w-full space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
              <Skeleton className="h-6 w-1/4" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-6 w-1/4 mt-4" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
               <Skeleton className="h-48 w-full" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
      {!result && !isLoading && (
        <>
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              Diagnose Your Plant
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Upload a clear image of a plant leaf. Our AI will analyze it for diseases and suggest remedies.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              {!previewUrl ? (
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-12 text-center">
                  <UploadCloud className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Click to upload or drag and drop</h3>
                  <p className="text-muted-foreground mb-4">PNG, JPG, or WEBP (max 5MB)</p>
                  <Button asChild>
                    <label htmlFor="file-upload" className="cursor-pointer">
                      Select Image
                    </label>
                  </Button>
                  <input id="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                </div>
              ) : (
                <div className="relative w-full max-w-md mx-auto">
                  <Image src={previewUrl} alt="Plant leaf preview" width={400} height={400} className="rounded-lg w-full h-auto object-contain" />
                  <Button variant="destructive" size="icon" className="absolute top-2 right-2 rounded-full" onClick={resetState}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Remove image</span>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          {file && (
            <div className="text-center mb-8">
              <Button size="lg" onClick={handleSubmit} disabled={isLoading || !resizedDataUrl}>
                Diagnose Now
                <Leaf className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </>
      )}

      {isLoading && <LoadingSkeleton />}

      {error && !isLoading && (
         <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Diagnosis Error</AlertTitle>
          <AlertDescription>
            We couldn't complete the diagnosis. Please try a different image or check your connection.
            <p className="text-xs mt-2">{error}</p>
          </AlertDescription>
        </Alert>
      )}

      {result && !isLoading && previewUrl &&(
        <div className="space-y-6">
          <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="font-headline text-3xl">Analysis Complete</CardTitle>
                    <Button variant="outline" onClick={resetState}>New Analysis</Button>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-start gap-6">
                <Image src={previewUrl} alt="Analyzed plant" width={100} height={100} className="rounded-lg border-2 border-border object-cover aspect-square" />
                <div className="w-full space-y-3">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold">{result.diseaseName}</h2>
                        <Badge variant={result.riskLevel === 'High' ? 'destructive' : 'secondary'}>
                            <TriangleAlert className="h-4 w-4 mr-1" />
                            {result.riskLevel} Risk
                        </Badge>
                    </div>
                    <p className="text-muted-foreground italic">{result.scientificName}</p>
                    <div className="flex items-center gap-4">
                        <span className="font-semibold text-muted-foreground text-sm">Confidence:</span>
                        <Progress value={result.confidenceScore * 100} className="w-full max-w-xs" />
                        <span className="font-bold text-lg">{Math.round(result.confidenceScore * 100)}%</span>
                    </div>
                </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Description</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                      <p>{result.description}</p>
                  </CardContent>
              </Card>
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl">Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                      <ul className="list-disc list-inside">
                          {result.symptoms.map((symptom, index) => (
                              <li key={index}>{symptom}</li>
                          ))}
                      </ul>
                  </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {result.treatment.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                  <CardContent className="pt-6">
                      {(() => {
                        const microImage = PlaceHolderImages.find(p => p.id === result.microscopicViewId);
                        return microImage && (
                          <Image
                            src={microImage.imageUrl}
                            alt={`${result.diseaseName} microscopic view`}
                            width={600}
                            height={400}
                            className="rounded-lg w-full h-auto object-cover mb-4"
                            data-ai-hint={microImage.imageHint}
                          />
                        )
                      })()}
                      <h3 className="font-headline text-2xl mb-2">Common Causes</h3>
                       <ul className="list-disc list-inside prose prose-sm max-w-none text-muted-foreground">
                          {result.commonCauses.map((cause, index) => (
                              <li key={index}>{cause}</li>
                          ))}
                      </ul>
                  </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Prevention</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {result.prevention.map((step, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Info className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-800 dark:text-blue-300">Disclaimer</AlertTitle>
            <AlertDescription className="text-blue-700 dark:text-blue-400">
              This diagnosis is AI-generated and for informational purposes only. For critical cases, please consult a professional botanist or agricultural expert.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
