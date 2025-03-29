export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
      
      <div className="prose prose-lg prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>
          At capitalX, we take your privacy seriously. This Privacy Policy explains how we collect, 
          use, disclose, and safeguard your information when you use our mobile application.
        </p>
        
        <h2>2. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when you use our application, 
          including personal information such as your name, email address, and financial information 
          related to your credit cards. We also collect usage data and device information.
        </p>
        
        <h2>3. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, 
          to develop new features, and to protect capitalX and our users.
        </p>
        
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data 
          against unauthorized or unlawful processing, accidental loss, destruction, or damage.
        </p>
        
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at support@capitalx.app
        </p>
      </div>
    </div>
  );
} 