"use client"

import { motion } from "framer-motion"
import { Phone, Calendar, MessageCircle, ArrowRight } from "lucide-react"
import Button from "./ui/Button"

export default function BusinessCall() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Schedule a free consultation with our experts to explore how we can transform your business
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Phone Call",
                description: "Direct conversation with our project specialists",
                color: "from-blue-600 to-purple-600",
                darkColor: "from-blue-500 to-purple-500",
                buttonText: "Call Now",
              },
              {
                icon: Calendar,
                title: "Schedule Meeting",
                description: "Book a convenient time for detailed discussion",
                color: "from-purple-600 to-pink-600",
                darkColor: "from-purple-500 to-pink-500",
                buttonText: "Book Meeting",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Instant messaging with our support team",
                color: "from-green-600 to-teal-600",
                darkColor: "from-green-500 to-teal-500",
                buttonText: "Start Chat",
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 bg-gradient-to-r ${option.color} dark:${option.darkColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow-blue`}
                >
                  <option.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {option.description}
                </p>
                <Button variant="outline" size="md">
                  {option.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
              Our team is ready to discuss your project requirements, provide expert advice, and create a customized
              solution that exceeds your expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="lg" className="flex items-center space-x-2">
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                <span>or call us at</span>
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "15 min", label: "Response Time", color: "text-blue-600 dark:text-blue-400" },
                  { value: "Free", label: "Consultation", color: "text-green-600 dark:text-green-400" },
                  { value: "24/7", label: "Support", color: "text-purple-600 dark:text-purple-400" },
                ].map((indicator, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} className="group">
                    <div className={`text-2xl font-bold ${indicator.color} transition-colors duration-300`}>
                      {indicator.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {indicator.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
