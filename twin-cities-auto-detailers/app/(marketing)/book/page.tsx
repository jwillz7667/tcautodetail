"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import type { BookingInquiryData, BookingConfirmation } from "@/lib/types/booking"
import type { ServiceDetails } from "@/lib/services-data"
import { servicesData } from "@/lib/services-data"
import { createBookingAction } from "@/lib/actions/booking"

import BookingInquiryForm from "./components/booking-inquiry-form"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Loader2, CheckCircleIcon } from "lucide-react"
import { toast } from "@/hooks/use-toast"

function BookingPageContent() {
  const searchParams = useSearchParams()
  const initialServiceSlug = searchParams.get("service")

  const [inquiryData, setInquiryData] = useState<BookingInquiryData>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)

  useEffect(() => {
    if (initialServiceSlug) {
      const preselectedService = servicesData.find((s) => s.slug === initialServiceSlug)
      if (preselectedService) {
        setInquiryData((prev) => ({ ...prev, preferredService: preselectedService.slug }))
      }
    }
  }, [initialServiceSlug])

  const handleInquirySubmit = async (data: BookingInquiryData) => {
    setIsSubmitting(true)
    setSubmissionError(null)
    setSubmissionSuccess(false)

    const finalInquiryData = { ...inquiryData, ...data }

    try {
      const result = await createBookingAction(finalInquiryData)

      if (result.success) {
        setSubmissionSuccess(true)
        toast({
          title: "Inquiry Sent!",
          description: "Thank you! A team member will reach out to you shortly.",
        })
      } else {
        let errorMsg = "Failed to send inquiry."
        if (result.errors) {
          if (Array.isArray(result.errors) && result.errors.length > 0 && "message" in result.errors[0]) {
            errorMsg = result.errors.map((e) => (e as any).message).join(" ")
          } else if (
            typeof result.errors === "object" &&
            "form" in result.errors &&
            Array.isArray(result.errors.form)
          ) {
            errorMsg = result.errors.form.join(" ")
          } else if (typeof result.errors === "string") {
            errorMsg = result.errors
          }
        }
        setSubmissionError(errorMsg)
        toast({
          title: "Submission Failed",
          description: errorMsg,
          variant: "destructive",
        })
      }
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : "An unexpected error occurred."
      setSubmissionError(errMsg)
      toast({
        title: "Error",
        description: errMsg,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submissionSuccess) {
    return (
      <div className="container py-12 flex flex-col items-center justify-center text-center">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Your inquiry has been sent successfully. A team member will reach out to you shortly.
        </p>
      </div>
    )
  }

  return (
    <div className="container py-12">
      {submissionError && (
        <Alert variant="destructive" className="mb-6 max-w-lg mx-auto">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{submissionError}</AlertDescription>
        </Alert>
      )}

      <BookingInquiryForm
        onSubmit={handleInquirySubmit}
        initialServiceSlug={initialServiceSlug}
        isSubmitting={isSubmitting}
        services={servicesData}
      />

      {isSubmitting && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="ml-4 text-lg">Submitting your inquiry...</p>
        </div>
      )}
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="container py-12 text-center">Loading booking form...</div>}>
      <BookingPageContent />
    </Suspense>
  )
}
