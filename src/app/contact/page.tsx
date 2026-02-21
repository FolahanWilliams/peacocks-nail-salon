import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Peacocks Nail Salon. Find our Woking address, opening hours, and contact information.",
};

export default function ContactPage() {
    const hours = [
        { day: "Monday", time: "9:30 AM – 7:00 PM" },
        { day: "Tuesday", time: "9:30 AM – 7:00 PM" },
        { day: "Wednesday", time: "9:30 AM – 7:00 PM" },
        { day: "Thursday", time: "9:30 AM – 8:00 PM" },
        { day: "Friday", time: "9:30 AM – 7:00 PM" },
        { day: "Saturday", time: "9:30 AM – 6:00 PM" },
        { day: "Sunday", time: "11:00 AM – 5:00 PM" },
    ];

    return (
        <div className="flex flex-col min-h-[85vh] bg-background">
            {/* Header Banner */}
            <section className="bg-muted py-20 px-4 md:px-8 text-center border-b border-border">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                    Get in Touch
                </h1>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                    We look forward to welcoming you to Peacocks Nail Salon.
                </p>
            </section>

            {/* Main Content */}
            <section className="py-24 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16">

                    <div className="flex flex-col gap-8">
                        <h2 className="font-heading text-3xl font-semibold text-foreground mb-2">Visit Us Today</h2>
                        <div className="flex flex-col gap-6">
                            <Card className="bg-[#FFF8F0] border-border rounded-sm shadow-sm group hover:border-accent/40 transition-colors">
                                <CardContent className="p-8 flex items-start gap-6">
                                    <div className="bg-white p-3 rounded-full text-accent shadow-sm border border-border/50 shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-medium text-foreground mb-2">Call to Book</h3>
                                        <p className="text-muted-foreground font-light mb-4 text-base">We recommend calling ahead to secure your preferred appointment time.</p>
                                        <a href="tel:01483730833" className="text-xl font-medium text-accent hover:text-accent/80 transition-colors">
                                            01483 730833
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-[#FFF8F0] border-border rounded-sm shadow-sm hover:border-accent/40 transition-colors">
                                <CardContent className="p-8 flex items-start gap-6">
                                    <div className="bg-white p-3 rounded-full text-accent shadow-sm border border-border/50 shrink-0">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-medium text-foreground mb-2">Our Location</h3>
                                        <address className="not-italic text-muted-foreground font-light text-base leading-relaxed">
                                            22A The Peacocks Centre<br />
                                            Woking, Surrey<br />
                                            GU21 6GB
                                        </address>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-[#FFF8F0] border-border rounded-sm shadow-sm hover:border-accent/40 transition-colors">
                                <CardContent className="p-8 flex items-start gap-6">
                                    <div className="bg-white p-3 rounded-full text-accent shadow-sm border border-border/50 shrink-0">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="font-heading text-xl font-medium text-foreground mb-4">Opening Hours</h3>
                                        <ul className="flex flex-col gap-3 w-full">
                                            {hours.map((schedule) => (
                                                <li key={schedule.day} className="flex justify-between items-center text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0">
                                                    <span className="text-foreground font-medium">{schedule.day}</span>
                                                    <span className="text-muted-foreground font-light">{schedule.time}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center">
                        <Separator orientation="vertical" className="h-full bg-border" />
                    </div>

                    <div className="flex flex-col h-[600px] lg:h-full rounded-sm overflow-hidden shadow-sm border border-border bg-card">
                        <iframe
                            title="Peacocks Nail Salon Map"
                            src="https://maps.google.com/maps?q=22A%20The%20Peacocks%20Centre,%20Woking,%20Surrey,%20GU21%206GB&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ minHeight: "600px", border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[0.2] contrast-[0.9] opacity-90 h-full"
                        />
                    </div>

                </div>
            </section>
        </div>
    );
}
