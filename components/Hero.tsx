"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Sparkles, ArrowRight, Zap, Rocket, Shield, Cloud } from "lucide-react"
import Button from "./ui/Button"

export default function Hero() {
  const [currentColor, setCurrentColor] = useState(0)
  const [code, setCode] = useState("")
  const [currentIcon, setCurrentIcon] = useState(0)

  const colors = [
    "from-blue-600 to-purple-600",
    "from-purple-600 to-pink-600",
    "from-pink-600 to-red-600",
    "from-red-600 to-orange-600",
    "from-orange-600 to-yellow-600",
    "from-yellow-600 to-green-600",
    "from-green-600 to-blue-600",
  ]

  const darkColors = [
    "from-blue-400 to-purple-400",
    "from-purple-400 to-pink-400",
    "from-pink-400 to-red-400",
    "from-red-400 to-orange-400",
    "from-orange-400 to-yellow-400",
    "from-yellow-400 to-green-400",
    "from-green-400 to-blue-400",
  ]

  const codeSnippets = [
    `function cloudInfrastructure() {
  return "Scalable & Secure";
}`,
    `const cybersecurity = () => {
  return "Advanced Protection";
};`,
    `class ITConsulting {
  optimize() { return "Strategic Solutions"; }
}`,
    `async function customSoftware() {
  return await "Innovation";
}`,
    `const aeronautics = {
  technology: "cutting-edge",
  solutions: "future-ready"
};`,
    `const hrTechnologies = {
  technology: "cutting-edge",
  solutions: "future-ready"
};`,
  ]

  const floatingIcons = [Sparkles, Code, Zap, Rocket, Shield, Cloud]

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length)
    }, 2000)

    const codeInterval = setInterval(() => {
      const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      setCode(randomCode)
    }, 3000)

    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % floatingIcons.length)
    }, 1500)

    return () => {
      clearInterval(colorInterval)
      clearInterval(codeInterval)
      clearInterval(iconInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 transition-colors duration-500">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 dark:bg-blue-300/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                {(() => {
                  const IconComponent = floatingIcons[currentIcon]
                  return (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <IconComponent className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                  )
                })()}
                <motion.div
                  className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gray-900 dark:text-white transition-colors duration-300">Transform Your</span>
              <br />
              <motion.span
                className={`bg-gradient-to-r ${colors[currentColor]} dark:${darkColors[currentColor]} bg-clip-text text-transparent`}
                key={currentColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Digital Future
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl transition-colors duration-300"
            >
              TOPAGERANKERS specializes in strategic IT solutions, cloud infrastructure optimization, robust cybersecurity
              measures, and innovative technologies for aeronautics and HR. Your forward-thinking partner for digital
              transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                className={`bg-gradient-to-r ${colors[currentColor]} dark:${darkColors[currentColor]} text-white shadow-lg hover:shadow-xl flex items-center space-x-2`}
              >
                <span>Start Your Project</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>

              <Button href="/portfolio" variant="outline" size="lg">
                View Portfolio
              </Button>
            </motion.div>

            {/* Company Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Established February 2024</span>
            </motion.div> */}
          </motion.div>

          {/* Right Content - Interactive Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 dark:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center space-x-2 mb-4">
                <motion.div
                  className="w-3 h-3 bg-red-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                />
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                />
                <span className="text-gray-400 dark:text-gray-500 text-sm ml-4">Topagerankers.js</span>
              </div>

              <div className="font-mono text-sm">
                <motion.pre
                  key={code}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-400 dark:text-green-300"
                >
                  {code || codeSnippets[0]}
                </motion.pre>
              </div>

              <div className="flex items-center mt-4 text-blue-400 dark:text-blue-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code className="w-4 h-4 mr-2 ml-4" />
                </motion.div>
                <span className="text-sm">Crafting innovative IT solutions...</span>
              </div>
            </motion.div>

            {/* Enhanced Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full opacity-20 dark:opacity-30"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-400 dark:to-red-400 rounded-full opacity-20 dark:opacity-30"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400 rounded-full opacity-20 dark:opacity-30"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
