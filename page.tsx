"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

import { diseases } from "@/lib/mock-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.plant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          Disease Library
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive guide to common plant diseases. Search by name or plant type.
        </p>
      </div>

      <div className="relative mb-8 max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for a disease (e.g., 'Tomato Blight')"
          className="pl-10 text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredDiseases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDiseases.map((disease) => {
            const diseaseImage = PlaceHolderImages.find(p => p.id === disease.imageUrlId);
            return (
              <Link href={`/library/${disease.id}`} key={disease.id}>
                <Card className="h-full overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {diseaseImage && (
                    <Image
                      src={diseaseImage.imageUrl}
                      alt={disease.name}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={diseaseImage.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{disease.name}</CardTitle>
                    <CardDescription>Affects: {disease.plant}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{disease.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No diseases found matching your search.</p>
        </div>
      )}
    </div>
  );
}
