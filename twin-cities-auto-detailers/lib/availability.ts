import type { ServiceDetails } from "./services-data"
import { servicesData } from "./services-data"
import type { TimeSlot } from "./types/booking"

export const getMockServices = (): ServiceDetails[] => {
  return servicesData
}

export const getMockAvailableTimeSlots = (date: Date, serviceId?: string): TimeSlot[] => {
  // Simulate fetching slots. In a real app, this would query a database.
  // For simplicity, let's assume 1-hour slots from 9 AM to 5 PM.
  const slots: TimeSlot[] = []
  const day = date.getDay() // 0 for Sunday, 6 for Saturday

  // Closed on Sundays
  if (day === 0) {
    return []
  }

  // Shorter hours on Saturdays
  const endHour = day === 6 ? 15 : 17 // 3 PM on Sat, 5 PM on weekdays

  for (let hour = 9; hour < endHour; hour++) {
    // Simulate some slots being booked, especially if it's today or tomorrow
    let available = true
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const selectedDay = new Date(date)
    selectedDay.setHours(0, 0, 0, 0)

    if (selectedDay.getTime() <= today.getTime() + 24 * 60 * 60 * 1000) {
      // If today or tomorrow
      if (Math.random() > 0.6) {
        // 40% chance of being booked
        available = false
      }
    }

    // If a specific service is selected, its duration might affect availability (not implemented here for simplicity)

    slots.push({
      startTime: `${String(hour).padStart(2, "0")}:00`,
      endTime: `${String(hour + 1).padStart(2, "0")}:00`,
      available: available,
    })
  }
  return slots
}

// Simulate storing bookings in localStorage for demo purposes
export const saveMockBooking = (
  bookingData: any,
): Promise<{ success: boolean; bookingId?: string; error?: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate network delay
      try {
        const bookings = JSON.parse(localStorage.getItem("twinCitiesAutoDetailersBookings") || "[]")
        const bookingId = `TCAD-${Date.now().toString().slice(-6)}`
        const newBooking = { ...bookingData, bookingId, bookedAt: new Date().toISOString() }
        bookings.push(newBooking)
        localStorage.setItem("twinCitiesAutoDetailersBookings", JSON.stringify(bookings))
        console.log("Booking saved (mock):", newBooking)
        resolve({ success: true, bookingId })
      } catch (e) {
        console.error("Failed to save mock booking:", e)
        resolve({ success: false, error: "Failed to save booking." })
      }
    }, 500)
  })
}
