'use client';

import { motion } from 'framer-motion';
import { ChevronRight, CreditCard, Check, Smartphone } from 'lucide-react';

export default function HeroSection() {
  return (
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
                Smart Card Selection with <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">AI Technology</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                capitalX automatically selects the best credit card for every purchase, maximizing your rewards and benefits in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#download" className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                
                <a href="#how-it-works" className="inline-flex items-center justify-center bg-[#1E293B] hover:bg-[#2D3748] text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                  How It Works
                </a>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span className="text-gray-300">Free Download</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span className="text-gray-300">AI Powered</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-accent mr-2 h-5 w-5" />
                  <span className="text-gray-300">Secure</span>
                </div>
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
              <div className="bg-card rounded-3xl overflow-hidden border border-[#2D3748] shadow-2xl rotate-2 transform hover:rotate-0 transition-transform duration-300">
                <div className="px-6 py-8">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                      <CreditCard className="h-8 w-8 text-accent mr-2" />
                      <span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                        capitalX
                      </span>
                    </div>
                    <Smartphone className="h-6 w-6 text-gray-400" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-[#1A2234] rounded-xl">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">A</span>
                          </div>
                          <div className="ml-3">
                            <p className="text-white font-medium">Amazon Purchase</p>
                            <p className="text-gray-400 text-sm">Apr 15, 2023</p>
                          </div>
                        </div>
                        <span className="text-white font-semibold">$129.99</span>
                      </div>
                      <div className="bg-[#0F172A] p-3 rounded-lg">
                        <p className="text-accent font-medium">Recommended Card: Chase Freedom</p>
                        <p className="text-gray-400 text-sm">5% cashback on Amazon purchases</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-[#1A2234] rounded-xl">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">S</span>
                          </div>
                          <div className="ml-3">
                            <p className="text-white font-medium">Starbucks Coffee</p>
                            <p className="text-gray-400 text-sm">Apr 14, 2023</p>
                          </div>
                        </div>
                        <span className="text-white font-semibold">$5.45</span>
                      </div>
                      <div className="bg-[#0F172A] p-3 rounded-lg">
                        <p className="text-accent font-medium">Recommended Card: Amex Gold</p>
                        <p className="text-gray-400 text-sm">4x points on dining</p>
                      </div>
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
              className="absolute top-0 right-0 bg-accent p-2 rounded-full shadow-lg"
            >
              <CreditCard className="h-6 w-6 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute bottom-0 left-0 bg-primary p-2 rounded-full shadow-lg"
            >
              <Check className="h-6 w-6 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 