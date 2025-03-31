"use client";

import { motion } from "framer-motion";
import { Var } from "gt-next";
import { useGT } from "gt-next/client";
import { Cpu, Shield, CreditCard, LineChart, Smartphone, Zap } from "lucide-react";

export default function HowItWorksSection() {
	const t = useGT();

	const technologies = [
		{
			title: t("AI & Machine Learning"),
			description: t("Fine-tuned Gemma-27B model on Modal Labs for intelligent card selection and Google Cloud Vision for card recognition"),
			icon: <Cpu className="h-8 w-8 text-primary" />,
		},
		{
			title: t("Secure Infrastructure"),
			description: t("Supabase authentication and storage combined with Knot TransactionLink for secure card management"),
			icon: <Shield className="h-8 w-8 text-primary" />,
		},
		{
			title: t("Mobile First"),
			description: t("Built with React Native & Expo for a seamless cross-platform experience"),
			icon: <Smartphone className="h-8 w-8 text-primary" />,
		},
		{
			title: t("Smart Analytics"),
			description: t("Real-time transaction analysis and reward optimization powered by Knot API"),
			icon: <LineChart className="h-8 w-8 text-primary" />,
		},
		{
			title: t("Card Management"),
			description: t("Instant card digitization and benefit tracking with Google Cloud Vision"),
			icon: <CreditCard className="h-8 w-8 text-primary" />,
		},
		{
			title: t("Real-time Processing"),
			description: t("Flask backend with Gemini 1.5 for instant recommendations and Perplexity API for smart product search"),
			icon: <Zap className="h-8 w-8 text-primary" />,
		},
	];

	return (
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
							<Var>{t("Powered by")}</Var>{" "}
							<span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
								<Var>{t("Advanced Technology")}</Var>
							</span>
						</h2>
						<p className="text-xl text-gray-300">
							<Var>{t("Our cutting-edge tech stack delivers intelligent card management and real-time optimization")}</Var>
						</p>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{technologies.map((tech, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-[#1A1F2E] rounded-xl p-8 border border-[#2D3748]"
						>
							<div className="bg-[#2D3748]/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
								{tech.icon}
							</div>
							<h3 className="text-xl font-semibold mb-4 text-white">
								<Var>{tech.title}</Var>
							</h3>
							<p className="text-gray-300">
								<Var>{tech.description}</Var>
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="mt-16 text-center"
				>
					<div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 max-w-4xl mx-auto border border-[#2D3748]">
						<h3 className="text-2xl font-bold mb-4 text-white">
							<Var>{t("Not Just Another Card Manager")}</Var>
						</h3>
						<p className="text-gray-300 mb-6">
							<Var>{t("capitalX combines advanced AI, secure infrastructure, and real-time processing to deliver a next-generation financial management experience.")}</Var>
						</p>
						<a
							href="https://devpost.com/software/capitalx"
							className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
						>
							<Var>{t("Learn More")}</Var>
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
