export default function PropertiesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-8">Properties</h1>
        {children}
      </div>
    )
  }