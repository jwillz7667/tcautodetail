"use client"

import { cn } from "@/lib/utils"

import type { ServiceDetails } from "@/lib/services-data"
import { getMockServices } from "@/lib/availability"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

interface ServiceSelectionStepProps {
  selectedService: ServiceDetails | null | undefined
  onServiceSelect: (service: ServiceDetails) => void
  onNext: () => void
}

export default function ServiceSelectionStep({ selectedService, onServiceSelect, onNext }: ServiceSelectionStepProps) {
  const [services, setServices] = useState<ServiceDetails[]>([])
  const [currentSelection, setCurrentSelection] = useState<string | undefined>(selectedService?.slug)

  useEffect(() => {
    setServices(getMockServices())
  }, [])

  const handleSelect = (slug: string) => {
    const service = services.find((s) => s.slug === slug)
    if (service) {
      setCurrentSelection(slug)
      onServiceSelect(service)
    }
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <Sparkles className="w-6 h-6 mr-2 text-primary" />
          Select a Service
        </CardTitle>
        <CardDescription>Choose the detailing service you're interested in.</CardDescription>
      </CardHeader>
      <CardContent>
        {services.length === 0 ? (
          <p>Loading services...</p>
        ) : (
          <RadioGroup value={currentSelection} onValueChange={handleSelect}>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {services.map((service) => (
                  <Label
                    key={service.slug}
                    htmlFor={service.slug}
                    className={cn(
                      "flex flex-col items-start space-x-3 space-y-0 rounded-md border p-4 transition-all hover:bg-accent hover:text-accent-foreground",
                      currentSelection === service.slug ? "border-primary ring-2 ring-primary" : "",
                    )}
                  >
                    <div className="flex items-center w-full">
                      <RadioGroupItem value={service.slug} id={service.slug} className="mr-3" />
                      <div className="flex-grow">
                        <span className="font-bold text-lg">{service.title}</span>
                        <p className="text-sm text-muted-foreground">{service.tagline}</p>
                        {service.startingPrice && (
                          <p className="text-sm font-medium mt-1">From: {service.startingPrice}</p>
                        )}
                      </div>
                      {service.icon && <div className="ml-auto text-primary opacity-70">{service.icon}</div>}
                    </div>
                  </Label>
                ))}
              </div>
            </ScrollArea>
          </RadioGroup>
        )}
        <Button onClick={onNext} disabled={!currentSelection} className="w-full mt-6">
          Next: Select Date & Time
        </Button>
      </CardContent>
    </Card>
  )
}
