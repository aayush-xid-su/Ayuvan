import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/lib/mock-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type Props = {
  params: {
    articleSlug: string;
  };
};

export default function ArticleDetailPage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.articleSlug);

  if (!article) {
    notFound();
  }

  const articleImage = PlaceHolderImages.find(p => p.id === article.imageUrlId);
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      <article>
        <header className="mb-8 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>By {article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>{formattedDate}</time>
          </div>
        </header>

        {articleImage && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={articleImage.imageUrl}
              alt={article.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover max-h-[450px]"
              priority
              data-ai-hint={articleImage.imageHint}
            />
          </div>
        )}

        <div 
          className="prose prose-lg max-w-none prose-headings:font-headline prose-li:my-1 prose-a:text-primary hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    articleSlug: article.slug,
  }));
}
