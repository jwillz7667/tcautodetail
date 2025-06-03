import Link from "next/link"

export default function QuotePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Get a Quote</h1>
      <p className="mb-4">Our automated quote generator is coming soon!</p>
      <p>
        In the meantime, please{" "}
        <Link href="/contact" className="text-blue-500 hover:underline">
          contact us
        </Link>{" "}
        for a personalized quote.
      </p>
    </div>
  )
}
