import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"

export function PopoverLang({ lang, url }: { lang: 'es' | 'en', url: URL }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-labelledby="Language toggle"
        >
          {lang === 'en' ? 'English' : 'Español'}
        </Button></PopoverTrigger>
      <PopoverContent className="w-fit">
        <ul>
          <li>
            <a title="Sitio Web en Español" href="/es/">Español</a>
          </li>
          <hr className="w-full h-[2px] bg-white my-2" />
          <li>
            <a title="Web Site in English" href="/en/">English</a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>

  )
}