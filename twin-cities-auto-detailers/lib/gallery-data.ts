export interface GalleryItem {
  id: string
  title: string
  serviceType: "Paint Correction" | "Ceramic Coating" | "Full Detail"
  carColor: string
  splitImageSrc: string
  altText: string
  beforeDescription: string
  afterDescription: string
}

export const galleryData: GalleryItem[] = [
  {
    id: "pc001",
    title: "Blue Sedan Hood Revival",
    serviceType: "Paint Correction",
    carColor: "Blue",
    splitImageSrc: "/gallery/custom/blue-car-paint-correction-01.png",
    altText:
      "Split image of a blue sedan hood: left side shows heavy swirl marks, right side displays a flawless, deep gloss after paint correction.",
    beforeDescription: "Heavy swirl marks and dull, lifeless paint on hood.",
    afterDescription: "Deep, mirror-like gloss, flawless clarity, and vibrant blue restored.",
  },
  {
    id: "pc002",
    title: "Red Coupe Quarter Panel Shine",
    serviceType: "Paint Correction",
    carColor: "Red",
    splitImageSrc: "/gallery/custom/red-car-paint-correction-01.png",
    altText:
      "Split image of a red coupe's rear quarter panel: left side shows noticeable swirl marks and scratches, right side reveals a smooth, high-gloss finish.",
    beforeDescription: "Noticeable swirl marks and light scratches diminishing shine.",
    afterDescription: "Smooth, high-gloss finish with deep color reflection.",
  },
  {
    id: "pc003",
    title: "Blue Audi Hood Transformation",
    serviceType: "Paint Correction",
    carColor: "Blue",
    splitImageSrc: "/gallery/custom/blue-car-paint-correction-02.png",
    altText:
      "Split image of a blue Audi hood: left side covered in swirl marks, right side shows a perfectly corrected, glossy surface.",
    beforeDescription: "Hood covered in swirl marks, lacking depth and clarity.",
    afterDescription: "Perfectly corrected surface with exceptional gloss and clarity.",
  },
  {
    id: "pc004",
    title: "Intense Red Paint Correction",
    serviceType: "Paint Correction",
    carColor: "Red",
    splitImageSrc: "/gallery/custom/red-car-paint-correction-02.png",
    altText:
      "Split image of a red car door: left side shows severe swirl marks under direct light, right side is a flawless, deep red.",
    beforeDescription: "Severe swirl marks creating a hazy appearance under light.",
    afterDescription: "Flawless, deep red finish with a liquid-like gloss.",
  },
  {
    id: "pc005",
    title: "Metallic Blue Hood Clarity",
    serviceType: "Paint Correction",
    carColor: "Blue",
    splitImageSrc: "/gallery/custom/blue-car-paint-correction-03.png",
    altText:
      "Split image of a metallic blue car hood: left side shows widespread swirl marks, right side exhibits a stunning, clear gloss.",
    beforeDescription: "Widespread swirl marks obscuring the metallic flake.",
    afterDescription: "Stunning, clear gloss with enhanced metallic flake visibility.",
  },
  {
    id: "pc006",
    title: "Dark Metallic Fender Restoration",
    serviceType: "Paint Correction",
    carColor: "Dark Metallic",
    splitImageSrc: "/gallery/custom/dark-car-paint-correction-01.png",
    altText:
      "Split image of a dark metallic car fender: left side shows dense swirl marks, right side is smooth with deep reflections.",
    beforeDescription: "Dense swirl marks giving a matted look to the paint.",
    afterDescription: "Smooth finish with deep, clear reflections and restored color.",
  },
  {
    id: "pc007",
    title: "Deep Gloss on Dark Paint",
    serviceType: "Paint Correction",
    carColor: "Dark Metallic",
    splitImageSrc: "/gallery/custom/dark-car-paint-correction-02.png",
    altText:
      "Split image of a dark metallic car panel: left side shows swirl marks around a light source, right side has a brilliant, starburst reflection.",
    beforeDescription: "Swirl marks diffusing light and reducing gloss.",
    afterDescription: "Brilliant, sharp light reflections indicating a perfect finish.",
  },
]
