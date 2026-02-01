import { notFound } from "next/navigation";
import Image from "next/image";
import { diseases } from "@/lib/mock-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: {
    diseaseId: string;
  };
};

export default function DiseaseDetailPage({ params }: Props) {
  const disease = diseases.find((d) => d.id === params.diseaseId);

  if (!disease) {
    notFound();
  }

  const diseaseImage = PlaceHolderImages.find(p => p.id === disease.imageUrlId);

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <article>
        <div className="mb-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-2">
            {disease.name}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Commonly affects:</span>
            <Badge variant="secondary">{disease.plant}</Badge>
          </div>
        </div>
        
        <Card className="overflow-hidden mb-8">
          {diseaseImage && (
            <Image
              src={diseaseImage.imageUrl}
              alt={disease.name}
              width={1200}
              height={600}
              className="w-full h-auto object-cover max-h-[400px]"
              priority
              data-ai-hint={diseaseImage.imageHint}
            />
          )}
        </Card>

        <p className="text-lg text-muted-foreground mb-8">{disease.description}</p>

        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        {disease.symptoms.map((symptom, index) => (
                            <li key={index}>{symptom}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Common Causes</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        {disease.commonCauses.map((cause, index) => (
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
                    <ul className="list-disc list-inside space-y-2">
                        {disease.prevention.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="list-disc list-inside space-y-2">
                        {disease.treatment.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return diseases.map((disease) => ({
    diseaseId: disease.id,
  }));
}
