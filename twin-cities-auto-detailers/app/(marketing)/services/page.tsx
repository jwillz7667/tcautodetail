import AllServicesClientPage from "./AllServicesClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Auto Detailing Services | Twin Cities Auto Detailers",
  description:
    "Explore the comprehensive range of professional auto detailing services offered by Twin Cities Auto Detailers, from interior and exterior cleaning to ceramic coatings and paint protection.",
}

export default function AllServicesPage() {
  return <AllServicesClientPage />
}
