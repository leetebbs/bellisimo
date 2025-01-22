import { Suspense } from "react"
import BookingForm from "@/components/ui/BookingForm"

export default function BookingPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Book Your <span className="text-pink-600">Appointment</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Schedule your beauty treatment with our expert team at Bellisimo Beauty Clinic.
          </p>
        </div>

        <div className="mt-16 max-w-md mx-auto">
          <Suspense fallback={<div>Loading booking form...</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

