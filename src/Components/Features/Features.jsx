import React from "react";
import { BiSupport } from "react-icons/bi";
import { CiTrophy } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const featureData = [
  {
    icon: <TbTruckDelivery />,
    title: "Fast Delivery",
    desc: "Delivery in 24/H",
  },
  {
    icon: <CiTrophy />,
    title: "24 Hours Return",
    desc: "100% money-back guarantee",
  },
  {
    icon: <MdPayment />,
    title: "Secure Payment",
    desc: "Your money is safe",
  },
  {
    icon: <BiSupport />,
    title: "Support 24/7",
    desc: "Live contact / message",
  },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureData.map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-5 border border-gray-100 rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-orange-500 bg-white"
          >
            {/* Icon Box */}
            <div className="text-4xl text-gray-900 transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110">
              {item.icon}
            </div>
            
            {/* Text Content */}
            <div>
              <h5 className="font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500 uppercase text-sm tracking-wide">
                {item.title}
              </h5>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;