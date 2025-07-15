"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const services = [
    "Web Development",
    "App Development",
    "SEO Services",
    "Cloud Infrastructure",
    "Cybersecurity Solutions",
    "IT Consulting",
    "Custom Software Development",
    "Network Optimization",
    "HR Technologies",
    // "Aeronautics Solutions",
  ]

  const company = ["About Us", "Our Team", "Careers", "Portfolio", "Case Studies", "Blog", "News", "Contact"]

  const resources = [
    "Documentation",
    "Help Center",
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR",
    "Sitemap",
    "FAQ",
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-500">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                <Image
                  src="/mics-logo.png"
                  alt="MICS Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">TOPAGERANKERS</span>
                <span className="text-sm text-gray-400">a MICS Product</span>
              </div>
            </div>

            <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed transition-colors duration-300">
             TOPAGERANKERS is a product of MAGADH IT AND CONSULTANCY SERVICES PRIVATE LIMITED, established in February 2024, specializes in IT
              consulting, custom software development, cloud infrastructure, and cybersecurity solutions.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, text: "support@topagerankers.com" },
                { icon: Phone, text: "+91 9355273535" },
                { icon: MapPin, text: "India" },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <contact.icon className="w-5 h-5 text-blue-400 dark:text-blue-300" />
                  <span className="text-gray-400 dark:text-gray-500 transition-colors duration-300">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`/${resource.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    {resource}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Subscribe to Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-l-lg focus:outline-none focus:border-blue-400 dark:focus:border-blue-300 text-white transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 px-6 py-2 rounded-r-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {/* Subscribe */}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-6 mb-6 md:mb-0"
            >
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-500" },
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                { icon: Instagram, href: "#", color: "hover:text-pink-500" },
                { icon: Github, href: "#", color: "hover:text-gray-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`text-gray-400 dark:text-gray-500 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 dark:text-gray-500 text-center md:text-right transition-colors duration-300"
            >
              <p>&copy; 2024 MAGADH IT AND CONSULTANCY SERVICES PRIVATE LIMITED. All rights reserved.</p>
              {/* <p className="text-sm mt-1">Built with ❤️ using Next.js & Tailwind CSS</p> */}
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl dark:hover:shadow-glow-blue transition-all duration-300 z-50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 bg-blue-500/5 dark:bg-blue-400/10 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
