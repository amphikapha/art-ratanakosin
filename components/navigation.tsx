"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#hero", label: "หน้าแรก" },
  { href: "#overview", label: "ข้อมูลพื้นฐาน" },
  { href: "#history", label: "ความเป็นมา" },
  { href: "#sacred-things", label: "สิ่งศักดิ์สิทธิ์สำคัญ" },
  { href: "#rituals", label: "พิธีกรรม" },
  { href: "#contact", label: "ติดต่อ" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-deep-red"
                fill="currentColor"
              >
                <path d="M12 2L2 12h3v9h6v-6h2v6h6v-9h3L12 2zm0 2.84L19.13 12H18v7h-4v-6H10v6H6v-7H4.87L12 4.84z" />
              </svg>
            </div>
            <div
              className={`hidden sm:block ${isScrolled ? "text-deep-red" : "text-cream"}`}
            >
              <p className="font-serif text-lg font-semibold leading-tight">
                วัดสระเกศราชวรมหาวิหาร
              </p>
              {/* <p className="text-xs opacity-80">ราชวรมหาวิหาร</p> */}
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? "text-brown-dark hover:text-deep-red hover:bg-gold/10"
                    : "text-cream hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? "text-deep-red" : "text-cream"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gold/20">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 rounded-lg font-medium text-brown-dark hover:text-deep-red hover:bg-gold/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
