"use client";

import { motion } from "framer-motion";
import { PlusCircle, CreditCard, Smartphone, Sparkles } from "lucide-react";
import { Var, T } from "gt-next";
import { useGT } from "gt-next/client";

export default function HowItWorksSection() {
	const t = useGT()
	const steps = [
		{
			icon: <PlusCircle className="h-8 w-8 text-accent" />,
			title: t("Connect Your Cards"),
			description: t(
				"Securely link your credit cards to capitalX with bank-level encryption."
			),
			delay: 0.1,
		},
		{
			icon: <CreditCard className="h-8 w-8 text-accent" />,
			title: t("Set Your Preferences"),
			description:
				t("Tell us which rewards matter most to you - cashback, points, miles, or specific benefits."),
			delay: 0.2,
		},
		{
			icon: <Smartphone className="h-8 w-8 text-accent" />,
			title: t("Shop Through Our App"),
			description: t(
				"Make purchases through the capitalX app at thousands of supported merchants."
			),
			delay: 0.3,
		},
		{
			icon: <Sparkles className="h-8 w-8 text-accent" />,
			title: t("Get Smart Recommendations"),
			description: t(
				"Our AI automatically selects the best card for each purchase to maximize your rewards."
			),
			delay: 0.4,
		},
	];

	return (
		<T id="components.howitworkssection.0">
			<section id="how-it-works" className="py-24 bg-[#060A13] relative">
				{/* Connected dots background */}
				<div className="absolute inset-0 z-0 opacity-20">
					<div
						className="absolute top-0 left-0 right-0 bottom-0"
						style={{
							backgroundImage:
								"radial-gradient(#2563EB 1px, transparent 1px), radial-gradient(#2563EB 1px, transparent 1px)",
							backgroundSize: "30px 30px",
							backgroundPosition: "0 0, 15px 15px",
						}}
					></div>
				</div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
								How{" "}
								<span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
									capitalX
								</span>{" "}
								Works
							</h2>
							<p className="text-xl text-gray-300">
								Our simple process helps you maximize rewards with every
								purchase
							</p>
						</motion.div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Var>
							{steps.map((step, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: step.delay }}
									className="relative"
								>
									<div className="bg-card border border-[#2D3748] rounded-xl p-6 shadow-lg h-full">
										<div className="bg-[#1A2234] rounded-full w-16 h-16 flex items-center justify-center mb-6">
											{step.icon}
										</div>
										<div className="absolute -top-3 -right-3 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
											{index + 1}
										</div>
										<h3 className="text-xl font-semibold mb-3 text-white">
											{step.title}
										</h3>
										<p className="text-gray-300">{step.description}</p>
									</div>

									{index < steps.length - 1 && (
										<div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-full z-10">
											<svg
												width="40"
												height="12"
												viewBox="0 0 40 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M0 6H38M38 6L33 1M38 6L33 11"
													stroke="#2563EB"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
									)}
								</motion.div>
							))}
						</Var>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.5 }}
						className="mt-20 bg-gradient-to-br from-[#1A1F2E] to-[#0F1523] rounded-2xl overflow-hidden border border-[#2D3748] shadow-xl"
					>
						<div className="p-8 md:p-12">
							<div className="flex flex-col md:flex-row items-center gap-8">
								<div className="w-full md:w-1/2">
									<h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
										Smart Algorithm, Better Rewards
									</h3>
									<p className="text-gray-300 mb-6">
										Our proprietary AI algorithm learns your spending patterns
										and card benefits to continuously improve recommendations,
										ensuring you never miss out on valuable rewards.
									</p>
									<div className="flex flex-col sm:flex-row gap-4">
										<div className="bg-[#1A2234] rounded-lg p-4 flex gap-3 items-center">
											<div className="text-accent text-2xl font-bold">45%</div>
											<div className="text-sm text-gray-300">
												Average increase in rewards earned
											</div>
										</div>
										<div className="bg-[#1A2234] rounded-lg p-4 flex gap-3 items-center">
											<div className="text-accent text-2xl font-bold">$340</div>
											<div className="text-sm text-gray-300">
												Average annual savings per user
											</div>
										</div>
									</div>
								</div>
								<div className="w-full md:w-1/2 flex justify-center">
									<div className="bg-[#0A0E17] rounded-xl overflow-hidden border border-[#2D3748] p-4 w-full max-w-sm">
										<div className="flex justify-between items-center mb-6">
											<div className="flex items-center">
												<CreditCard className="h-6 w-6 text-accent mr-2" />
												<span className="text-lg font-bold text-white">
													Card Selection
												</span>
											</div>
											<Sparkles className="h-5 w-5 text-primary" />
										</div>

										<Var>
											{[
												{
													name: "Dining",
													card: "Amex Gold",
													reward: "4x points",
													percent: "85%",
												},
												{
													name: "Travel",
													card: "Chase Sapphire",
													reward: "3x points",
													percent: "70%",
												},
												{
													name: "Groceries",
													card: "Blue Cash",
													reward: "6% cash back",
													percent: "90%",
												},
											].map((category, i) => (
												<div key={i} className="mb-4 last:mb-0">
													<div className="flex justify-between items-center mb-1.5">
														<span className="text-gray-300">
															{category.name}
														</span>
														<span className="text-accent text-sm">
															{category.reward}
														</span>
													</div>
													<div className="bg-[#1A2234] h-2 rounded-full">
														<div
															className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
															style={{ width: category.percent }}
														></div>
													</div>
													<div className="flex justify-between mt-1">
														<span className="text-white text-xs">
															{category.card}
														</span>
														<span className="text-gray-400 text-xs">
															{category.percent}
														</span>
													</div>
												</div>
											))}
										</Var>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</T>
	);
}
