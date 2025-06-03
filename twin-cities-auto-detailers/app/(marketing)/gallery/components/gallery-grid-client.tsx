"use client"

import { useState } from "react"
import Image from "next/image"
import { galleryData, type GalleryItem } from "@/lib/gallery-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"

// IMPORTANT: The following CSS imports have been removed due to loading issues in the current environment.
// You will need to manually copy the contents of:
// 1. node_modules/yet-another-react-lightbox/styles.css
// 2. node_modules/yet-another-react-lightbox/plugins/thumbnails.css
// and paste them into your app/globals.css file for the lightbox to be styled correctly.

// import "yet-another-react-lightbox/styles.css"; // Removed
// import "yet-another-react-lightbox/plugins/thumbnails.css"; // Removed

const GalleryCard = ({ item, onClick }: { item: GalleryItem; onClick: () => void }) => {
  return (
    <Card
      className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group bg-brand-light-gray dark:bg-brand-charcoal-light cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={item.splitImageSrc || "/placeholder.svg"}
          alt={item.altText}
          width={800}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 md:p-6">
        <h3 className="text-xl font-semibold mb-2 text-brand-charcoal dark:text-brand-white">{item.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            {item.serviceType}
          </Badge>
          <Badge
            variant="outline"
            className="border-brand-steel-gray/50 text-brand-steel-gray dark:text-brand-light-gray/70"
          >
            {item.carColor}
          </Badge>
        </div>
        <div className="text-xs space-y-1 text-brand-steel-gray dark:text-brand-light-gray/80">
          <p>
            <span className="font-semibold text-destructive/80 dark:text-destructive/70">Before:</span>{" "}
            {item.beforeDescription}
          </p>
          <p>
            <span className="font-semibold text-green-600 dark:text-green-500">After:</span> {item.afterDescription}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function GalleryGridClient() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = galleryData.map((item) => ({
    src: item.splitImageSrc,
    alt: item.altText,
    title: item.title,
    description: `${item.serviceType} - ${item.carColor}`,
  }))

  const handleCardClick = (currentIndex: number) => {
    setIndex(currentIndex)
    setOpen(true)
  }

  return (
    <>
      {galleryData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {galleryData.map((item, i) => (
            <GalleryCard key={item.id} item={item} onClick={() => handleCardClick(i)} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground">
          Our gallery is currently being updated. Check back soon for stunning transformations!
        </p>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom]} // Plugins restored
        thumbnails={{
          position: "bottom",
          width: 100,
          height: 60,
          border: 1,
          borderRadius: 4,
          padding: 4,
          gap: 8,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          doubleTapDelay: 300,
          doubleClickDelay: 500,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        render={{
          slide: ({ slide, rect }) => (
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                fill
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt || ""}
                loading="eager"
                draggable={false}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                sizes={`${Math.ceil((rect.width / window.innerWidth) * 100)}vw`}
              />
              {slide.title && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "12px",
                    textAlign: "center",
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                  }}
                >
                  <h4 style={{ margin: 0, fontSize: "1.1em" }}>{slide.title}</h4>
                  {slide.description && <p style={{ margin: "4px 0 0", fontSize: "0.9em" }}>{slide.description}</p>}
                </div>
              )}
            </div>
          ),
        }}
      />
    </>
  )
}
