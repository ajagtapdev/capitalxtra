"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { T, Var } from "gt-next";
import Image from "next/image";
import { scrollToSection } from '../utils/scroll';

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
		e.preventDefault();
		scrollToSection(sectionId.replace('#', ''));
		setMobileMenuOpen(false);
	};

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
									<a
										href="#demo"
										onClick={(e) => handleNavClick(e, 'demo')}
										className="text-foreground hover:text-accent transition-colors"
									>
										Demo
									</a>
								</li>
								<li>
									<a
										href="#features"
										onClick={(e) => handleNavClick(e, 'features')}
										className="text-foreground hover:text-accent transition-colors"
									>
										Features
									</a>
								</li>
								<li>
									<a
										href="#how-it-works"
										onClick={(e) => handleNavClick(e, 'how-it-works')}
										className="text-foreground hover:text-accent transition-colors"
									>
										How it Works
									</a>
								</li>
							</ul>
						</nav>

						<div className="hidden lg:flex gap-x-4">
							<Link
								href="https://devpost.com/software/capitalx"
								className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors font-medium"
							>
								Get Started
							</Link>
						</div>

						<div className="lg:hidden">
							<button
								className="text-white p-2"
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
						<div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-[#2D3748] py-4">
							<div className="container mx-auto px-4">
								<nav className="flex flex-col space-y-4">
									<a
										href="#demo"
										onClick={(e) => handleNavClick(e, 'demo')}
										className="text-foreground hover:text-accent transition-colors py-2"
									>
										Demo
									</a>
									<a
										href="#features"
										onClick={(e) => handleNavClick(e, 'features')}
										className="text-foreground hover:text-accent transition-colors py-2"
									>
										Features
									</a>
									<a
										href="#how-it-works"
										onClick={(e) => handleNavClick(e, 'how-it-works')}
										className="text-foreground hover:text-accent transition-colors py-2"
									>
										How it Works
									</a>
									<Link
										href="https://devpost.com/software/capitalx"
										className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors font-medium text-center"
										onClick={() => setMobileMenuOpen(false)}
									>
										Get Started
									</Link>
								</nav>
							</div>
						</div>
					)}
				</Var>
			</header>
		</T>
	);
}
