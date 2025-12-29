import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Search, Heart, User, ShoppingCart, ChevronDown, Truck,
  RefreshCcw, Headphones, HelpCircle, Trash2, X, Menu
} from "lucide-react";
import {
  RiFacebookFill, RiTwitterXFill, RiInstagramLine, RiYoutubeFill, RiPhoneLine
} from "react-icons/ri";
import logo from "../../assets/logo.png";
import { useCart, useWishlist } from "../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const categories = [
  "Computer & Laptop", "Computer Accessories", "SmartPhone", "Headphone",
  "Mobile Accessories", "Gaming Console", "Camera & Photo", "TV & Home Appliances",
  "Watches & Accessories", "GPS & Navigation", "Wearable Technology"
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { cart, addToCart, removeFromCart, removeItem } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cart.reduce((a, b) => a + (b.qty || 1), 0);
  const cartTotal = cart.reduce((a, b) => a + b.price * (b.qty || 1), 0);

  // Close other dropdowns when one is opened
  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setAuthOpen(false);
    setMobileMenuOpen(false);
  };

  const toggleAuth = () => {
    setAuthOpen(!authOpen);
    setCartOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Welcome back!");
    setAuthOpen(false);
  };

  return (
    <header className="w-full shadow-sm sticky top-0 z-[100]">
      {/* Top Banner */}
      <div className="bg-[#1B1B1B] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[13px]">
          <div className="flex items-center gap-2">
            <span className="bg-[#F3DE6D] text-black px-2 py-0.5 font-bold rounded-sm">BLACK FRIDAY</span>
            <span className="hidden sm:inline">Up to <span className="text-[#F3DE6D] font-bold">59%</span> OFF</span>
          </div>
          <button className="bg-[#F3DE6D] text-black px-4 py-1 font-bold rounded-sm hover:bg-yellow-500 transition">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#0B4A78] text-white py-5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-fit">
            <img src={logo} alt="Clicon" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold tracking-tight hidden sm:block">CLICON</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full py-2.5 px-5 rounded-sm bg-white text-black outline-none"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-transparent border-none">
              <Search size={20} className="text-gray-800" />
            </button>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-5">
            {/* Wishlist */}
            <Link to="/wishlist" className="relative group">
              <Heart size={24} className="group-hover:text-yellow-400 transition" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <div className="relative">
              <button onClick={toggleCart} className="relative group pt-1">
                <ShoppingCart size={24} className="group-hover:text-yellow-400 transition" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#FA8232] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {cartOpen && (
                <div className="absolute right-0 mt-4 w-80 bg-white text-black shadow-2xl rounded-md border border-gray-100 overflow-hidden">
                  <div className="p-4 border-b">
                    <h3 className="font-bold">Shopping Cart ({cartCount})</h3>
                  </div>
                  <div className="max-h-80 overflow-y-auto p-4 space-y-4">
                    {cart.length === 0 ? (
                      <div className="text-center py-6 text-gray-400 italic">Your cart is empty</div>
                    ) : (
                      cart.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <img src={item.image} alt="" className="w-14 h-14 object-cover rounded bg-gray-50" />
                          <div className="flex-1">
                            <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                            <p className="text-xs text-gray-500 mt-1">{item.qty} x <span className="text-[#2DA5F3] font-bold">${item.price}</span></p>
                          </div>
                          <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-500">
                            <X size={16} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                  {cart.length > 0 && (
                    <div className="p-4 bg-gray-50">
                      <div className="flex justify-between font-bold mb-4">
                        <span>Subtotal:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <Link to="/checkout" onClick={() => setCartOpen(false)}>
                        <button className="w-full bg-[#FA8232] text-white py-3 rounded font-bold uppercase tracking-wide hover:bg-[#e0752b] transition">Checkout Now</button>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Login/User */}
            <div className="relative">
              <button onClick={toggleAuth} className="hover:text-yellow-400 transition">
                <User size={24} />
              </button>
              {authOpen && (
                <div className="absolute right-0 mt-4 w-80 bg-white text-black shadow-2xl rounded-md border p-6">
                  <h2 className="text-xl font-bold mb-5">Sign in</h2>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold block mb-1">Email Address</label>
                      <input type="email" required className="w-full border p-2 rounded focus:ring-1 focus:ring-[#FA8232] outline-none" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <label className="text-xs font-semibold">Password</label>
                        <Link to="/forgot" className="text-xs text-blue-600">Forgot?</Link>
                      </div>
                      <input type="password" required className="w-full border p-2 rounded focus:ring-1 focus:ring-[#FA8232] outline-none" />
                    </div>
                    <button className="w-full bg-[#FA8232] text-white py-2.5 rounded font-bold flex items-center justify-center gap-2">
                      SIGN IN <ChevronDown className="-rotate-90" size={16} />
                    </button>
                  </form>
                  <p className="text-center text-sm mt-4 text-gray-500">Don't have an account? <Link to="/register" className="text-[#FA8232] font-bold">REGISTER</Link></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-white border-b py-3 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 text-[14px] font-medium">
            {/* Category Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition text-gray-800">
                All Category <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl border rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {categories.map(cat => (
                  <Link key={cat} to={`/category/${cat.toLowerCase().replace(/ /g, "-")}`} className="block px-4 py-2.5 hover:bg-orange-50 text-gray-700 hover:text-[#FA8232] border-b border-gray-50">
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/trackorder" className={({isActive}) => `flex items-center gap-1.5 ${isActive ? 'text-[#FA8232]' : 'text-gray-600 hover:text-black'}`}>
              <Truck size={18} /> Track Order
            </NavLink>
            <NavLink to="/compare" className={({isActive}) => `flex items-center gap-1.5 ${isActive ? 'text-[#FA8232]' : 'text-gray-600 hover:text-black'}`}>
              <RefreshCcw size={18} /> Compare
            </NavLink>
            <NavLink to="/support" className="flex items-center gap-1.5 text-gray-600 hover:text-black">
              <Headphones size={18} /> Customer Support
            </NavLink>
          </div>
          
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <RiPhoneLine size={20} className="text-[#FA8232]" />
            <span>+1 202-555-0104</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button Only */}
      <div className="md:hidden bg-white border-b p-4 flex justify-between items-center">
         <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 border rounded">
            {mobileMenuOpen ? <X /> : <Menu />}
         </button>
         <span className="font-bold">+1 202-555-0104</span>
      </div>

      <ToastContainer position="bottom-center" autoClose={2000} />
    </header>
  );
};

export default Navbar;