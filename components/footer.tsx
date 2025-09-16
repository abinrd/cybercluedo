import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Calendar, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="mx-auto  flex flex-col justify-center items-center">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <img src="https://pub-190c687b5f3a4e64bff7685431f7c8fd.r2.dev/asthra.svg" alt="Asthra 10.0" className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl">Asthra 10.0</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span>September 20, 2024</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  SJCET Palai, Choondacherry
                  <br />
                  Kottayam, Kerala 686579
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>7025703343 (Lisa)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>8129333560 (Sona)</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Brochure</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start bg-transparent border-primary/20 text-secondary-foreground hover:bg-primary/10"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Event Brochure
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex justify-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4">
            <div className="text-sm text-secondary-foreground/60 text-center">
              © 2025 Asthra 10.0
            </div>
          </div>
        </div>
        </div>
    </footer>
  )
}
