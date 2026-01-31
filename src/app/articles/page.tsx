import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/mock-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ArticlesPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          AyuVan Journal
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Insights and advice on plant health, sustainable farming, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => {
          const articleImage = PlaceHolderImages.find(p => p.id === article.imageUrlId);
          const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <Link href={`/articles/${article.slug}`} key={article.slug}>
              <Card className="h-full overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
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
                  <CardTitle className="font-headline text-2xl">{article.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <span>{article.author}</span>
                    <span>•</span>
                    <time dateTime={article.date}>{formattedDate}</time>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
