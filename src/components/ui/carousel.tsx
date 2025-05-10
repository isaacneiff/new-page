"use client";

import * as React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  plugins?: any[];
  opts?: EmblaOptionsType;
};

export function Carousel({ children, className, plugins = [], opts = {} }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      skipSnaps: false,
      containScroll: "trimSnaps",
      ...opts,
    },
    plugins
  );

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">{children}</div>
      </div>
    </div>
  );
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function CarouselItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 px-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CarouselPrevious({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
}

export function CarouselNext({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
}
