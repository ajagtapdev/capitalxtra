'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden bg-[#060A13]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-primary/10 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-accent/10 to-transparent opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Download <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">capitalX</span> Today
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Start maximizing your credit card rewards with our intelligent AI-powered app. Available on iOS and Android.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#" className="flex items-center justify-center bg-black hover:bg-[#333] border border-[#333] rounded-xl px-6 py-3 transition-colors">
                <div className="mr-3">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M17.0432 12.0397C17.037 9.35426 19.2363 8.09715 19.3316 8.03894C18.0221 6.18602 16.0293 5.95479 15.3489 5.93535C13.6335 5.76261 11.9845 6.90456 11.1179 6.90456C10.2319 6.90456 8.8758 5.95286 7.42969 5.9819C5.58809 6.01094 3.86257 7.13233 2.91234 8.82422C0.93827 12.2729 2.40013 17.2984 4.27579 19.9452C5.23241 21.2356 6.35574 22.6919 7.83311 22.6337C9.26966 22.57 9.8323 21.7143 11.5604 21.7143C13.2693 21.7143 13.8 22.6337 15.3103 22.5993C16.8613 22.57 17.8214 21.2938 18.7393 19.9935C19.8626 18.503 20.319 17.0494 20.3328 16.9866C20.3053 16.9769 17.0507 15.7779 17.0432 12.0397Z" />
                    <path d="M14.2695 3.68C15.0468 2.75922 15.5719 1.48837 15.412 0.212891C14.3301 0.260817 12.9969 0.943621 12.1881 1.84492C11.4667 2.64319 10.8355 3.95558 11.0231 5.18815C12.2318 5.28301 13.4624 4.58028 14.2695 3.68Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold text-white">App Store</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center justify-center bg-black hover:bg-[#333] border border-[#333] rounded-xl px-6 py-3 transition-colors">
                <div className="mr-3">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M3.16695 21.0415C2.92313 21.0415 2.70111 20.9475 2.50089 20.7596C2.30066 20.5716 2.20055 20.3474 2.20055 20.0868V3.91035C2.20055 3.64968 2.30066 3.42549 2.50089 3.23776C2.70111 3.05003 2.92313 2.95617 3.16695 2.95617H20.8363C21.0801 2.95617 21.3021 3.05003 21.5024 3.23776C21.7026 3.42549 21.8027 3.64968 21.8027 3.91035V20.0868C21.8027 20.3474 21.7026 20.5716 21.5024 20.7596C21.3021 20.9475 21.0801 21.0415 20.8363 21.0415H3.16695ZM12.0016 17.1749C12.1617 17.1749 12.3019 17.1223 12.4219 17.0172C12.5419 16.9121 12.6019 16.7783 12.6019 16.6158V13.2231L16.1284 16.7391C16.2285 16.8329 16.3486 16.8916 16.4887 16.915C16.6288 16.9384 16.7688 16.9149 16.909 16.8446C17.0491 16.7743 17.1492 16.6704 17.2093 16.5329C17.2693 16.3954 17.2793 16.2513 17.2393 16.1007C17.1992 15.9499 17.1091 15.8254 16.969 15.7273L13.4425 12.2112L16.969 8.69507C17.1091 8.58644 17.1942 8.45657 17.2243 8.30548C17.2543 8.15439 17.2393 8.01033 17.1792 7.87333C17.1192 7.73632 17.0191 7.63213 16.879 7.56076C16.7388 7.48939 16.5937 7.46611 16.4436 7.49091C16.2935 7.51571 16.1734 7.58146 16.0733 7.68815L12.6019 11.2042V7.38044C12.6019 7.21792 12.5419 7.08425 12.4219 6.97946C12.3019 6.87466 12.1617 6.82226 12.0016 6.82226C11.8415 6.82226 11.7014 6.87466 11.5813 6.97946C11.4613 7.08425 11.4013 7.21792 11.4013 7.38044V16.6158C11.4013 16.7783 11.4613 16.9121 11.5813 17.0172C11.7014 17.1223 11.8415 17.1749 12.0016 17.1749ZM7.80102 17.1749C7.96113 17.1749 8.10124 17.1223 8.22131 17.0172C8.34138 16.9121 8.40142 16.7783 8.40142 16.6158V13.6043H10.7521C10.9122 13.6043 11.0523 13.5519 11.1724 13.4471C11.2924 13.3423 11.3525 13.2087 11.3525 13.0462C11.3525 12.8836 11.2924 12.75 11.1724 12.6452C11.0523 12.5404 10.9122 12.488 10.7521 12.488H8.40142V7.92149H10.7521C10.9122 7.92149 11.0523 7.86913 11.1724 7.76438C11.2924 7.65963 11.3525 7.52599 11.3525 7.36347C11.3525 7.20095 11.2924 7.0673 11.1724 6.96251C11.0523 6.85771 10.9122 6.80531 10.7521 6.80531H7.80102C7.6409 6.80531 7.50079 6.85771 7.38071 6.96251C7.26063 7.0673 7.2006 7.20095 7.2006 7.36347V16.6158C7.2006 16.7783 7.26063 16.9121 7.38071 17.0172C7.50079 17.1223 7.6409 17.1749 7.80102 17.1749Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">GET IT ON</div>
                  <div className="text-lg font-semibold text-white">Google Play</div>
                </div>
              </a>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <div>
                <span className="font-bold">4.9</span>/5 on App Store
              </div>
              <div>•</div>
              <div>100k+ Downloads</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 p-4">
              <div className="bg-gradient-to-br from-[#1A1F2E] to-[#0F1523] rounded-3xl overflow-hidden border border-[#2D3748] shadow-2xl relative">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/20 to-transparent"></div>
                <div className="px-6 py-8 relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="h-8 w-8 text-accent" />
                      <span className="text-white font-bold text-lg">Mobile App</span>
                    </div>
                    <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="relative mx-auto w-64 h-[500px] bg-black rounded-3xl overflow-hidden border-8 border-[#1A2234] shadow-lg">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-lg flex justify-center items-center">
                      <div className="w-20 h-2 bg-[#333] rounded-full"></div>
                    </div>
                    <div className="w-full h-full bg-[#0A0E17] pt-6">
                      <div className="px-4 py-2">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">cX</span>
                          </div>
                          <div className="ml-2">
                            <h3 className="text-white text-sm font-semibold">capitalX</h3>
                            <p className="text-gray-400 text-xs">AI Credit Card Manager</p>
                          </div>
                        </div>
                        
                        <div className="bg-card rounded-lg p-3 mb-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white text-sm font-medium">Today&apos;s Picks</span>
                            <span className="text-accent text-xs">View All</span>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-[#1A2234] rounded-md p-2 flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center mr-2">
                                  <span className="text-white text-xs">A</span>
                                </div>
                                <div>
                                  <p className="text-white text-xs">Amazon</p>
                                  <p className="text-gray-400 text-[10px]">Chase Freedom</p>
                                </div>
                              </div>
                              <span className="text-accent text-xs">5%</span>
                            </div>
                            <div className="bg-[#1A2234] rounded-md p-2 flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center mr-2">
                                  <span className="text-white text-xs">G</span>
                                </div>
                                <div>
                                  <p className="text-white text-xs">Groceries</p>
                                  <p className="text-gray-400 text-[10px]">Amex Blue Cash</p>
                                </div>
                              </div>
                              <span className="text-accent text-xs">6%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-card rounded-lg p-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white text-sm font-medium">Recent Activity</span>
                            <span className="text-accent text-xs">See All</span>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-[#1A2234] rounded-md p-2 flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center mr-2">
                                  <span className="text-white text-xs">S</span>
                                </div>
                                <div>
                                  <p className="text-white text-xs">Starbucks</p>
                                  <p className="text-gray-400 text-[10px]">Apr 15, 2023</p>
                                </div>
                              </div>
                              <div>
                                <p className="text-white text-xs text-right">$4.95</p>
                                <p className="text-accent text-[10px]">+20 pts</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 