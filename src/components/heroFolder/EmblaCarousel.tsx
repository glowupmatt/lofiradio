'use client'

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import imageByIndex from "./ImageByIndex"
import embla from "./EmblaCarousel.module.css"

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
  }
  
  const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  
    return (
      <div className={embla.embla} dir="rtl">
        <div className={embla.embla__viewport} ref={emblaRef}>
          <div className={embla.embla__container}>
            {slides.map((_, index) => (
              <div className={embla.embla__slide} key={index}>
                <img
                  className={embla.embla__slide__img}
                  src={imageByIndex(index)}
                  alt="Album Cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default EmblaCarousel