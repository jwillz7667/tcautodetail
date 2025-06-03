import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface BookingStepperProps {
  currentStep: number
  steps: string[]
}

export default function BookingStepper({ currentStep, steps }: BookingStepperProps) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center justify-center space-x-2 sm:space-x-4">
        {steps.map((stepName, index) => {
          const stepNumber = index + 1
          const isCompleted = currentStep > stepNumber
          const isActive = currentStep === stepNumber

          return (
            <li key={stepName} className="relative flex-1">
              <div className="flex items-center text-sm font-medium">
                <span
                  className={cn(
                    "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2",
                    isCompleted ? "border-primary bg-primary text-primary-foreground" : "",
                    isActive ? "border-primary text-primary" : "border-muted-foreground/50 text-muted-foreground",
                  )}
                >
                  {isCompleted ? <Check className="h-6 w-6" /> : <span>{String(stepNumber).padStart(2, "0")}</span>}
                </span>
                <span
                  className={cn(
                    "ml-2 hidden text-sm font-medium sm:block",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {stepName}
                </span>
              </div>
              {index !== steps.length - 1 && (
                <div
                  className="absolute inset-0 top-5 left-[calc(2.5rem+0.5rem)] right-[calc(-50%+1.25rem)] hidden h-0.5 bg-gray-200 dark:bg-gray-700 md:block"
                  aria-hidden="true"
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
