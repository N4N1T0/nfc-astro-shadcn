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

export function SheetNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon"><Menu /><span className="sr-only">Mobile Navbar</span></Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-14">
        <SheetHeader>
          <SheetTitle className="text-xl">En nuestra Pagina</SheetTitle>
          <SheetDescription>
            Links de ayuda
          </SheetDescription>
        </SheetHeader>
        <ul className="space-y-10 py-5 text-xl flex justify-center items-center flex-col pt-10">
          {navLinks.map((link) => (
            <li key={link.label}><a href={link.link} onClick={() => setOpen(false)}>{link.label}</a></li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}