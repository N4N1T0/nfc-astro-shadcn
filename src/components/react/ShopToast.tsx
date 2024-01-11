import * as React from "react"
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose
} from '../ui/toast'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

// Translation Imports
import { useTranslations } from '../../i18n/utils'

// Assets Imports
import { tShirtsDesign } from '../../constants'

export default function ShopToast({ lang }: { lang: 'es' | 'en' }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const t = useTranslations(lang)

  return (
    <ToastProvider>
      <Toast duration={30000} className="p-4 md:pr-3 pr-8 hidden md:flex">
        <ToastTitle>
          <Carousel
            plugins={[plugin.current]}
            className="w-20 h-20"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            loop
          >
            <CarouselContent>
              {tShirtsDesign.map((shirt) => (
                <CarouselItem key={shirt.label}>
                  <img
                    src={shirt.img.src}
                    alt={shirt.label}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ToastTitle>
        <div className="flex flex-col gap-2">
          <ToastDescription>
            {t('toast-shop-description')}
          </ToastDescription>
          <ToastAction altText="Shop now" className="w-24 flex justify-center items-center bg-accent hover:bg-destructive transition-colors duration-200" asChild>
            <a href="https://N4N0.redbubble.com" target="_blank">
              {t('toast-shop-cta')}
            </a>
          </ToastAction>
          <ToastClose altText="Close" className="w-6 flex justify-center items-center" />
        </div>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}