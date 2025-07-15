"use client"

import { motion } from "framer-motion"
import { Lightbulb, Cog, CheckCircle } from "lucide-react"

export default function IdeaConceptSolution() {
  const steps = [
    {
      icon: Lightbulb,
      title: "An Idea",
      description:
        "Every great project starts with a spark of innovation. We help you refine and shape your vision into a concrete plan.",
      color: "from-yellow-400 to-orange-500",
      darkColor: "from-yellow-300 to-orange-400",
    },
    {
      icon: Cog,
      title: "A Concept",
      description:
        "We transform your idea into a detailed concept with technical specifications, user experience design, and strategic planning.",
      color: "from-blue-500 to-purple-600",
      darkColor: "from-blue-400 to-purple-500",
    },
    {
      icon: CheckCircle,
      title: "A Solution",
      description:
        "Finally, we deliver a complete, scalable solution that exceeds expectations and drives real business results.",
      color: "from-green-500 to-teal-600",
      darkColor: "from-green-400 to-teal-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            From Idea to Reality
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Our proven three-step process transforms your vision into powerful digital solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-600">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} dark:${step.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <step.icon className="w-8 h-8 text-white" />

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} dark:${step.darkColor} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {step.description}
                </p>

                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold shadow-lg"
                >
                  {index + 1}
                </motion.div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899) 1",
                  }}
                />
              </div>

              {/* Connecting Line with Animation */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.3 + 0.8, duration: 0.8 }}
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 transform -translate-y-1/2 z-10 origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-blue-500/5 dark:bg-blue-400/10 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
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
      </div>
    </section>
  )
}
