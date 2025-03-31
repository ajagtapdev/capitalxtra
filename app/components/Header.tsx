"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { Menu, X} from "lucide-react";
import { motion } from "framer-motion";
import { T, Var } from "gt-next";
import { LocaleSelector } from "gt-next/client";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setMobileMenuOpen(false);
	};

	return (
		<T id="components.header.1">
			<header className="fixed top-0 left-0 right-0 z-50 bg-[#131721]/80 backdrop-blur-md border-b border-[#1E293B]">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<Link href="/" className="flex items-center space-x-2">
								<Image
										src="/images/1by1.png"
										alt="capitalX Logo"
										width={40}
										height={40}
										className="h-10 w-10"
									/>
								<span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
									capitalX
								</span>
							</Link>
						</div>

						<nav className="hidden lg:block">
							<ul className="flex space-x-8">
								<li>
									<button
										onClick={() => scrollToSection('features')}
										className="text-foreground hover:text-accent transition-colors"
									>
										Features
									</button>
								</li>
								<li>
									<button
										onClick={() => scrollToSection('demo')}
										className="text-foreground hover:text-accent transition-colors"
									>
										Demo
									</button>
								</li>
								<li>
									<button
										onClick={() => scrollToSection('how-it-works')}
										className="text-foreground hover:text-accent transition-colors"
									>
										How it Works
									</button>
								</li>
								<li>
									<button
										onClick={() => scrollToSection('testimonials')}
										className="text-foreground hover:text-accent transition-colors"
									>
										Testimonials
									</button>
								</li>
								<li>
									<button
										onClick={() => scrollToSection('download')}
										className="text-foreground hover:text-accent transition-colors"
									>
										Download
									</button>
								</li>
							</ul>
						</nav>

						<div className="hidden lg:flex gap-x-8">
							<LocaleSelector />
							<button
								onClick={() => scrollToSection('download')}
								className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors font-medium"
							>
								Get Started
							</button>
						</div>

						<div className="lg:hidden">
							<button
								className="text-white"
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							>
								<Var>
									{mobileMenuOpen ? (
										<X className="h-6 w-6" />
									) : (
										<Menu className="h-6 w-6" />
									)}
								</Var>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				<Var>
					{mobileMenuOpen && (
						<T id="components.header.0">
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="lg:hidden bg-[#151B27] border-b border-[#1E293B]"
							>
								<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
									<button
										onClick={() => scrollToSection('how-it-works')}
										className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-accent"
									>
										How it Works
									</button>
									<button
										onClick={() => scrollToSection('testimonials')}
										className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-accent"
									>
										Testimonials
									</button>
									<button
										onClick={() => scrollToSection('download')}
										className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-accent"
									>
										Download
									</button>
									<LocaleSelector className="block px-2 py-2 text-base font-medium text-foreground hover:text-accent" />
									<button
										onClick={() => scrollToSection('download')}
										className="block w-full px-3 py-2 text-base font-medium bg-primary hover:bg-primary-dark text-white rounded-md mt-4"
									>
										Get Started
									</button>
								</div>
							</motion.div>
						</T>
					)}
				</Var>
			</header>
		</T>
	);
}