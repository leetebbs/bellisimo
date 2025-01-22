import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    title: "Manicure & Pedicure",
    description: "Pamper your hands and feet with our luxurious nail treatments.",
  },
  {
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our customized facial treatments.",
  },
  {
    title: "Teeth Whitening",
    description: "Get the perfect smile with our expert teeth whitening services.",
  },
  {
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
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

