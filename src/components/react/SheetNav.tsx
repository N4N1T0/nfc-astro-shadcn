import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";
import * as React from "react";
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants/index'
import { useTranslations } from '@/i18n/utils'


export function SheetNav ({ lang }: { lang: 'es' | 'en' }) {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations(lang)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon"><Menu /><span className="sr-only">Mobile Navbar</span></Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-10 flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="text-xl">{t('sheetNav-title')}</SheetTitle>
          <SheetDescription>
            {t('sheetNav-description')}
          </SheetDescription>
        </SheetHeader>
        <ul className="space-y-10 py-5 text-xl flex justify-center items-center flex-col pt-10">
          {navLinks.map((link) => (
            <li key={link.label[lang]}><a title={`Navlink - ${link.label[lang]}`} href={`/${lang}/${link.link}`} onClick={() => setOpen(false)}>{link.label[lang]}</a></li>
          ))}
        </ul>
        <SheetFooter className="self-end">
          <small>
            Made with <span className="animate-pulse">❤️</span> and Powered by <a
              href="https://www.adrian-alvarez.dev/es/"
              target="_blank"
              className="text-gray-400 underline transition-colors duration-200 hover:text-gray-50"
            >Adrian</a
            >
          </small>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}