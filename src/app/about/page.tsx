import { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Peacocks Nail Salon, Woking's premier destination for elegant nail care, conveniently located in The Peacocks Centre.",
};

export default function AboutPage() {
    const reasons = [
        "Central Woking location in The Peacocks Centre",
        "Expert nail technicians with years of experience",
        "4.2-star Google rating from our lovely clients",
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header Banner */}
            <section className="bg-muted py-20 px-4 md:px-8 text-center border-b border-border">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                    About Peacocks
                </h1>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                    Woking’s premier destination for sophisticated nail artistry.
                </p>
            </section>

            {/* Main Content */}
            <section className="py-24 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
                            Our Story
                        </h2>
                        <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
                            <p>
                                At Peacocks Nail Salon, we are passionate about delivering exceptional nail care in an environment that allows you to truly relax. Our philosophy is simple: we believe that elegance and artistry should go hand-in-hand with a warm, welcoming experience.
                            </p>
                            <p>
                                Our location at <strong>22A The Peacocks Centre</strong> makes us the perfect sanctuary during a busy day of shopping or a convenient stop on your commute. We&apos;ve nestled our premium salon right in the heart of Woking, ensuring that luxury nail treatments are always within reach. Step away from the hustle and bustle, and let our expert team pamper you.
                            </p>
                        </div>

                        <div className="mt-8 bg-card p-10 rounded-sm shadow-sm border border-border">
                            <h3 className="font-heading text-2xl font-medium text-foreground mb-6">Why Peacocks?</h3>
                            <ul className="space-y-4">
                                {reasons.map((reason, index) => (
                                    <FadeIn key={index} delay={index * 150} direction="right">
                                        <li className="flex items-start gap-3">
                                            <div className="bg-accent/20 p-1 rounded-full text-accent mt-0.5 shrink-0">
                                                <Check className="h-4 w-4" />
                                            </div>
                                            <span className="text-foreground leading-relaxed">{reason}</span>
                                        </li>
                                    </FadeIn>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative h-[700px] w-full overflow-hidden rounded-sm shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1000"
                            alt="Nail polish and pristine salon tools"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-muted/30 border-t border-border">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                            Find Us in Woking
                        </h2>
                        <p className="text-muted-foreground font-light">
                            We are conveniently located at 22A The Peacocks Centre, Woking.
                        </p>
                    </div>
                    <div className="w-full h-[500px] rounded-sm overflow-hidden shadow-sm border border-border bg-card">
                        <iframe
                            title="Peacocks Nail Salon Location"
                            src="https://maps.google.com/maps?q=22A%20The%20Peacocks%20Centre,%20Woking,%20Surrey,%20GU21%206GB&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[0.2] contrast-[0.9] opacity-90"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
