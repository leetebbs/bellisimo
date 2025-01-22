import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Manicure & Pedicure",
    description: "Pamper your hands and feet with our luxurious nail treatments.",
  },
  {
    id: 2,
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our customized facial treatments.",
  },
  {
    id: 3,
    title: "Hair Styling",
    description: "Get the perfect look with our expert hair styling services.",
  },
  {
    id: 4,
    title: "Makeup Application",
    description: "Enhance your beauty with our professional makeup services.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Enhance Your Natural Beauty
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose from our wide range of beauty and nail services.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`/book?service=${service.id}`}>Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

