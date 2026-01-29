"use client";

import { Leaf, Mail, MapPin, Newspaper, Phone, Camera, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactFormSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get In Touch</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions about our AI disease detection platform? We'd love to hear from you.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your needs or questions..." />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl mb-4">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:aayushxidsu.11am@gmail.com" className="hover:text-primary">aayushxidsu.11am@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <span>+91 7894038559</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p>Nuapada, ODISHA<br />INDIA</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-2xl mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Leaf className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                   <Newspaper className="h-5 w-5" />
                </Button>
                 <Button variant="outline" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
                 <Button variant="outline" size="icon">
                  <Camera className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <Card className="bg-accent/10 border-accent/30">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Quick FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Is the service free?</h4>
                  <p className="text-sm text-muted-foreground">Yes! Basic disease detection is completely free.</p>
                </div>
                <div>
                  <h4 className="font-semibold">How accurate is the AI?</h4>
                  <p className="text-sm text-muted-foreground">Our AI achieves 99% accuracy on common diseases.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
