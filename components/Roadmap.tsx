"use client"

import { motion } from "framer-motion"
import { CheckCircle, Circle, ArrowRight } from "lucide-react"

export default function Roadmap() {
  const roadmapSteps = [
    {
      phase: "Discovery",
      title: "Project Analysis",
      description: "Understanding your requirements, goals, and technical specifications",
      status: "completed",
      duration: "1-2 weeks",
    },
    {
      phase: "Planning",
      title: "Strategy & Design",
      description: "Creating wireframes, user experience design, and technical architecture",
      status: "completed",
      duration: "2-3 weeks",
    },
    {
      phase: "Development",
      title: "Build & Code",
      description: "Agile development with regular updates and milestone deliveries",
      status: "active",
      duration: "4-8 weeks",
    },
    {
      phase: "Testing",
      title: "Quality Assurance",
      description: "Comprehensive testing, bug fixes, and performance optimization",
      status: "upcoming",
      duration: "1-2 weeks",
    },
    {
      phase: "Launch",
      title: "Deployment",
      description: "Going live with full support and monitoring for smooth launch",
      status: "upcoming",
      duration: "1 week",
    },
    {
      phase: "Support",
      title: "Maintenance",
      description: "Ongoing support, updates, and feature enhancements",
      status: "upcoming",
      duration: "Ongoing",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
      case "active":
        return (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full shadow-glow-blue"
          />
        )
      default:
        return <Circle className="w-6 h-6 text-gray-400 dark:text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400"
      case "active":
        return "from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
      default:
        return "from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500"
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Project Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Our structured approach ensures timely delivery and exceptional results at every stage
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < roadmapSteps.length - 1 && (
                <motion.div
                  className="absolute left-6 top-16 w-0.5 h-20 bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                />
              )}

              {/* Status Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-gray-700 rounded-full border-4 border-gray-200 dark:border-gray-600 flex items-center justify-center z-10 transition-colors duration-300">
                {getStatusIcon(step.status)}
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="ml-8 flex-1 bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(step.status)} text-white text-sm font-semibold rounded-full shadow-lg`}
                    >
                      {step.phase}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full transition-colors duration-300">
                    {step.duration}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                  {step.description}
                </p>

                {step.status === "active" && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full shadow-glow-blue"
                  />
                )}
              </motion.div>

              {/* Arrow for active step */}
              {step.status === "active" && (
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="ml-4 text-blue-500 dark:text-blue-400"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
