"use client"

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
    const routes = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <Link href="/" className="font-heading text-2xl font-semibold tracking-wide">
                    Peacocks Nail Salon
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            href={route.path}
                            className="text-sm font-medium transition-colors hover:text-accent"
                        >
                            {route.name}
                        </Link>
                    ))}
                    <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none ml-4">
                        <Link href="tel:01483730833">Call to Book</Link>
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background">
                        <div className="flex flex-col gap-6 mt-8">
                            {routes.map((route) => (
                                <Link
                                    key={route.path}
                                    href={route.path}
                                    className="text-lg font-medium transition-colors hover:text-accent"
                                >
                                    {route.name}
                                </Link>
                            ))}
                            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none mt-4">
                                <Link href="tel:01483730833">Call to Book: 01483 730833</Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
