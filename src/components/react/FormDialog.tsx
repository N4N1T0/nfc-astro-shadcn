import { buttonVariants } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { contacts } from '@/constants'


export function FormDialog({ text }: { text: string }) {
  return (
    <div className='w-[fit-content] mt-3'>
      <Dialog>
        <DialogTrigger asChild>
          <div className={`${buttonVariants()} cursor-pointer`}>{text}</div>
        </DialogTrigger>
        <DialogContent className='w-auto pt-16 md:pt-10'>
          <DialogHeader>
            <DialogTitle>Metodos de Contacto</DialogTitle>
            <DialogDescription>
              debajo tienes como contactarme elije la que mas comodo te sea!
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-4 mt-2'>
            {contacts.map((item) => (
              <div key={item.label}>
                <h6>{item.label}</h6>
                <a href={item.link} target='_blank' className='text-secondary hover:text-secondary/70 transition-colors duration-200'>{item.linkLabel}</a>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}