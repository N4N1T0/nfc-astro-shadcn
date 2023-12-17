// Shadcn Button Import
import { buttonVariants } from '../ui/button'

// Shadcn Dialog Import
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"

// Info imports
import { products } from '@/constants'

// Translation Imports
import { useTranslations } from '../../i18n/utils'

interface Product {
  label: string
  link: string
  description: { es: string, en: string }
}


export function Essentials({ lang, product }: { lang: 'es' | 'en', product: string }) {
  const t = useTranslations(lang)

  return (
    <div className='w-[fit-content]'>
      <Dialog>
        <DialogTrigger asChild>
          <button className={`${buttonVariants({
            variant: 'outline',
          })} cursor-pointer mt-5`}
            aria-label={lang === 'es' ? 'Equipamiento' : 'Basic Gear'}>{lang === 'es' ? 'Equipamiento' : 'Basic Gear'}</button>
        </DialogTrigger>
        <DialogContent className='w-auto pt-16 md:pt-10'>
          <DialogHeader>
            <DialogTitle>{product}</DialogTitle>
            <DialogDescription>
              {products[product as keyof typeof products].description[lang]}
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-4 mt-2'>
            {products[product as keyof typeof products].products.map((item: Product) => (
              <div key={item.label}>
                <a href={item.link} target='_blank' className='uppercase transition-colors duration-200 hover:text-secondary'>{item.label}</a>
                <small className='block text-secondary'>{item.description[lang]}</small>
              </div>
            ))}
          </div>
          <DialogFooter>
            <small className='text-secondary mt-5 text-xs'>
              {t('gear-footer')}
            </small>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}