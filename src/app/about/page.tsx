import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, BookOpen, Newspaper, Camera, Stethoscope, Target, BrainCircuit, Globe, Leaf, Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";


export default function AboutPage() {
  const missionImage = PlaceHolderImages.find(p => p.id === "mission-image");
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-image");


  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-4rem)]">
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
            {heroImage && (
              <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="rounded-lg object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What is AyuVan?</h2>
              <p className="text-lg text-muted-foreground">
                AyuVan is an AI-powered plant health intelligence platform that transforms ordinary leaf images into actionable insights.
              </p>
              <p className="text-muted-foreground">
                The name “AYUVAN” draws inspiration from Indian philosophical roots—symbolizing life, growth, and vitality. It reflects a simple yet powerful idea: healthy plants are the foundation of healthy ecosystems, resilient farmers, and a sustainable future.
              </p>
              <p className="text-muted-foreground">
                By combining trained computer vision models with agricultural knowledge, AyuVan enables early detection of plant diseases, identification of symptoms, confidence-based diagnosis from leaf images, and preventive guidance, all while prioritizing accessibility, transparency, and responsible AI usage.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
          <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Empowering farmers with intelligent, accessible, and affordable technology for early crop disease detection.
              </p>
              <p className="text-muted-foreground">
                Our mission is to empower farmers with intelligent, accessible, and affordable technology that enables early detection of tomato crop diseases. By combining deep learning and mobile technology, we aim to improve agricultural productivity, reduce crop loss, and support sustainable farming through innovation in AI-driven plant health monitoring.
              </p>
              <p className="text-muted-foreground">
                We strive to bridge the gap between modern technology and traditional agriculture by making advanced disease detection tools available to everyone. Our solution focuses on usability, accuracy, and real-world impact to assist farmers in making timely and informed decisions.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-primary">99%</h3>
                  <p className="text-sm font-medium text-muted-foreground">Accuracy Rate</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary">24/7</h3>
                  <p className="text-sm font-medium text-muted-foreground">Available</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary">Global</h3>
                  <p className="text-sm font-medium text-muted-foreground">Access</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-accent/10 p-4">
                {missionImage && (
                  <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    fill
                    className="rounded-lg object-cover"
                    data-ai-hint={missionImage.imageHint}
                  />
                )}
                 <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground shadow-lg backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  AI Monitoring
                </div>

                <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-4 py-3 text-sm text-foreground shadow-lg backdrop-blur-sm">
                  <p className="font-bold">Early Detection</p>
                  <p className="text-xs text-muted-foreground">Disease Prevention</p>
                  <div className="mt-2 h-1 w-full rounded-full bg-muted">
                    <div className="h-1 w-3/4 rounded-full bg-primary"></div>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
