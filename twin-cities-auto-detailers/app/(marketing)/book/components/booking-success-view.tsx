"use client"

import type { BookingConfirmation } from "@/lib/types/booking"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PartyPopper, Sparkles, CalendarDays, Car } from "lucide-react"
import Link from "next/link"

interface BookingSuccessViewProps {
  confirmationDetails: BookingConfirmation
}

export default function BookingSuccessView({ confirmationDetails }: BookingSuccessViewProps) {
  const { bookingId, service, selectedDate, selectedTimeSlot, name, vehicleMake, vehicleModel } = confirmationDetails

  return (
    <Card className="w-full max-w-2xl text-center">
      <CardHeader>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mb-4">
          <PartyPopper className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
        <CardDescription>
          Thank you, {name}! Your appointment is scheduled. A confirmation email has been sent (simulated).
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-left">
        <p className="text-center text-sm text-muted-foreground">Booking ID: {bookingId}</p>

        {service && (
          <div>
            <h3 className="font-semibold text-md mb-1 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Service
            </h3>
            <p>{service.title}</p>
          </div>
        )}

        {selectedDate && selectedTimeSlot && (
          <div className="border-t pt-3">
            <h3 className="font-semibold text-md mb-1 flex items-center">
              <CalendarDays className="w-4 h-4 mr-2 text-primary" />
              Date & Time
            </h3>
            <p>
              {selectedDate.toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              at {selectedTimeSlot.startTime}
            </p>
          </div>
        )}

        {vehicleMake && vehicleModel && (
          <div className="border-t pt-3">
            <h3 className="font-semibold text-md mb-1 flex items-center">
              <Car className="w-4 h-4 mr-2 text-primary" />
              Vehicle
            </h3>
            <p>
              {confirmationDetails.vehicleYear} {vehicleMake} {vehicleModel}
            </p>
          </div>
        )}

        <p className="text-sm text-muted-foreground pt-4 border-t">
          We look forward to seeing you! If you need to make any changes, please contact us.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button asChild className="flex-1">
            <Link href="/">Back to Homepage</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href="/services">Explore Other Services</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
