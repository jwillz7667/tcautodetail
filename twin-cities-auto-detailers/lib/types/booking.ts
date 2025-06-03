import type { ServiceDetails } from "./services-data"

export interface TimeSlot {
  startTime: string // e.g., "09:00"
  endTime: string // e.g., "10:00"
  available: boolean
}

export interface BookingData {
  service?: ServiceDetails | null
  selectedDate?: Date | null
  selectedTimeSlot?: TimeSlot | null
  name?: string
  email?: string
  phone?: string
  vehicleMake?: string
  vehicleModel?: string
  vehicleYear?: string
}

export interface BookingConfirmation extends BookingData {
  bookingId: string
  bookedAt: Date
}

// New type for the simplified inquiry form
export interface BookingInquiryData {
  name?: string;
  email?: string;
  phone?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  preferredService?: string; // Slug of the service
  preferredDate?: Date | null;
  preferredTime?: string;
  message?: string;
  // Add any other fields that might be pre-filled or needed by the action
}
