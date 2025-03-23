"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cpu, Battery, Info, MapPin, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function ResultsPage() {
  const params = useParams()
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-12 px-4">
        <Link href="/">
          <Button variant="ghost" className="mb-6 text-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Upload
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-6 col-span-1 bg-green-50 border-green-200">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <Cpu className="mr-2 h-5 w-5" />
              {params.waste}
            </h2>

            <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
              <Image src="/placeholder.svg?height=300&width=400" alt="Uploaded e-waste" fill className="object-cover" />
            </div>

            <div className="bg-white p-4 rounded-md">
              <h3 className="text-xl font-semibold text-green-700">{}</h3>
              <p className="text-gray-600 mt-2">
                Lithium-ion battery from a laptop computer, containing hazardous materials that require proper disposal.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Lithium-ion</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Hazardous</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Battery</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 col-span-1 bg-green-50 border-green-200">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <Info className="mr-2 h-5 w-5" />
              Educational Information
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md">
                <h3 className="font-semibold text-green-700">Environmental Impact</h3>
                <p className="text-gray-600 mt-1">
                  Lithium-ion batteries contain toxic chemicals that can contaminate soil and water if disposed of
                  improperly. One battery can pollute 600,000 liters of water.
                </p>
              </div>

              <div className="bg-white p-4 rounded-md">
                <h3 className="font-semibold text-green-700">Recycling Benefits</h3>
                <p className="text-gray-600 mt-1">
                  Recycling batteries recovers valuable materials like lithium, cobalt, and copper, reducing the need
                  for mining raw materials and saving energy.
                </p>
              </div>

              <div className="bg-white p-4 rounded-md">
                <h3 className="font-semibold text-green-700">Proper Handling</h3>
                <p className="text-gray-600 mt-1">
                  Store in a cool, dry place. Cover terminals with tape to prevent short circuits. Never puncture or
                  incinerate batteries.
                </p>
              </div>

              <div className="bg-white p-4 rounded-md">
                <h3 className="font-semibold text-green-700">Regulations</h3>
                <p className="text-gray-600 mt-1">
                  Many regions require proper disposal of batteries through certified recycling programs due to their
                  hazardous classification.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 col-span-1 bg-green-50 border-green-200">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Nearby Disposal Sites
            </h2>

            <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Map of nearby disposal sites"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md">
                <h3 className="font-semibold text-green-700">EcoTech Recycling Center</h3>
                <p className="text-gray-600 mt-1">123 Green Street, Eco City</p>
                <p className="text-gray-600">1.2 miles away • Open 9AM-5PM</p>
                <Button variant="outline" className="mt-2 text-green-700 border-green-500">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>

              <div className="bg-white p-4 rounded-md">
                <h3 className="font-semibold text-green-700">City Hazardous Waste Facility</h3>
                <p className="text-gray-600 mt-1">456 Recycle Avenue, Eco City</p>
                <p className="text-gray-600">2.8 miles away • Open 8AM-6PM</p>
                <Button variant="outline" className="mt-2 text-green-700 border-green-500">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>

              <div className="bg-white p-4 rounded-md">
                <h3 className="font-semibold text-green-700">GreenTech Electronics Store</h3>
                <p className="text-gray-600 mt-1">789 Sustainable Road, Eco City</p>
                <p className="text-gray-600">3.5 miles away • Open 10AM-8PM</p>
                <Button variant="outline" className="mt-2 text-green-700 border-green-500">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <footer className="bg-green-600 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p>© 2025 E-Waste Recycler. All rights reserved.</p>
          <p className="mt-2 text-green-100">Helping you make environmentally responsible decisions.</p>
        </div>
      </footer>
    </div>
  )
}

