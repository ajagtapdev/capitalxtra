"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { T, Var } from "gt-next";
import { LocaleSelector } from "gt-next/client";
import Image from "next/image";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<T id="components.header.1">
			<header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2E]/80 backdrop-blur-md border-b border-[#2D3748]">
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
									<Link
										href="#features"
										className="text-foreground hover:text-accent transition-colors"
									>
										Features
									</Link>
								</li>
								<li>
									<Link
										href="#how-it-works"
										className="text-foreground hover:text-accent transition-colors"
									>
										How it Works
									</Link>
								</li>
								<li>
									<Link
										href="#testimonials"
										className="text-foreground hover:text-accent transition-colors"
									>
										Testimonials
									</Link>
								</li>
								<li>
									<Link
										href="#download"
										className="text-foreground hover:text-accent transition-colors"
									>
										Download
									</Link>
								</li>
							</ul>
						</nav>

						<div className="hidden lg:flex gap-x-8">
							<LocaleSelector />
							<Link
								href="#download"
								className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors font-medium"
							>
								Get Started
							</Link>
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
								className="lg:hidden bg-[#0A0E17] border-b border-[#1E293B]"
							>
								<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
									<Link
										href="#features"
										className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent"
										onClick={() => setMobileMenuOpen(false)}
									>
										Features
									</Link>
									<Link
										href="#how-it-works"
										className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent"
										onClick={() => setMobileMenuOpen(false)}
									>
										How it Works
									</Link>
									<Link
										href="#testimonials"
										className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent"
										onClick={() => setMobileMenuOpen(false)}
									>
										Testimonials
									</Link>
									<Link
										href="#download"
										className="block px-3 py-2 text-base font-medium text-foreground hover:text-accent"
										onClick={() => setMobileMenuOpen(false)}
									>
										Download
									</Link>
									<LocaleSelector className="block px-2 py-2 text-base font-medium text-foreground hover:text-accent" />
									<Link
										href="#download"
										className="block px-3 py-2 text-base font-medium bg-primary hover:bg-primary-dark text-white rounded-md mt-4"
										onClick={() => setMobileMenuOpen(false)}
									>
										Get Started
									</Link>
								</div>
							</motion.div>
						</T>
					)}
				</Var>
			</header>
		</T>
	);
}
