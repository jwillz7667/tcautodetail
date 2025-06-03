"use client"

import { useState, useEffect } from "react"
import type { ServiceDetails } from "@/lib/services-data"
import type { TimeSlot } from "@/lib/types/booking"
import { getMockAvailableTimeSlots } from "@/lib/availability"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertCircle, CalendarDays } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface DateTimeStepProps {
  selectedService: ServiceDetails | null | undefined
  selectedDate: Date | null | undefined
  selectedTimeSlot: TimeSlot | null | undefined
  onDateChange: (date: Date | undefined) => void
  onTimeSlotSelect: (slot: TimeSlot) => void
  onNext: () => void
  onBack: () => void
}

export default function DateTimeStep({
  selectedService,
  selectedDate,
  selectedTimeSlot,
  onDateChange,
  onTimeSlotSelect,
  onNext,
  onBack,
}: DateTimeStepProps) {
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [currentDate, setCurrentDate] = useState<Date | undefined>(selectedDate || new Date())

  useEffect(() => {
    if (currentDate) {
      setAvailableSlots(getMockAvailableTimeSlots(currentDate, selectedService?.slug))
    }
  }, [currentDate, selectedService])

  const handleDateSelect = (date: Date | undefined) => {
    setCurrentDate(date)
    onDateChange(date)
    // Reset time slot when date changes
    // onTimeSlotSelect(null); // This would require onTimeSlotSelect to accept null
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <CalendarDays className="w-6 h-6 mr-2 text-primary" />
          Select Date & Time
        </CardTitle>
        <CardDescription>
          Choose a date and an available time slot for your {selectedService?.title || "service"}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Choose Date:</h3>
            <Calendar
              mode="single"
              selected={currentDate}
              onSelect={handleDateSelect}
              className="rounded-md border"
              disabled={(date) => date < today || date.getDay() === 0 /* Disable past dates and Sundays */}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Available Times for {currentDate?.toLocaleDateString()}:</h3>
            {currentDate ? (
              availableSlots.length > 0 ? (
                <ScrollArea className="h-[300px] border rounded-md p-2">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableSlots.map((slot) => (
                      <Button
                        key={slot.startTime}
                        variant={selectedTimeSlot?.startTime === slot.startTime ? "default" : "outline"}
                        onClick={() => onTimeSlotSelect(slot)}
                        disabled={!slot.available}
                        className="w-full"
                      >
                        {slot.startTime}
                        {!slot.available && <span className="ml-1 text-xs">(Booked)</span>}
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              ) : (
                <Alert
                  variant="default"
                  className="bg-yellow-50 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-700/50"
                >
                  <AlertCircle className="h-4 w-4 !text-yellow-600 dark:!text-yellow-400" />
                  <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                    No available time slots for this date. Please select another date.
                  </AlertDescription>
                </Alert>
              )
            ) : (
              <p className="text-muted-foreground">Please select a date first.</p>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button onClick={onNext} disabled={!selectedDate || !selectedTimeSlot}>
            Next: Your Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
