import { buttonVariants } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


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
            <div>
              <h6>Telefono</h6>
              <a href="tel:+34-647-31-72-14" className='text-secondary'>+34 647 31 72 14</a>
            </div>
            <div>
              <h6>Email</h6>
              <a href="mailto:nanofitnessclub@gamil.com" className='text-secondary'>nanofitnessclub@gamil.com</a>
            </div>
            <div>
              <h6>Zona</h6>
              <a href="https://maps.app.goo.gl/gGpA3JwSkiR3H8RK6" className='text-secondary'>San Pedro de Alcantara, Marbella, Nueva Andalucia, Estepona</a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}