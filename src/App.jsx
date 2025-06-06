import React, { useState } from "react";
import 'animate.css';
import { Menu, X } from 'react-feather'; // Make sure to install react-feather
import logo from '../src/assets/logo.png'; // Update with your logo path
import { FaShieldAlt, FaClock, FaHandsHelping, FaCertificate, FaCrosshairs, FaGem, FaIndustry, FaCogs, FaFlask, FaStream, FaBoxOpen } from "react-icons/fa";
import { FaEye, FaBullseye, FaHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Mail, Phone, User } from "lucide-react"; // You can install lucide-react or use any icons


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const steps = [
  { id: "01", title: "Manufacturing Unit", icon: <FaIndustry /> },
  { id: "02", title: "Machinery", icon: <FaCogs /> },
  { id: "03", title: "R&D Facilities", icon: <FaFlask /> },
  { id: "04", title: "Wire", icon: <FaStream /> },
  { id: "05", title: "Packing", icon: <FaBoxOpen /> },
];

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };
  return (
    <div className="relative">

     <nav className="w-full bg-white shadow-md fixed top-0 z-50 px-[5vw]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-[100px]">
        {/* Logo */}
        <div className="w-[160px] h-[100px] flex items-center">
          <a href="#">
            <img
              src={logo}
              alt="Logo"
              className="w-[160px] h-[100px] object-cover"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex  gap-6  font-semibold capitalize text-gray-700">
          <a href="#home" className="hover:text-orange-500 transition">home</a>
          <a href="#aboutus" className="hover:text-orange-500 transition">about us</a>
          <a href="#process" className="hover:text-orange-500 transition">process</a>
          <a href="#material us" className="hover:text-orange-500 transition">material us</a>
          <a href="#sector" className="hover:text-orange-500 transition">sector</a>
          <a href="#contact us" className="hover:text-orange-500 transition">contact us</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md space-y-2 capitalize text-gray-700 font-semibold">
          <a href="#home" className="block py-2 hover:text-orange-500">home</a>
          <a href="#aboutus" className="block py-2 hover:text-orange-500">about us</a>
          <a href="#process" className="block py-2 hover:text-orange-500">process</a>
          <a href="#material us" className="block py-2 hover:text-orange-500">material us</a>
          <a href="#sector" className="block py-2 hover:text-orange-500">sector</a>
          <a href="#contact us" className="block py-2 hover:text-orange-500">contact us</a>
        </div>
      )}
    </nav>

      <div id='home' className="section-1 pt-[100px]">
        {/* Hero Section with Copper Wire Background */}
        <div className="relative h-screen">
          {/* Copper Wire Background */}
          <div 
            className="absolute inset-0 bg-[url('https://5.imimg.com/data5/YF/EW/GO/ANDROID-605824/product-jpeg-250x250.jpg')] bg-cover bg-center bg-fixed"
          ></div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
             WELCOME TO <br /> JOTON WINDING WIRE
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
               Premium Copper Winding Solutions
              High-quality copper winding wires for transformers, motors, and electrical applications
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

       <div id='aboutus' className="section-2  bg-white py-8 md:py-16 px-[5vw] border flex flex-col">
        <div className="max-w-6xl mx-auto">
     <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 relative text-center">
  <span className="border-b-4 border-orange-500 pb-1">About Us</span>
</h2>

    <div className="flex flex-col md:flex-row w-full h-auto md:h-[350px] gap-4">
      {/* Text Section */}
      <div className="w-full md:w-1/2 h-auto p-4 md:p-6 animate__animated animate__fadeInLeft">
        <h1 className="text-xl md:text-3xl font-semibol mb-3 text-[rgb(249,115,22)] font-[700]">Copper Winding Solutions</h1>
        <p className="text-sm  text-gray-600 mb-4">
          We "Joton Winding Wire" Established as a Proprietor firm in the year 2024, we "Joton Winding Wire" are a leading Manufacturer and Wholesale Trader of a wide range of Submersible Winding Wire and Copper Wire.
          <br/><br/>
          Our professionals work in close coordination to assure a high-quality assortment of products to the customers. We have recruited a team of professionals. In addition to this, to avoid disputes in the workplace, our professionals strive dedicatedly. Owing to our fare policies and the best quality products.
          <br/><br/>
             </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium py-2 px-4 rounded transition duration-200">
          More Info
        </button>
      </div>

      {/* Image Section */}
    <div className="imagesetion w-full md:w-1/2 h-[450px] md:h-[350px] rounded-lg flex justify-center items-center animate__animated animate__fadeInRight">
  <div className="overflow-hidden rounded-lg w-full h-full">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyfu1PKh2JYWjjytvwATU85AxVdSHS3lVckd5WpjecCqoja1r" 
      alt="Copper Winding Solutions"
      className="w-full h-full object-contain p-4 transform transition-transform duration-500 ease-in-out hover:scale-105"
    />
  </div>
