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
} from "@/components/ui/dialog"

// Info imports
import { contacts } from '@/constants'

// Translation Imports
import { useTranslations } from '../../i18n/utils'


export function FormDialog({ text, lang }: { text: string, lang: 'es' | 'en' }) {
  const t = useTranslations(lang)

  return (
    <div className='w-[fit-content] mt-3'>
      <Dialog>
        <DialogTrigger asChild>
          <div className={`${buttonVariants()} cursor-pointer`} aria-label={text}>{text}</div>
        </DialogTrigger>
        <DialogContent className='w-auto pt-16 md:pt-10'>
          <DialogHeader>
            <DialogTitle>{t('dialog-title')}</DialogTitle>
            <DialogDescription>
              {t('dialog-description')}
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-4 mt-2'>
            {contacts.map((item) => (
              <div key={item.label[lang]}>
                <h4>{item.label[lang]}</h4>
                <a title={item.label[lang]} href={item.link} target='_blank' className='text-secondary hover:text-secondary/70 transition-colors duration-200'>{item.linkLabel}</a>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}