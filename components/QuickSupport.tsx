"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, Clock, Headphones } from "lucide-react"
import Input from "./ui/Input"
import Textarea from "./ui/Textarea"
import Select from "./ui/Select"
import Button from "./ui/Button"

export default function QuickSupport() {
  const supportOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      contact: "+91-93552-73535",
      availability: "24/7 Available",
      color: "from-blue-500 to-cyan-500",
      darkColor: "from-blue-400 to-cyan-400",
    },
    {
      icon: Mail,
      title: "Email Sales",
      description: "Send us your detailed requirements",
      contact: "sales@topagerankers.com",
      availability: "Response within 24 hours",
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-400 to-pink-400",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging with our team",
      contact: "Start Chat Now",
      availability: "Online now",
      color: "from-green-500 to-teal-500",
      darkColor: "from-green-400 to-teal-400",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with existing projects",
      contact: "support@topagerankers.com",
      availability: "24/7 Technical Help",
      color: "from-orange-500 to-red-500",
      darkColor: "from-orange-400 to-red-400",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950 text-white transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Quick Support - Get In Touch Today</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
            Need immediate assistance? Our support team is ready to help you with any questions or project requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 border border-white/20 dark:border-white/10 group-hover:border-white/40 dark:group-hover:border-white/20">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${option.color} dark:${option.darkColor} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg shadow-glow-blue`}
                >
                  <option.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4 transition-colors duration-300">
                  {option.description}
                </p>

                <div className="space-y-2">
                  <div className="text-lg font-semibold text-blue-300 dark:text-blue-400 transition-colors duration-300 break-words">
                    {option.contact}
                  </div>
                  <div className="flex items-center text-sm text-gray-400 dark:text-gray-500 transition-colors duration-300">
                    <Clock className="w-4 h-4 mr-2" />
                    {option.availability}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 dark:border-white/10 transition-colors duration-300">
            <h3 className="text-3xl font-bold text-center mb-8">Send Us a Message</h3>

            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (234) 567-8900"
                  className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Service Needed
                </label>
                <Select className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white">
                  <option value="" className="bg-gray-800 dark:bg-gray-900">
                    Select a service
                  </option>
                  <option value="web-development" className="bg-gray-800 dark:bg-gray-900">
                    Web Development
                  </option>
                  <option value="app-development" className="bg-gray-800 dark:bg-gray-900">
                    App Development
                  </option>
                  <option value="seo" className="bg-gray-800 dark:bg-gray-900">
                    SEO Services
                  </option>
                  <option value="ai-rd" className="bg-gray-800 dark:bg-gray-900">
                    AI R&D
                  </option>
                  <option value="other" className="bg-gray-800 dark:bg-gray-900">
                    Other
                  </option>
                </Select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-semibold text-gray-300 dark:text-gray-400 transition-colors duration-300">
                  Project Details
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="bg-white/10 dark:bg-white/5 border-white/30 dark:border-white/20 text-white placeholder-gray-400 dark:placeholder-gray-500"
                />
              </div>

              <div className="md:col-span-2 text-center">
                <Button variant="primary" size="lg" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-red-600/20 dark:bg-red-500/20 border border-red-400/30 dark:border-red-400/20 rounded-2xl p-6 inline-block transition-colors duration-300">
            <h4 className="text-xl font-bold text-red-300 dark:text-red-400 mb-2 transition-colors duration-300">
              Emergency Support
            </h4>
            <p className="text-gray-300 dark:text-gray-400 mb-4 transition-colors duration-300">
              Critical issues? Call our emergency hotline
            </p>
            <a
              href="tel:+919355273535"
              className="text-2xl font-bold text-red-300 dark:text-red-400 hover:text-red-200 dark:hover:text-red-300 transition-colors duration-300"
            >
              +91-9355-27-3535
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
