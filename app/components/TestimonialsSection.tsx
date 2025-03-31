"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { Var } from "gt-next";
import { useGT } from "gt-next/client";

export default function TestimonialsSection() {
	const t = useGT();

	const testimonials = [
		{
			name: "Aarush ",
			role: t("ML Engineer"),
			content: t("capitalX has transformed how I use my credit cards. I earned enough points for a free flight in just 3 months by using the right card for each purchase!"),
			rating: 5,
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
		},
		{
			name: "Alan ",
			role: t("Frontend Developer"),
			content: t("The AI recommendations are spot on. I've maximized my cashback on everyday purchases without having to think about which card to use. Highly recommend!"),
			rating: 5,
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
		},
		{
			name: "Lucas",
			role: t("Backend Developer"),
			content: t("As someone juggling business and personal expenses, capitalX has been a game-changer. The app helps me optimize rewards across all my cards effortlessly."),
			rating: 4,
			image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&auto=format&fit=crop",
		},
	];

	return (
		<section id="testimonials" className="py-24 relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl z-0"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
							<Var>{t("What Our")}</Var>{" "}
							<span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
								<Var>{t("Users Say")}</Var>
							</span>
						</h2>
						<p className="text-xl text-gray-300">
							<Var>{t("Join thousands of satisfied users who are maximizing their credit card rewards")}</Var>
						</p>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="bg-card border border-[#2D3748] rounded-xl overflow-hidden shadow-lg"
						>
							<div className="p-6">
								<div className="flex mb-4">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
											fill={i < testimonial.rating ? "currentColor" : "none"}
										/>
									))}
								</div>

								<div className="relative mb-6">
									<Quote className="absolute top-0 left-0 h-8 w-8 text-primary/20 rotate-180" />
									<p className="text-gray-300 pl-10">
										<Var>{testimonial.content}</Var>
									</p>
								</div>

								<div className="flex items-center">
									<div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
										<Image
											src={testimonial.image}
											alt={testimonial.name}
											fill
											sizes="(max-width: 768px) 100vw, 48px"
											className="object-cover"
											unoptimized
										/>
									</div>
									<div>
										<h4 className="text-white font-semibold">
											<Var>{testimonial.name}</Var>
										</h4>
										<p className="text-gray-400 text-sm">
											<Var>{testimonial.role}</Var>
										</p>
									</div>
								</div>
							</div>
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
						<div className="flex flex-col md:flex-row items-center justify-between">
							<div className="mb-6 md:mb-0 md:mr-8">
								<h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
									<Var>{t("Ready to maximize your rewards?")}</Var>
								</h3>
								<p className="text-gray-300">
									<Var>{t("Join over 50,000 users who are saving more with capitalX")}</Var>
								</p>
							</div>
							<a
								href="https://devpost.com/software/capitalx"
								className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-colors font-medium text-lg whitespace-nowrap"
							>
								<Var>{t("Get Started")}</Var>
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
