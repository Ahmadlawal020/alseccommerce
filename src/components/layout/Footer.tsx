import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-8">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-3 text-green-400">Saulawa</h3>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Your one-stop shop for the latest electronics. From smart devices
              to gaming gear, we deliver innovation to your doorstep.
            </p>
            <div className="flex space-x-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-green-400 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-green-400 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Service Hours */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-green-400 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Support Hours
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-300">Monday - Saturday</span>
                <span className="text-white font-medium">
                  9:00 AM - 8:00 PM
                </span>
              </div>
              <p className="text-neutral-400 text-xs mt-2">
                Customer support is available during working hours for inquiries
                and assistance.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-green-400">
              Contact Us
            </h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
                <a
                  href="mailto:support@saulawa.ng"
                  className="text-neutral-300 hover:text-green-400 transition-colors"
                >
                  support@saulawa.ng
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
                <a
                  href="tel:+2349169590109"
                  className="text-neutral-300 hover:text-green-400 transition-colors"
                >
                  +234 916 959 0109
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © 2025 Saulawa. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm">
              Built with <span className="text-red-400">❤️</span> by{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                saulawa
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
