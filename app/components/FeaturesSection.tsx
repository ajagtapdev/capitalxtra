"use client";

import { motion } from "framer-motion";
import {
	CreditCard,
	PieChart,
	Shield,
	Zap,
	Sparkles,
	BellRing,
} from "lucide-react";
import { Var, T } from "gt-next";
import { useGT } from "gt-next/client";

export default function FeaturesSection() {
	const t = useGT();

	const features = [
		{
			icon: <CreditCard className="h-8 w-8 text-accent" />,
			title: t("Smart Card Selection"),
			description: t(
				"Our AI analyzes your credit cards and automatically selects the best one for each purchase to maximize your rewards."
			),
		},
		{
			icon: <PieChart className="h-8 w-8 text-accent" />,
			title: t("Rewards Tracking"),
			description: t(
				"Track all your rewards, cashback, and points in one place with detailed analytics and insights."
			),
		},
		{
			icon: <Shield className="h-8 w-8 text-accent" />,
			title: t("Bank-Level Security"),
			description: t(
				"Your financial data is protected with end-to-end encryption and advanced security measures."
			),
		},
		{
			icon: <Zap className="h-8 w-8 text-accent" />,
			title: t("Real-Time Decisions"),
			description: t(
				"Get instant recommendations at checkout for which card to use based on current promotions and rewards."
			),
		},
		{
			icon: <Sparkles className="h-8 w-8 text-accent" />,
			title: t("AI-Powered Insights"),
			description: t(
				"Receive personalized spending insights and recommendations to improve your financial health."
			),
		},
		{
			icon: <BellRing className="h-8 w-8 text-accent" />,
			title: t("Smart Notifications"),
			description: t(
				"Get alerts about new card benefits, expiring points, and special reward opportunities."
			),
		},
	];

	return (
		<T id="components.featuressection.0">
			<section id="features" className="py-24 relative">
				{/* Background gradient */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl z-0"></div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
								Powerful Features to{" "}
								<span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
									Optimize Your Credit
								</span>
							</h2>
							<p className="text-xl text-gray-300">
								capitalX combines cutting-edge AI with user-friendly design to
								transform how you use credit cards.
							</p>
						</motion.div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Var>
							{features.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ y: -5 }}
									className="bg-card border border-[#2D3748] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
								>
									<div className="bg-[#1A2234] rounded-full w-16 h-16 flex items-center justify-center mb-6">
										{feature.icon}
									</div>
									<h3 className="text-xl font-semibold mb-3 text-white">
										{feature.title}
									</h3>
									<p className="text-gray-300">{feature.description}</p>
								</motion.div>
							))}
						</Var>
					</div>
				</div>
			</section>
		</T>
	);
}
