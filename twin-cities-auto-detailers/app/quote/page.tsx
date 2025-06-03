export default function QuotePage() {
  return (
    <div className="container py-12 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Get a Quote</h1>
      <p className="text-lg text-muted-foreground mb-8">Our automated quote generator is coming soon!</p>
      <div className="w-full max-w-2xl p-8 bg-card rounded-lg shadow-xl">
        <p className="text-center">
          In the meantime, please{" "}
          <a href="/contact" className="text-primary hover:underline">
            contact us
          </a>{" "}
          for a personalized quote.
        </p>
        {/* Placeholder for multi-step form */}
      </div>
    </div>
  )
}
