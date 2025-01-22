import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            About <span className="text-pink-600">Bellisimo</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover the story behind Bellisimo Beauty Clinic and our commitment to enhancing your natural beauty.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg text-gray-500">
              Founded in 2010, Bellisimo Beauty Clinic has been at the forefront of beauty and nail care. Our journey
              began with a simple mission: to provide top-quality beauty services in a welcoming and luxurious
              environment.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Over the years, we've grown from a small local salon to a renowned beauty clinic, always staying true to
              our core values of excellence, innovation, and customer satisfaction.
            </p>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-full">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Bellisimo Beauty Clinic interior"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Bellisimo Beauty Clinic team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
            <p className="mt-4 text-lg text-gray-500">
              At Bellisimo, we pride ourselves on our team of highly skilled and passionate beauty professionals. Each
              member of our staff is carefully selected for their expertise, creativity, and commitment to customer
              care.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              From our experienced nail technicians to our licensed estheticians, every team member undergoes continuous
              training to stay at the cutting edge of beauty trends and techniques.
            </p>
            <div className="mt-8">
              <Button>Meet Our Team</Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Excellence</h3>
              <p className="mt-2 text-base text-gray-500">
                We strive for excellence in every service we provide, ensuring that each client leaves feeling beautiful
                and confident.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                We constantly seek out the latest beauty trends and technologies to offer our clients the most advanced
                treatments available.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">Customer Care</h3>
              <p className="mt-2 text-base text-gray-500">
                Our clients are at the heart of everything we do. We're committed to providing a personalized, caring
                experience for everyone who visits Bellisimo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Visit Us Today</h2>
          <p className="mt-4 text-lg text-gray-500">
            Experience the Bellisimo difference for yourself. We look forward to welcoming you to our clinic and helping
            you look and feel your best.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/book">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

