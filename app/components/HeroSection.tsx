"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Check, Smartphone, Wand2, Star, Shield } from "lucide-react";
import { T } from "gt-next";

const keyFeatures = [
	{
		label: "Smart Card Selection",
		icon: <Wand2 className="text-accent mr-2 h-5 w-5" />
	},
	{
		label: "Real-time Rewards",
		icon: <Star className="text-accent mr-2 h-5 w-5" />
	},
	{
		label: "Secure Storage",
		icon: <Shield className="text-accent mr-2 h-5 w-5" />
	}
];

export default function HeroSection() {
	return (
		<T id="components.herosection.0">
			<section className="relative pt-20 overflow-hidden">
				{/* Background gradient effects */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
					<div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
					<div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
				</div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="flex flex-col lg:flex-row items-center lg:space-x-12 pt-16 pb-16 lg:pb-32">
						<div className="w-full lg:w-1/2 mb-12 lg:mb-0">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
							>
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
									Smart Card Selection with{" "}
									<span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
										AI Technology
									</span>
								</h1>

								<p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
									capitalX uses advanced AI to automatically select the best credit card for every purchase, 
									maximizing your rewards and benefits in real-time. 
								</p>

								<div className="flex flex-col sm:flex-row gap-4 mb-8">
									<a
										href="#demo"
										className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
									>
										Watch Demo
										<ChevronRight className="ml-2 h-5 w-5" />
									</a>
									<a
										href="https://devpost.com/software/capitalx"
										className="inline-flex items-center justify-center bg-[#1E293B] hover:bg-[#2D3748] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
									>
										Get Started
									</a>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
									{keyFeatures.map((feature, index) => (
										<div key={index} className="flex items-center bg-[#1A1F2E] rounded-lg p-4">
											{feature.icon}
											<span className="text-gray-300">{feature.label}</span>
										</div>
									))}
								</div>
							</motion.div>
						</div>

						<div className="w-full lg:w-1/2 relative">
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.7, delay: 0.2 }}
								className="relative z-10 p-4"
							>
								<div className="bg-gradient-to-br from-[#1A1F2E] to-[#0F1523] rounded-3xl overflow-hidden border border-[#2D3748] shadow-2xl relative">
									<div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/20 to-transparent"></div>
									<div className="px-6 py-8 relative z-10">
										<div className="flex justify-between items-center mb-8">
											<div className="flex items-center space-x-3">
												<Smartphone className="h-8 w-8 text-accent" />
												<span className="text-white font-bold text-lg">
													Mobile App
												</span>
											</div>
										</div>

										<div className="flex gap-8 justify-center">
											<div className="relative w-[250px] h-[500px] bg-transparent rounded-3xl overflow-hidden shadow-lg">
												<Image
													src="/images/phone.png"
													alt="capitalX Mobile App 1"
													fill
													className="object-contain"
													priority
													sizes="250px"
												/>
											</div>
											<div className="relative w-[250px] h-[500px] bg-transparent rounded-3xl overflow-hidden shadow-lg">
												<Image
													src="/images/phone2.png"
													alt="capitalX Mobile App 2"
													fill
													className="object-contain"
													sizes="250px"
												/>
											</div>
											<div className="relative w-[250px] h-[500px] bg-transparent rounded-3xl overflow-hidden shadow-lg">
												<Image
													src="/images/phone3.png"
													alt="capitalX Mobile App 3"
													fill
													className="object-contain"
													sizes="250px"
												/>
											</div>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Floating elements */}
							<motion.div
								initial={{ opacity: 0, x: 20, y: -20 }}
								animate={{ opacity: 1, x: 0, y: 0 }}
								transition={{ duration: 0.7, delay: 0.5 }}
								className="absolute -top-4 -right-4 bg-accent p-2 rounded-full shadow-lg"
							>
								<Smartphone className="h-6 w-6 text-white" />
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20, y: 20 }}
								animate={{ opacity: 1, x: 0, y: 0 }}
								transition={{ duration: 0.7, delay: 0.7 }}
								className="absolute -bottom-4 -left-4 bg-primary p-2 rounded-full shadow-lg"
							>
								<Check className="h-6 w-6 text-white" />
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		</T>
	);
}
