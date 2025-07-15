"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Users, Award, Clock, Globe } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Proven Expertise",
      description: "10+ years of experience delivering cutting-edge solutions across industries",
      stats: "500+ Projects",
      color: "from-blue-500 to-cyan-500",
      darkColor: "from-blue-400 to-cyan-400",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid development cycles without compromising on quality or performance",
      stats: "50% Faster",
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-400 to-pink-400",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Expert developers, designers, and strategists committed to your success",
      stats: "50+ Experts",
      color: "from-green-500 to-teal-500",
      darkColor: "from-green-400 to-teal-400",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in web development and digital innovation",
      stats: "25+ Awards",
      color: "from-yellow-500 to-orange-500",
      darkColor: "from-yellow-400 to-orange-400",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your business never stops running",
      stats: "Always Available",
      color: "from-red-500 to-pink-500",
      darkColor: "from-red-400 to-pink-400",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with localized solutions and global standards",
      stats: "30+ Countries",
      color: "from-indigo-500 to-purple-500",
      darkColor: "from-indigo-400 to-purple-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

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
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We combine technical excellence with creative innovation to deliver solutions that drive real business
            growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-500">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${reason.color} dark:${reason.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-blue dark:group-hover:shadow-glow-blue transition-all duration-300`}
                >
                  <reason.icon className="w-8 h-8 text-white" />

                  {/* Animated glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${reason.color} dark:${reason.darkColor} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {reason.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
                  {reason.description}
                </p>

                <motion.div
                  className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {reason.stats}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 0px rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100 dark:text-blue-200 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 bg-white/10 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
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
        </motion.div>
      </div>
    </section>
  )
}
