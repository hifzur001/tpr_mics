"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Integration() {
  const integrations = [
    { name: "AWS", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Microsoft Azure", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Shopify", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Stripe", logo: "/placeholder.svg?height=60&width=120" },
    { name: "PayPal", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Slack", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Zoom", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MongoDB", logo: "/placeholder.svg?height=60&width=120" },
    { name: "PostgreSQL", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We integrate with the tools and platforms you already use, ensuring smooth workflows and enhanced
            productivity
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <Image
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                width={120}
                height={60}
                className="max-w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 dark:filter dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0"
              />
            </motion.div>
          ))}
        </div>

        {/* Integration Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-blue-800 transition-all duration-500"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "API Integration",
                description: "Seamless connection with third-party services and existing systems",
                icon: "API",
                color: "from-blue-600 to-purple-600",
                darkColor: "from-blue-500 to-purple-500",
              },
              {
                title: "Database Sync",
                description: "Real-time data synchronization across all your platforms",
                icon: "DB",
                color: "from-green-600 to-teal-600",
                darkColor: "from-green-500 to-teal-500",
              },
              {
                title: "AI Enhancement",
                description: "Intelligent automation and machine learning capabilities",
                icon: "AI",
                color: "from-purple-600 to-pink-600",
                darkColor: "from-purple-500 to-pink-500",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} dark:${feature.darkColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow-blue`}
                >
                  <span className="text-white font-bold text-xl">{feature.icon}</span>

                  {/* Animated glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} dark:${feature.darkColor} rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 bg-blue-500/10 dark:bg-blue-400/20 rounded-full"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 3,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
