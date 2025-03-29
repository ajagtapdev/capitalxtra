import Link from 'next/link';
import { CreditCard, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060A13] pt-16 pb-8 border-t border-[#1E293B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <CreditCard className="h-8 w-8 text-accent"/>
              <span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                capitalX
              </span>
            </div>
            <p className="text-gray-300 mb-2 max-w-md">
              Smart credit card management powered by AI. Get the most out of your cards without the hassle.
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} capitalX. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a 
              href="https://github.com/ajagtapdev/capitalxtra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-accent text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 