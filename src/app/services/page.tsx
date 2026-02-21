import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Flower2, Droplet, Paintbrush } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our premium nail treatments, including manicures, pedicures, gel nails, and elegant enhancements at Peacocks Nail Salon.",
};

export default function ServicesPage() {
    const services = [
        {
            title: "Manicure",
            description: "A restorative treatment for your hands. Includes meticulous cuticle care, nail shaping, a relaxing massage, and your choice of premium polish.",
            icon: <Flower2 className="w-8 h-8 text-accent" />,
        },
        {
            title: "Pedicure",
            description: "The ultimate pampering for your feet. Soak, exfoliation, detailed nail and cuticle attention, followed by a soothing massage and flawless finish.",
            icon: <Droplet className="w-8 h-8 text-accent" />,
        },
        {
            title: "Gel Nails",
            description: "Long-lasting, high-gloss gel manicures and pedicures that resist chipping and maintain their brilliant shine for weeks.",
            icon: <Sparkles className="w-8 h-8 text-accent" />,
        },
        {
            title: "Nail Enhancements",
            description: "Custom acrylics, dip powder, and gel extensions sculpted to perfection to give you the exact length, shape, and artistry you desire.",
            icon: <Paintbrush className="w-8 h-8 text-accent" />,
        },
    ];

    return (
        <div className="flex flex-col min-h-[80vh] bg-background">
            {/* Header Banner */}
            <section className="bg-muted py-20 px-4 md:px-8 text-center border-b border-border">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                    Our Services
                </h1>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                    Indulge in our curated selection of treatments designed to relax, restore, and beautify.
                </p>
            </section>

            {/* Services Grid */}
            <section className="py-24 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service) => (
                        <Card key={service.title} className="bg-[#FFF8F0] border-border rounded-sm shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-6 pb-2">
                                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-border/50 text-accent">
                                    {service.icon}
                                </div>
                                <div>
                                    <CardTitle className="font-heading text-2xl text-foreground">{service.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-2">
                                <CardDescription className="text-base text-muted-foreground font-light leading-relaxed mb-6">
                                    {service.description}
                                </CardDescription>
                                <div className="flex items-center justify-between border-t border-border/40 pt-6">
                                    <span className="text-sm font-medium text-foreground uppercase tracking-wider">Prices available upon consultation</span>
                                    <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
                                        <Link href="/contact">Contact us to book</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
