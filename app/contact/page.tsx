"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import Input from "@/components/ui/Input"
import Textarea from "@/components/ui/Textarea"
import Select from "@/components/ui/Select"
import Button from "@/components/ui/Button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We're here to help you with your next project. Reach out to us through any of the methods below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Contact Details</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with us directly for inquiries, support, or to start a new project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Phone Number",
                value: "+91-9355-27-3535",
                link: "tel:+919355273535",
                description: "Call us anytime for immediate assistance.",
              },
              {
                icon: Mail,
                title: "Email Address",
                value: "support@topagerankers.com",
                link: "mailto:support@topagerankers.com",
                description: "Send us an email and we'll respond within 24 hours.",
              },
              {
                icon: MapPin,
                title: "Our Location",
                value: "India",
                link: "https://maps.app.goo.gl/your-location-link", // Replace with actual map link
                description: "Our main office is located in India.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <a
                    href={item.link}
                    className="text-blue-600 dark:text-blue-400 text-lg font-semibold hover:underline transition-colors duration-300"
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                  >
                    {item.value}
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-600 transition-colors duration-300"
          >
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Phone Number (Optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (234) 567-8900"
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Service Needed
                </label>
                <Select
                  id="service"
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="seo-services">SEO Services</option>
                  <option value="cloud-infrastructure">Cloud Infrastructure</option>
                  <option value="cybersecurity-solutions">Cybersecurity Solutions</option>
                  <option value="it-consulting">IT Consulting</option>
                  <option value="custom-software-development">Custom Software Development</option>
                  <option value="other">Other</option>
                </Select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  className="bg-gray-100 dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div className="md:col-span-2 text-center">
                <Button variant="primary" size="lg" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Hours / Quick Support */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Quick Support?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
              Our team is available to assist you with any urgent queries.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg border border-white/20 dark:border-white/10"
              >
                <Clock className="w-12 h-12 text-blue-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Business Hours</h3>
                <p className="text-lg text-gray-300">Monday - Friday: 9 AM - 6 PM (IST)</p>
                <p className="text-lg text-gray-300">Saturday: 10 AM - 2 PM (IST)</p>
                <p className="text-lg text-gray-300">Sunday: Closed</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg border border-white/20 dark:border-white/10"
              >
                <MessageCircle className="w-12 h-12 text-purple-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
                <p className="text-lg text-gray-300 mb-4">Chat with our support team instantly.</p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={() => alert("Live Chat functionality would be integrated here!")}
                >
                  Start Live Chat
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
