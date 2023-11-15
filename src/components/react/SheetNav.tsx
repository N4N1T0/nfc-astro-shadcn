import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import * as React from "react";
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { navLinks } from '../../constants/index'
import { useTranslations } from '../../i18n/utils'


export function SheetNav({ lang }: { lang: 'es' | 'en' }) {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations(lang)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon"><Menu /><span className="sr-only">Mobile Navbar</span></Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-14">
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
      </SheetContent>
    </Sheet>
  )
}