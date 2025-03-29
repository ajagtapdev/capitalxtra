export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Terms of Service</h1>
      
      <div className="prose prose-lg prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the capitalX application, you agree to be bound by these Terms of Service 
          and all applicable laws and regulations. If you do not agree with any of these terms, you are 
          prohibited from using the application.
        </p>
        
        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily use the capitalX application for personal, non-commercial 
          purposes. This license does not include modifying or copying the application, using the application 
          for any commercial purpose, or attempting to decompile or reverse engineer the application.
        </p>
        
        <h2>3. Limitations</h2>
        <p>
          In no event shall capitalX be liable for any damages arising out of the use or inability to use 
          the application, even if capitalX has been notified of the possibility of such damages.
        </p>
        
        <h2>4. Governing Law</h2>
        <p>
          These terms shall be governed and construed in accordance with the laws, without regard to its 
          conflict of law provisions.
        </p>
        
        <h2>5. Changes to Terms</h2>
        <p>
          capitalX reserves the right to modify these terms at any time. We will notify users of any changes 
          by updating the date at the top of this page.
        </p>
      </div>
    </div>
  );
} 