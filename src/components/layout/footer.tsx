import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="bg-card py-12 border-t px-4 md:px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <Link href="/" className="font-heading text-2xl font-semibold tracking-wide">
                        Peacocks Nail Salon
                    </Link>
                    <p className="text-muted-foreground text-sm max-w-sm">
                        Where Elegance Meets Artistry. Premium nail care and treatments in the heart of Woking.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-lg font-medium">Quick Links</h3>
                    <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                        <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
                        <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
                        <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-lg font-medium">Contact & Hours</h3>
                    <address className="not-italic text-sm text-muted-foreground flex flex-col gap-2">
                        <p>22A The Peacocks Centre</p>
                        <p>Woking, Surrey, GU21 6GB</p>
                        <p className="font-medium text-foreground mt-2">
                            <a href="tel:01483730833" className="hover:text-accent transition-colors">
                                Phone: 01483 730833
                            </a>
                        </p>
                    </address>
                </div>
            </div>

            <Separator className="container mx-auto mt-12 mb-6 bg-border" />

            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Peacocks Nail Salon. All rights reserved.</p>
                <p className="mt-2 sm:mt-0">Designed elegantly in Woking, UK.</p>
            </div>
        </footer>
    );
}
