
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, BookOpen, Newspaper, Camera, Stethoscope, Target, BrainCircuit, Globe, Leaf, Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { articles } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";

const ContactFormSection = dynamic(
  () => import('@/components/layout/ContactFormSection').then(mod => mod.ContactFormSection),
  { ssr: false }
);


const benefits = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI-Powered Diagnosis",
    description: "Snap a photo of a leaf and our AI will identify the plant, detect diseases, and suggest effective remedies.",
    imageUrlId: "benefit-ai",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Vast Disease Library",
    description: "Browse our extensive, searchable library to learn about various plant diseases, their symptoms, and prevention methods.",
    imageUrlId: "benefit-library",
  },
  {
    icon: <Newspaper className="h-8 w-8 text-primary" />,
    title: "Expert Articles",
    description: "Read articles on sustainable farming, disease prevention, and soil health to cultivate a thriving garden.",
    imageUrlId: "benefit-articles",
  },
];

const howItWorksSteps = [
    {
        icon: <Camera className="h-10 w-10 text-primary" />,
        title: "Upload Image",
        description: "Take a clear photo of the affected leaf and upload it to our platform. Our system accepts JPG, PNG, and WebP formats."
    },
    {
        icon: <Bot className="h-10 w-10 text-primary" />,
        title: "AI Analyzes the Disease",
        description: "Our advanced machine learning model analyzes the image, identifying patterns and symptoms with 99% accuracy in seconds."
    },
    {
        icon: <Stethoscope className="h-10 w-10 text-primary" />,
        title: "Get Diagnosis & Treatment",
        description: "Receive instant disease identification, confidence score, and expert-backed treatment recommendations."
    }
];

const features = [
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "High Accuracy",
        description: "99% disease detection rate"
    },
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "24/7 Available",
        description: "Access anytime, anywhere"
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        title: "AI Powered",
        description: "Latest machine learning models"
    }
]

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-image");
  const missionImage = PlaceHolderImages.find(p => p.id === "mission-image");
  const latestArticles = articles.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-background">
          <div className="container mx-auto grid min-h-[60vh] grid-cols-1 items-center gap-12 px-4 py-12 md:grid-cols-2 md:px-6 lg:py-20">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                Detect Plant Disease With AI
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                Upload an image and get instant disease prediction with actionable insights. Protect your plant and crops with cutting-edge Artificial Intelligence.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Link href="/diagnose">
                  <Button size="lg" className="w-full sm:w-auto transform transition-transform duration-300 hover:-translate-y-1">Detect</Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto transform transition-transform duration-300 hover:-translate-y-1">About</Button>
                </Link>
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
                <span>• Accuracy</span>
                <span>• Instant Result</span>
                <span>• Expert Backed</span>
              </div>
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-2xl md:h-full">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              <Badge className="absolute right-4 top-4 border-2 border-background/50 bg-primary/80 text-primary-foreground backdrop-blur-sm">AI Analyzing</Badge>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why Choose AyuVan?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide modern tools and timeless knowledge to help your plants thrive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
              {benefits.map((benefit, index) => {
                const benefitImage = PlaceHolderImages.find(p => p.id === benefit.imageUrlId);
                return (
                  <Card key={index} className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <CardHeader className="items-center">
                      <div className="mb-4 rounded-full bg-accent/20 p-4">
                        {benefit.icon}
                      </div>
                      <CardTitle className="font-headline text-2xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get professional plant disease diagnosis in three simple steps using our AI-powered platform
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {howItWorksSteps.map((step, index) => (
                <Card key={index} className="bg-secondary/20 border-none shadow-lg">
                  <CardHeader className="items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-md">
                      {step.icon}
                    </div>
                    <CardTitle>
                      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="mb-2">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
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

        {/* Articles Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">From Our Journal</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore tips and insights on sustainable agriculture and plant care.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {latestArticles.map((article) => {
                const articleImage = PlaceHolderImages.find(p => p.id === article.imageUrlId);
                return (
                  <Link href={`/articles/${article.slug}`} key={article.slug}>
                    <Card className="overflow-hidden h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      {articleImage && (
                         <Image
                           src={articleImage.imageUrl}
                           alt={article.title}
                           width={600}
                           height={400}
                           className="w-full h-48 object-cover"
                           data-ai-hint={articleImage.imageHint}
                         />
                      )}
                      <CardHeader>
                        <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
                        <CardDescription>{article.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                         <span className="text-sm font-medium text-primary hover:underline">Read Article</span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
             <div className="text-center">
                <Link href="/articles">
                    <Button variant="outline">
                        View All Articles <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
            </div>
          </div>
        </section>
        
        <ContactFormSection />

      </main>
    </div>
  );
}

    