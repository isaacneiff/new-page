
"use client";

import * as React from "react";
import useEmblaCarousel, { type EmblaCarouselType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselApi = EmblaCarouselType;

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  opts?: Parameters<typeof useEmblaCarousel>[0];
  plugins?: Parameters<typeof useEmblaCarousel>[1];
  setApi?: (api: CarouselApi) => void;
};

interface CarouselContextProps {
  emblaApi: CarouselApi | null;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  activeIndex: number; // Add activeIndex to context if needed by consumers
  scrollTo: (index: number) => void; // Add scrollTo to context
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

export const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel /> component");
  }
  return context;
};

export function Carousel({
  children,
  className,
  opts,
  plugins,
  setApi,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(opts, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);


  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(); // Initial check
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect); // Handle reinitialization

    if (setApi) {
      setApi(emblaApi);
    }

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, setApi]);

  return (
    <CarouselContext.Provider
      value={{
        emblaApi,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
        activeIndex,
        scrollTo,
      }}
    >
      <div
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex -ml-4", className)}>{children}</div>;
}

export function CarouselItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
      role="group"
      aria-roledescription="slide"
    >
      {children}
    </div>
  );
}

export function CarouselPrevious({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof ChevronLeft> & { onClick?: () => void }) {
  const { canScrollPrev, scrollPrev: contextScrollPrev } = useCarousel();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    contextScrollPrev();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-card/80 hover:bg-card rounded-full shadow-md border border-border disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      aria-label="Previous slide"
      disabled={!canScrollPrev}
      {...props}
    >
      <ChevronLeft className="w-6 h-6 text-foreground" />
    </button>
  );
}

export function CarouselNext({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof ChevronRight> & { onClick?: () => void }) {
  const { canScrollNext, scrollNext: contextScrollNext } = useCarousel();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    contextScrollNext();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-card/80 hover:bg-card rounded-full shadow-md border border-border disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      aria-label="Next slide"
      disabled={!canScrollNext}
      {...props}
    >
      <ChevronRight className="w-6 h-6 text-foreground" />
    </button>
  );
}

export type { CarouselApi };
