"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getDirectionClasses = () => {
        switch (direction) {
            case "up":
                return "translate-y-8";
            case "down":
                return "-translate-y-8";
            case "left":
                return "-translate-x-8";
            case "right":
                return "translate-x-8";
            default:
                return "";
        }
    };

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getDirectionClasses()}`
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
