'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', { name, email, message })
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Contact <span className="text-pink-600">Bellisimo</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-pink-600 mr-3" />
                <span>123 Beauty Lane, Glamour City, ST 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-pink-600 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-pink-600 mr-3" />
                <span>info@bellisimobeauty.com</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                <li>Saturday: 10:00 AM - 6:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
