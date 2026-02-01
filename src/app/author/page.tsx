import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AuthorPage() {
  const authorImageUrl = "/authors/ayush-das.jpg"; // Path to your image in the public folder
  const githubUrl = "https://github.com/aayush-xid-su";

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 lg:py-24">
        <Card className="p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Left Column: Profile */}
            <div className="flex flex-col items-center text-center md:col-span-1">
              <div className="relative h-40 w-40 mb-4 rounded-full">
                <Image
                  src={authorImageUrl}
                  alt="Ayush Das"
                  width={160}
                  height={160}
                  className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-primary">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  Ayush Das
                </Link>
              </h2>
              <p className="text-muted-foreground mt-1">Cybersecurity Enthusiast</p>
              <div className="flex space-x-4 mt-4">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://linkedin.com/in/ayushdas-11am" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://x.com/aayushxidsu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="https://instagram.com/aayush_xid_su" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Right Column: Bio */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h1 className="font-headline text-4xl font-bold">About the Author</h1>
                <Separator className="my-2 bg-primary h-0.5 w-24"/>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground prose-a:text-primary prose-a:font-semibold hover:prose-a:underline prose-strong:text-foreground">
                <p>
                  <Link href={githubUrl} target="_blank" rel="noopener noreferrer">Ayush Das</Link> is an independent technologist and cybersecurity enthusiast from India, with a strong foundation in cybersecurity, computer vision, and applied AI systems, his work focuses on building practical, privacy-aware technologies that address real-world security and trust challenges.
                </p>
                <p>
                  Driven by a deep interest in ethical hacking, OSINT, and defensive security, <Link href={githubUrl} target="_blank" rel="noopener noreferrer">Ayush</Link> combines hands-on technical expertise with responsible design principles to create systems that are both powerful and transparent.
                </p>
                
                <h3 className="font-headline text-2xl mt-8 mb-4 !text-foreground">Technical Background & Expertise</h3>
                <p>
                  <Link href={githubUrl} target="_blank" rel="noopener noreferrer">Ayush's</Link> technical journey spans across multiple domains, including:
                </p>
                <ul className="!mt-4 space-y-1">
                  <li>Cybersecurity (Offensive & Defensive Techniques)</li>
                  <li>AI & Computer Vision Systems</li>
                  <li>Deepfake & Synthetic Media Detection</li>
                  <li>Network Security & Traffic Analysis</li>
                  <li>OSINT & Reconnaissance Tooling</li>
                  <li>Secure Web Application Development</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
