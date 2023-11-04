import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"

export function PopoverLang({ lang }: { lang: 'es' | 'en' }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
        >
          {lang}
        </Button></PopoverTrigger>
      <PopoverContent className="w-fit">
        <ul>
          <li>
            <a href="/es/">Español</a>
          </li>
          <hr className="w-full h-[2px] bg-white my-2" />
          <li>
            <a href="/en/">English</a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>

  )
}