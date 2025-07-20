import { Link } from "react-router-dom";
import mainImg from "../../../public/lovable-uploads/mainImg.jpeg";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 py-16 md:py-20 lg:py-24">
      {/* Background Afro Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full afro-pattern" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight tracking-tight">
              Smart <span className="text-green-600">Electronics</span>.
              <br />
              Delivered to Your Doorstep.
            </h1>

            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover the latest gadgets, devices, and accessories — all at
              unbeatable prices. Fast delivery, trusted brands, and quality you
              can count on.
            </p>

            <div className="pt-2">
              <div className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Shop Now
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg rounded-2xl border-4 border-white shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src={mainImg}
                alt="Modern electronics and gadgets"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Open Hours Badge - Removed since it doesn't fit electronics theme */}
          </div>
        </div>
      </div>
    </div>
  );
}
