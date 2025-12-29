import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
    orderNotes: "",
    cardName: "",
    cardNumber: "",
    expire: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling({ ...billing, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Info Submitted:", billing);
    navigate("/order-success");
  };

  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );
  const discount = 24; 
  const tax = subTotal * 0.1937; 
  const total = subTotal + tax - discount;

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
      <form
        className="flex-1 space-y-6 bg-white p-6 rounded-xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">
          Billing Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={billing.firstName}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={billing.lastName}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            placeholder="Company Name (Optional)"
            name="company"
            value={billing.company}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <input
          type="text"
          placeholder="Address"
          name="address"
          value={billing.address}
          onChange={handleChange}
          className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-orange-500"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={billing.country}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            placeholder="Region/State"
            name="state"
            value={billing.state}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={billing.city}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            placeholder="Zip Code"
            name="zip"
            value={billing.zip}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={billing.email}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={billing.phone}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Payment Option</h3>
          <div className="flex flex-wrap gap-4">
            {["cash", "venmo", "paypal", "amazon", "card"].map((method) => (
              <label
                key={method}
                className="flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer hover:border-orange-500 transition"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                  className="accent-orange-500"
                />
                {method === "cash"
                  ? "Cash on Delivery"
                  : method === "venmo"
                  ? "Venmo"
                  : method === "paypal"
                  ? "Paypal"
                  : method === "amazon"
                  ? "Amazon Pay"
                  : "Debit/Credit Card"}
              </label>
            ))}
          </div>

          {paymentMethod === "card" && (
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Name on Card"
                name="cardName"
                value={billing.cardName}
                onChange={handleChange}
                className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="text"
                placeholder="Card Number"
                name="cardNumber"
                value={billing.cardNumber}
                onChange={handleChange}
                className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-orange-500"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expire Date (MM/YY)"
                  name="expire"
                  value={billing.expire}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="text"
                  placeholder="CVC"
                  name="cvc"
                  value={billing.cvc}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Additional Information</h3>
          <textarea
            placeholder="Order Notes (Optional)"
            name="orderNotes"
            value={billing.orderNotes}
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          PLACE ORDER →
        </button>
      </form>

      <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-lg h-fit">
        <h3 className="font-bold text-xl border-b pb-2 mb-4">Order Summary</h3>
        <div className="space-y-2">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-600">
                {item.qty} × ${item.price}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-1">
          <div className="flex justify-between">
            <span>Sub-total</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mt-2 text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)} USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;