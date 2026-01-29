import type { SVGProps } from "react";
import { Leaf } from "lucide-react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" aria-label="AyuVan logo">
      <Leaf className="h-7 w-7 text-accent" />
      <span className="font-headline text-2xl font-bold text-foreground">
        AyuVan
      </span>
    </div>
  );
}
