import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { horas, services } from "@/constants"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useToast } from '../../components/ui/use-toast'

// Translation Imports
import { useTranslations } from '../../i18n/utils'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  address: z.string().min(2, {
    message: "Address is required.",
  }),
  time: z.string(),
  services: z.string(),
  message: z.string(),
  date: z.date({
    required_error: "A date is required.",
  }),
  phone: z.string().min(1, {
    message: "Phone is required.",
  }),
})


export function BookingForm({ lang }: { lang: 'es' | 'en' }) {

  const t = useTranslations(lang)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      address: "",
      time: "",
      services: "",
      date: new Date(),
      message: '',
      phone: ''
    },
  })


  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch('/api/sendEmail.json', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        values
      })
    })

    if (res.status === 200) {
      toast({
        duration: 5000,
        title: t('form-toast-ok'),
        description: `${format(values.date, "PPP")} / ${values.time} / ${t('form-toast-ok-description')}`,
      })
      form.reset()
    } else {
      toast({
        duration: 5000,
        variant: "destructive",
        title: t('form-toast-wrong'),
        description: t('form-toast-wrong-description'),
      })
    }

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset disabled={form.formState.isSubmitting} className="group space-y-3 p-5">
          <div className="flex items-center justify-between md:gap-10 gap-3 w-full flex-col md:flex-row">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form-name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form-name-placeholder')} {...field} className="w-[300px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form-time')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={`w-[300px] ${field.value === "" ? 'text-muted-foreground' : 'text-white'}`}>
                        <SelectValue placeholder={t('form-time-placeholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {horas.map((h) => (
                        <SelectItem key={h} value={h}>{h}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between md:gap-10 gap-3 w-full flex-col md:flex-row">
            <FormField
              control={form.control}
              name="services"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form-services')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={`w-[300px] ${field.value === "" ? 'text-muted-foreground' : 'text-white'}`}>
                        <SelectValue placeholder={t('form-services-placeholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((h) => (
                        <SelectItem key={h.title} value={h.title}>{h.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-3">
                  <FormLabel className="p-1">{t('form-date')}</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[300px] pl-3 text-left font-normal h-[41px]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {format(field.value, "PPP")}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-between md:gap-10 gap-3 w-full flex-col md:flex-row">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form-address')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form-address-placeholder')} {...field} className="w-[300px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form-phone')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form-phone-placeholder')} {...field} className="w-[300px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form-message')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form-message-placeholder')} {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="group-disabled:bg-gray-700 group-disabled:pointer-events-none">{t('form-submit')}</Button>
        </fieldset>
      </form>
    </Form >
  )
}