</div>

    </div>
        </div>
      </div>

        <section className="bg-gray-100 py-12 px-[5vw]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">WHY US?</h2>
    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">JOTON WINDING WIRE</h3>
    <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-10">
      Our company always believes in offering high-grade quality products to our valued clients across the market.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
      {/* Card 1 - STRENGTH */}
      <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
        <div className="text-orange-500 text-3xl mb-3"><FaShieldAlt /></div>
        <h4 className="text-lg font-semibold text-orange-500 mb-2">STRENGTH</h4>
        <p className="text-gray-600 text-sm">Highly experienced professionals with a wide product range.</p>
      </div>

      {/* Card 2 - ENDURING */}
      <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
        <div className="text-orange-500 text-3xl mb-3"><FaClock /></div>
        <h4 className="text-lg font-semibold text-orange-500 mb-2">ENDURING</h4>
        <p className="text-gray-600 text-sm">Competitive prices and commitment to prompt delivery.</p>
      </div>

      {/* Card 3 - FLEXIBLE */}
      <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
        <div className="text-orange-500 text-3xl mb-3"><FaHandsHelping /></div>
        <h4 className="text-lg font-semibold text-orange-500 mb-2">FLEXIBLE</h4>
        <p className="text-gray-600 text-sm">We adapt to our client’s needs, ensuring satisfaction and flexibility.</p>
      </div>

      {/* Card 4 - QUALITY */}
      <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition">
        <div className="text-orange-500 text-3xl mb-3"><FaCertificate /></div>
        <h4 className="text-lg font-semibold text-orange-500 mb-2">QUALITY</h4>
        <p className="text-gray-600 text-sm">We are an Individual Proprietor firm focused on superior quality and service.</p>
      </div>
    </div>
  </div>
        </section>

        <section className="bg-white py-16 px-[5vw]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 relative inline-block">
          <span className="border-b-4 border-orange-500 pb-1">OUR VISION, MISSION AND VALUES</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Vision */}
          <div className="bg-orange-500 text-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
            <FaBullseye className="text-4xl mb-4" />
            <p className="text-sm leading-relaxed">
              "To be a global leader in high-quality, durable, and efficient submersible pump winding wires,
              empowering industries and communities with reliable electrical solutions."
            </p>
          </div>

          {/* Mission */}
          <div className="bg-orange-500 text-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition">
            <FaCrosshairs className="text-4xl mb-4" />
            <p className="text-sm leading-relaxed">
              "To manufacture superior winding wires using advanced technology, ensuring durability and efficiency
              while maintaining environmental sustainability and customer satisfaction."
            </p>
          </div>

          {/* Values */}
          <div className="bg-orange-500 text-white rounded-lg p-6 flex flex-col items-center text-left shadow-md hover:shadow-lg transition">
            <FaGem   className="text-4xl mb-4" />
            <ul className="text-sm space-y-1">
              <li><strong>J</strong> – Journey of craftsmanship and quality</li>
              <li><strong>O</strong> – Optimized solutions for every need</li>
              <li><strong>T</strong> – Trust built through technical mastery</li>
              <li><strong>O</strong> – Outperforming expectations, always</li>
              <li><strong>N</strong> – Nurturing innovation for tomorrow</li>
            </ul>
          </div>
        </div>
      </div>
        </section>
        
        <section id='process' className="bg-gray-100 py-20 px-[5vw] sm:px-[5vw] lg:px-[5vw]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center">
          <span className="border-b-4 border-orange-500 pb-1">PROCESS</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full group border"
            >
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-full mb-4 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl text-orange-500 group-hover:text-orange-600 transition-colors duration-300">
                  {step.icon}
                </div>
              </div>

              <div className="bg-orange-500 text-white rounded-full w-9 h-9 flex items-center justify-center mb-3 text-sm font-semibold shadow-md">
                {step.id}
              </div>

              <h3 className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-orange-600 transition-colors duration-300">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
        </section>

        <section id='material us' className="py-16 bg-white">
         <div className="max-w-6xl mx-auto px-4 text-center">

     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center">
          <span className="border-b-4 border-orange-500 pb-1">Material Us</span>
        </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm">
      At Joton Winding Wire, we focus on using only high-quality materials that ensure long-lasting performance, high thermal resistance, and efficiency in every application.
    </p>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-12">
    
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
        <img
          src="https://freepngimg.com/save/51483-copper-wire-download-png-file-hd/500x500"
          alt="Copper"
          className="w-full h-48 object-contain rounded mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Copper</h3>
        <p className="text-gray-600 text-sm">
          We use high-conductivity copper to ensure maximum electrical efficiency and minimal resistance for long-lasting performance.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
        <img
          src="https://5.imimg.com/data5/AA/II/DW/SELLER-29186907/metalized-polyester-film-500x500.jpg"
          alt="Polyester Film"
          className="w-full h-48 object-contain rounded mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Polyester Film</h3>
        <p className="text-gray-600 text-sm">
          Our wires are insulated with premium-grade polyester film, offering high thermal resistance and superior insulation.
        </p>
      </div>
    </div>

    <div className="mt-4">
      <a
        href="/brochure.pdf"
        download
        className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 text-sm font-medium"
      > 
        <FaDownload className='text-[20px]' />
        Download Brochure
      </a>
    </div>
  </div>
        </section>

        <section id='sector' className="bg-gray-100 py-16">
  <div className="max-w-4xl mx-auto px-4 text-center">
   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center">
          <span className="border-b-4 border-orange-500 pb-1">Sector</span>
        </h2>

    {/* Description */}
    <p className="text-gray-700 max-w-xl mx-auto mb-8 text-sm">
      Joton Winding Wires are widely used in submersible pumps, electric motors, and transformer windings. Our products are trusted for their durability, insulation quality, and performance under tough conditions.
    </p>

    {/* Image */}
    <div className="flex justify-center">
      <img
        src="https://laxmipumpsgroup.com/wp-content/uploads/2023/09/Upgrade-to-our-top-water-pumps-for-abundant-comfort-in-your-surroundings-1080-%C3%97-1080px-2-e1694239742365.png"
        alt="Submersible Pump"
        className="w-72 h-auto rounded-lg shadow-md hover:scale-105 transition object-contain"
      />
    </div>
  </div>
        </section>

        <section id="contact us" className="py-16 bg-white px-[5vw]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center">
          <span className="border-b-4 border-orange-500 pb-1">Contact Us </span>
        </h2>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-xl shadow space-y-5">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <User className="text-gray-500 mr-2" size={20} />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <Mail className="text-gray-500 mr-2" size={20} />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <Phone className="text-gray-500 mr-2" size={20} />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded p-3 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Google Map */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.0467725236023!2d72.50757341488462!3d23.092967284922037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fd6dffcd6f%3A0xf5cde61e82c9c7a3!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1687445327407!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  </div>

  {/* Popup */}
  {showPopup && (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl text-center shadow-md max-w-sm w-full">
        <h3 className="text-xl font-bold text-orange-600 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-4">We’ll get back to you soon.</p>
        <button
          className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </div>
    </div>
  )}
        </section>
 

        <footer className="bg-gray-900 text-white py-10 px-[5vw]">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    
    {/* Logo & About */}
    <div>
      <h2 className="text-2xl font-bold text-orange-500">Joton Winding Wire</h2>
      <p className="text-gray-400 mt-3 text-sm">
        Leading manufacturer of high-quality copper winding wires, committed to durability, precision, and performance.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm text-gray-300 flex flex-col capitalize justify-center">
        <a href="#home"  className="hover:text-white">home</a>
          <a href="#aboutus"  className="hover:text-white">about us</a>
          <a href="#process"  className="hover:text-white">process</a>
          <a href="#material us"  className="hover:text-white">material us</a>
          <a href="#sector" className="hover:text-white">sector</a>
          <a href="#contact us"  className="hover:text-white">contact us</a>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
      <p className="text-sm text-gray-300">📍 Ahmedabad, Gujarat, India</p>
      <p className="text-sm text-gray-300 mt-2">📞 +91 74360 10203/ +91 98792 12027</p>
      <p className="text-sm text-gray-300 mt-2">✉️ jotonwire@gmail.com</p>
    </div>
  </div>
  {/* Bottom bar */}
  <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
    © {new Date().getFullYear()} Joton Winding Wire. All rights reserved.
  </div>
        </footer>
        
</div>
  );
}

export default App;