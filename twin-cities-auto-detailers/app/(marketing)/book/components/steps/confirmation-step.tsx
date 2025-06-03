"use client"

import type { BookingData } from "@/lib/types/booking"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, Sparkles, CalendarDays, User, Car, Info } from "lucide-react"

interface ConfirmationStepProps {
  bookingData: BookingData
  onConfirm: () => void
  onBack: () => void
  isSubmitting: boolean
}

export default function ConfirmationStep({ bookingData, onConfirm, onBack, isSubmitting }: ConfirmationStepProps) {
  const { service, selectedDate, selectedTimeSlot, name, email, phone, vehicleMake, vehicleModel, vehicleYear } =
    bookingData

  if (!service || !selectedDate || !selectedTimeSlot) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Missing Information</AlertTitle>
        <AlertDescription>
          Some booking details are missing. Please go back and complete all previous steps.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <CheckCircle className="w-6 h-6 mr-2 text-primary" />
          Confirm Your Booking
        </CardTitle>
        <CardDescription>Please review your booking details below before confirming.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-primary" />
            Service Details
          </h3>
          <p>
            <strong>Service:</strong> {service.title}
          </p>
          <p className="text-sm text-muted-foreground">{service.tagline}</p>
        </div>
        <div className="border-t pt-4">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <CalendarDays className="w-5 h-5 mr-2 text-primary" />
            Date & Time
          </h3>
          <p>
            <strong>Date:</strong>{" "}
            {selectedDate.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>
            <strong>Time:</strong> {selectedTimeSlot.startTime} - {selectedTimeSlot.endTime}
          </p>
        </div>
        <div className="border-t pt-4">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <User className="w-5 h-5 mr-2 text-primary" />
            Your Information
          </h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
        </div>
        <div className="border-t pt-4">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <Car className="w-5 h-5 mr-2 text-primary" />
            Vehicle Information
          </h3>
          <p>
            <strong>Make:</strong> {vehicleMake}
          </p>
          <p>
            <strong>Model:</strong> {vehicleModel}
          </p>
          <p>
            <strong>Year:</strong> {vehicleYear}
          </p>
        </div>

        <Alert className="mt-6 bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:border-blue-700/50">
          <Info className="h-4 w-4 !text-blue-600 dark:!text-blue-400" />
          <AlertDescription className="text-blue-700 dark:text-blue-300">
            Payment will be processed on-site upon completion of the service. This booking reserves your spot.
          </AlertDescription>
        </Alert>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={onBack} disabled={isSubmitting}>
            Back
          </Button>
          <Button onClick={onConfirm} disabled={isSubmitting}>
            {isSubmitting ? "Confirming..." : "Confirm & Book Now"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
