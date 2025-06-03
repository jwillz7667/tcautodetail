import * as z from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .regex(/^\\+?[0-9\\s()\\-]+$/, { message: "Invalid phone number format." }), // Allows digits, spaces, (), -, and optional + at the start
  vehicleMake: z.string().min(2, { message: "Vehicle make is required." }),
  vehicleModel: z.string().min(1, { message: "Vehicle model is required." }),
  vehicleYear: z
    .string()
    .min(4, { message: "Enter a 4-digit year." })
    .max(4, { message: "Enter a 4-digit year." })
    .regex(/^\\d{4}$/, { message: "Invalid year format." })
    .refine(
      (year) => {
        const numYear = Number.parseInt(year);
        const currentYear = new Date().getFullYear();
        return numYear >= 1900 && numYear <= currentYear + 1;
      },
      { message: "Please enter a valid year." }
    ),
  preferredService: z.string().min(1, { message: "Please select a service." }),
  preferredDate: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
    return undefined;
  }, z.date().optional().nullable()), // Keep preprocess from server for consistency if date can be string
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});

// We can also export the inferred type if it's useful in other places
export type BookingInquiryFormData = z.infer<typeof inquirySchema>; 