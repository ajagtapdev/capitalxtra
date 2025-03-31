"use client";

import { motion } from "framer-motion";
import { Var } from "gt-next";
import { useGT } from "gt-next/client";

export default function VideoDemoSection() {
  const t = useGT();

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background gradient similar to other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full filter blur-3xl z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              <Var>{t("Transform Your Credit Card Experience with")}</Var>{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                <Var>{t("capitalX")}</Var>
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              <Var>{t("Watch how our AI-powered app helps you digitize cards, track rewards, and make smarter financial decisions with real-time recommendations.")}</Var>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#2D3748] shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/w17OE9qXFHc"
              title={t("capitalX Demo Video")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 