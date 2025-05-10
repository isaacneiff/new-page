
"use client";

import * as React from "react";
import EmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react"; // Changed import
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  opts?: Parameters<typeof EmblaCarousel>[0]; // Corrected type for opts
  plugins?: Parameters<typeof EmblaCarousel>[1];
};

const CarouselContext = React.createContext<EmblaCarouselType | null>(null);

export function Carousel({ children, className, opts, plugins }: CarouselProps) {
  const [emblaRef, emblaApi] = EmblaCarousel(opts, plugins);

  return (
    <CarouselContext.Provider value={emblaApi}>
      <div className={cn("relative overflow-hidden", className)} ref={emblaRef}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  return <div className="flex">{children}</div>;
}

export function CarouselItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-w-full shrink-0 grow-0 basis-full", className)}>
      {children}
    </div>
  );
}

export function CarouselPrevious() {
  const embla = React.useContext(CarouselContext);

  return (
    <button
      onClick={() => embla?.scrollPrev()}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-card/80 hover:bg-card rounded-full shadow-md border border-border"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-foreground" />
    </button>
  );
}

export function CarouselNext() {
  const embla = React.useContext(CarouselContext);

  return (
    <button
      onClick={() => embla?.scrollNext()}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-card/80 hover:bg-card rounded-full shadow-md border border-border"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-foreground" />
    </button>
  );
}

