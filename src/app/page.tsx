import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Sparkles, Heart } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Peacocks Nail Salon",
    telephone: "01483 730833",
    address: {
      "@type": "PostalAddress",
      streetAddress: "22A The Peacocks Centre",
      addressLocality: "Woking",
      postalCode: "GU21 6GB",
      addressCountry: "GB",
    },
  };

  const reviews = [
    {
      text: "Very friendly and helpful staff, good value for money. My nails always look good.",
      author: "Local Customer",
    },
    {
      text: "Excellent service! My nails have never looked better.",
      author: "Satisfied Client",
    },
    {
      text: "Brilliant pedicure and manicure service. I travel fortnightly just to come here.",
      author: "Regular Client",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519014816548-bf5fe459e98b?auto=format&fit=crop&q=80&w=2000"
            alt="Elegant nail salon interior"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <Badge className="mb-6 bg-accent/90 text-accent-foreground hover:bg-accent border-none px-4 py-1 text-sm rounded-full backdrop-blur-sm">
            Premium Nail Care in Woking
          </Badge>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
            Where Elegance <br className="hidden md:block" /> Meets Artistry.
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl font-light drop-shadow-md">
            Experience unparalleled nail treatments in the heart of Woking at The Peacocks Centre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none text-base h-14 px-8">
              <Link href="tel:01483730833">Call to Book</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white backdrop-blur-md rounded-none text-base h-14 px-8">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center p-6">
              <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-6 text-accent">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">Expert Nail Technicians</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our highly skilled team is dedicated to providing precision, artistry, and the highest standards of nail care.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 relative">
              <div className="hidden md:block absolute top-14 -left-6 w-12 border-t border-border border-dashed"></div>
              <div className="hidden md:block absolute top-14 -right-6 w-12 border-t border-border border-dashed"></div>
              <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-6 text-accent">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">Located in The Peacocks Centre</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Conveniently situated in central Woking, perfect for a relaxing pampering session during your day out.
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-6 text-accent">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">Welcoming and Relaxing</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Step into our serene oasis, designed to help you unwind and enjoy a premium, stress-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image split */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] w-full overflow-hidden rounded-sm shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000"
                alt="Relaxing spa environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Elevate Your <br /> Everyday Style
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                At Peacocks Nail Salon, we believe your nails are a canvas. From classic manicures to bespoke nail enhancements, our team crafts elegant results tailored to your unique aesthetic.
              </p>
              <div className="flex items-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none w-fit">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="py-24 bg-card border-t border-b">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
            Loved by Our Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <Card key={i} className="bg-background border-border rounded-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 flex flex-col items-center text-center gap-6">
                  <div className="flex gap-1 text-accent">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="font-light text-muted-foreground italic leading-relaxed">
                    &quot;{review.text}&quot;
                  </p>
                  <p className="font-heading font-medium text-foreground uppercase tracking-wider text-sm">
                    — {review.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
