import { ShoppingBag, CreditCard, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: ShoppingBag,
      title: "Browse & Select",
      description:
        "Explore a wide range of the latest electronics — from smartphones to gaming gear. Pick what suits your needs.",
    },
    {
      icon: CreditCard,
      title: "Pay Securely",
      description:
        "Check out with confidence using secure and fast payment options. Your data and transactions are protected.",
    },
    {
      icon: Truck,
      title: "Fast Delivery or Pickup",
      description:
        "Get your tech delivered right to your doorstep or pick it up from a nearby location — safe, fast, and reliable.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl mb-3 tracking-tight leading-tight text-green-600">
            How to Shop
          </h2>
          <p className="text-base text-neutral-600 max-w-xl mx-auto">
            Finding your next gadget has never been easier. Shop top-quality
            electronics online — quick, secure, and delivered to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-green-50 p-4 rounded-full">
                  <step.icon className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-base text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
