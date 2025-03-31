"use client";

import { motion } from "framer-motion";
import { Var, T } from "gt-next";
import { Check } from "lucide-react";

export default function DownloadSection() {
	return (
		<section id="download" className="py-24 relative">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center justify-between">
					<div className="w-full lg:w-1/2 mb-12 lg:mb-0">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
							Ready to Optimize Your{" "}
							<span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
								Card Benefits?
							</span>
						</h2>

						<p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
							Join thousands of users who are maximizing their rewards with our intelligent 
							card management platform. Seamlessly track APR, credit limits, and unlock 
							the full potential of your credit cards.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="https://devpost.com/software/capitalx"
								className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
							>
								Get Started Now
							</a>
						</div>
					</div>

					{/* Right side with benefits list */}
					<div className="w-full lg:w-1/2 lg:pl-12">
						<div className="bg-[#1A1F2E] rounded-xl p-8 border border-[#2D3748]">
							<h3 className="text-2xl font-bold mb-6 text-white">What You'll Get</h3>
							<ul className="space-y-4">
								<li className="flex items-center text-gray-300">
									<Check className="text-accent mr-3 h-5 w-5" />
									Intelligent card recommendations for every purchase
								</li>
								<li className="flex items-center text-gray-300">
									<Check className="text-accent mr-3 h-5 w-5" />
									Real-time reward tracking and optimization
								</li>
								<li className="flex items-center text-gray-300">
									<Check className="text-accent mr-3 h-5 w-5" />
									Secure card digitization and storage
								</li>
								<li className="flex items-center text-gray-300">
									<Check className="text-accent mr-3 h-5 w-5" />
									Unified dashboard for all your cards
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
