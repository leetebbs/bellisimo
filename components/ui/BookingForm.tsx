"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Calendar } from "@/components/ui/calendar"

const services = [
  { id: "manicure", name: "Manicure", duration: 30 },
  { id: "pedicure", name: "Pedicure", duration: 45 },
  { id: "facial", name: "Facial Treatment", duration: 60 },
  { id: "haircut", name: "Haircut and Styling", duration: 60 },
]

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

export default function BookingForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState("")
  const { toast } = useToast()

  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")

  useEffect(() => {
    if (serviceParam && services.some((s) => s.id === serviceParam)) {
      setService(serviceParam)
    }
  }, [serviceParam])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your server
    console.log("Booking submitted:", { name, email, phone, service, date, time })
    toast({
      title: "Booking Confirmed",
      description: "We've received your booking request. We'll send a confirmation email shortly.",
    })
    // Reset form
    setName("")
    setEmail("")
    setPhone("")
    setService("")
    setDate(undefined)
    setTime("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label>Service</Label>
        <RadioGroup value={service} onValueChange={setService} className="mt-2">
          {services.map((s) => (
            <div key={s.id} className="flex items-center space-x-2">
              <RadioGroupItem value={s.id} id={s.id} />
              <Label htmlFor={s.id}>
                {s.name} ({s.duration} min)
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div>
        <Label>Date</Label>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mt-2"
          disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
        />
      </div>
      <div>
        <Label htmlFor="time">Time</Label>
        <Select value={time} onValueChange={setTime}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a time" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((slot) => (
              <SelectItem key={slot} value={slot}>
                {slot}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        Book Appointment
      </Button>
    </form>
  )
}

