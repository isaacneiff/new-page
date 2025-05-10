"use client";

import * as React from "react";

import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react"; 
import Autoplay from "embla-carousel-autoplay"; // Autoplay can be used here or passed via plugins
import { cn } from "@/lib/utils";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;

  opts?: Parameters<typeof EmblaCarousel>[0]; 
  plugins?: Parameters<typeof EmblaCarousel>[1];
  setApi?: (api: EmblaCarouselType) => void; // Added setApi prop
};

const CarouselContext = React.createContext<EmblaCarouselType | null>(null);

export function Carousel({ children, className, opts, plugins, setApi }: CarouselProps) {
  const [emblaRef, emblaApi] = EmblaCarousel(opts, plugins);


  React.useEffect(() => {
    if (emblaApi && setApi) {
      setApi(emblaApi);
    }
  }, [emblaApi, setApi]);


  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">{children}</div>
      </div>
    </div>
  );
}


export function CarouselContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("flex", className)}>{children}</div>;

}

export function CarouselItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (

    <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}>

      {children}
    </div>
  );
}

export function CarouselPrevious({ onClick }: { onClick?: () => void }) {
  return (
    <button

      onClick={() => embla?.scrollPrev()}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-card/80 hover:bg-card rounded-full shadow-md border border-border disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Previous slide"
      disabled={!embla?.canScrollPrev()}
    >
      <ChevronLeft className="w-6 h-6 text-foreground" />

    </button>
  );
}

export function CarouselNext({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={() => embla?.scrollNext()}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-card/80 hover:bg-card rounded-full shadow-md border border-border disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Next slide"
      disabled={!embla?.canScrollNext()}
    >
      <ChevronRight className="w-6 h-6 text-foreground" />

    </button>
  );
}

export type { EmblaCarouselType as CarouselApi };