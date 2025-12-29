import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Icon from "../../assets/Icon.png";
import Apple from "../../assets/Apple.png";
import PlayStor from "../../assets/play.png";

const Footer = () => {
  // মোবাইলের জন্য একর্ডিয়ন স্টেট
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191C1F] text-gray-300 px-6 lg:px-12 py-12 tracking-wide">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* 1. Logo & Contact - Always Visible */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <img src={Icon} alt="logo" className="w-8 h-8" />
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">CLICON</h2>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Customer Support</p>
              <p className="text-xl font-bold text-white">01719213787</p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                Savar 1349, Dhaka, Bangladesh
              </p>
              <p className="text-sm text-orange-400 font-medium">info@kinbo.com</p>
            </div>
          </div>

          {/* 2. Top Category */}
          <FooterSection 
            title="TOP CATEGORY" 
            isOpen={openSection === 'cat'} 
            toggle={() => toggleSection('cat')}
          >
            <ul className="space-y-3 text-sm">
              {["Computer & Laptop", "SmartPhone", "Headphone", "Accessories", "Camera & Photo", "TV & Homes"].map(item => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
              <li className="text-orange-400 font-semibold cursor-pointer pt-2">Browse All Product →</li>
            </ul>
          </FooterSection>

          {/* 3. Quick Links */}
          <FooterSection 
            title="QUICK LINKS" 
            isOpen={openSection === 'links'} 
            toggle={() => toggleSection('links')}
          >
            <ul className="space-y-3 text-sm">
              {["Shop Product", "Shopping Cart", "Wishlist", "Compare", "Track Order", "Customer Help", "About Us"].map(item => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </FooterSection>

          {/* 4. Download App */}
          <div className="md:block">
             <h3 className="text-sm font-bold text-white mb-6 tracking-widest uppercase">Download App</h3>
             <div className="flex flex-col gap-3">
                <AppButton img={PlayStor} topText="Get it now" mainText="Google Play" />
                <AppButton img={Apple} topText="Get it now" mainText="App Store" />
             </div>
          </div>

          {/* 5. Popular Tags */}
          <div className="md:block lg:col-span-1">
            <h3 className="text-sm font-bold text-white mb-6 tracking-widest uppercase">Popular Tag</h3>
            <div className="flex flex-wrap gap-2">
              {["Game", "iPhone", "TV", "SSD", "Macbook", "Samsung", "Speaker", "Tablet"].map((tag, index) => (
                <span key={index} className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 text-[11px] rounded hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col items-center justify-center text-center text-xs text-gray-400">
  <p>© {currentYear} Kinbo eCommerce. All rights reserved.</p>
  <p className="mt-2">
    Developed by <span className="text-white font-medium">@iamtomij</span>
  </p>
</div>
      </div>
    </footer>
  );
};

// হেল্পার কম্পোনেন্ট: মোবাইল রেসপন্সিভ সেকশন
const FooterSection = ({ title, children, isOpen, toggle }) => (
  <div className="border-b border-gray-800 md:border-none pb-4 md:pb-0">
    <div 
      className="flex justify-between items-center cursor-pointer md:cursor-default" 
      onClick={toggle}
    >
      <h3 className="text-sm font-bold text-white mb-0 md:mb-6 tracking-widest uppercase">{title}</h3>
      <span className="md:hidden">
        {isOpen ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
      </span>
    </div>
    <div className={`${isOpen ? "block" : "hidden"} md:block mt-4 md:mt-0 transition-all`}>
      {children}
    </div>
  </div>
);

// হেল্পার কম্পোনেন্ট: অ্যাপ বাটন
const AppButton = ({ img, topText, mainText }) => (
  <div className="flex items-center gap-4 p-3 bg-gray-800/40 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700 transition group w-full max-w-[180px]">
    <img src={img} alt={mainText} className="w-6 h-6 object-contain" />
    <div>
      <p className="text-[10px] text-gray-400 uppercase">{topText}</p>
      <p className="text-sm font-bold text-white group-hover:text-orange-400">{mainText}</p>
    </div>
  </div>
);

export default Footer;