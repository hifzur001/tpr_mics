"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Search, ShoppingCart, Database, MapPin, Globe, Monitor, Brain, Settings } from "lucide-react"

export default function Services() {
  const services = [
    { icon: Code, name: "Web Development", color: "from-blue-500 to-cyan-500", darkColor: "from-blue-400 to-cyan-400" },
    {
      icon: Smartphone,
      name: "App Development",
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-400 to-pink-400",
    },
    {
      icon: Search,
      name: "SEO Services",
      color: "from-green-500 to-teal-500",
      darkColor: "from-green-400 to-teal-400",
    },
    {
      icon: ShoppingCart,
      name: "Amazon Ads",
      color: "from-orange-500 to-red-500",
      darkColor: "from-orange-400 to-red-400",
    },
    {
      icon: Database,
      name: "CRM Solutions",
      color: "from-indigo-500 to-purple-500",
      darkColor: "from-indigo-400 to-purple-400",
    },
    {
      icon: MapPin,
      name: "Google My Business",
      color: "from-red-500 to-pink-500",
      darkColor: "from-red-400 to-pink-400",
    },
    {
      icon: Globe,
      name: "Web Applications",
      color: "from-cyan-500 to-blue-500",
      darkColor: "from-cyan-400 to-blue-400",
    },
    {
      icon: Monitor,
      name: "Mobile Applications",
      color: "from-teal-500 to-green-500",
      darkColor: "from-teal-400 to-green-400",
    },
    { icon: Brain, name: "AI R&D", color: "from-pink-500 to-rose-500", darkColor: "from-pink-400 to-rose-400" },
    {
      icon: Settings,
      name: "Software Development",
      color: "from-yellow-500 to-orange-500",
      darkColor: "from-yellow-400 to-orange-400",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Comprehensive IT solutions tailored to transform your business and drive digital success
          </p>
        </motion.div>

        {/* Infinite Loop Services */}
        <div className="relative">
          <div className="flex space-x-6 animate-scroll">
            {/* First set */}
            {services.map((service, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="flex-shrink-0 w-80 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} dark:${service.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-blue`}
                >
                  <service.icon className="w-8 h-8 text-white" />

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} dark:${service.darkColor} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  Professional {service.name.toLowerCase()} solutions designed to elevate your business and deliver
                  exceptional results.
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue-600 dark:text-blue-400 font-semibold flex items-center space-x-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}

            {/* Second set for seamless loop */}
            {services.map((service, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                className="flex-shrink-0 w-80 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} dark:${service.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-blue`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  Professional {service.name.toLowerCase()} solutions designed to elevate your business and deliver
                  exceptional results.
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-blue-600 dark:text-blue-400 font-semibold flex items-center space-x-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Code,
              title: "Development",
              description: "Custom web and mobile applications built with cutting-edge technologies",
              color: "from-blue-600 to-purple-600",
              darkColor: "from-blue-500 to-purple-500",
            },
            {
              icon: Search,
              title: "Marketing",
              description: "SEO, digital advertising, and online presence optimization services",
              color: "from-green-600 to-teal-600",
              darkColor: "from-green-500 to-teal-500",
            },
            {
              icon: Brain,
              title: "Innovation",
              description: "AI research, development, and implementation of next-gen solutions",
              color: "from-purple-600 to-pink-600",
              darkColor: "from-purple-500 to-pink-500",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 bg-gradient-to-r ${category.color} dark:${category.darkColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow-blue`}
              >
                <category.icon className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                {category.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
