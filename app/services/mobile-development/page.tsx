"use client"

import { motion } from "framer-motion"
import { Smartphone, Tablet, Monitor, Zap, Shield, Users, CheckCircle, ArrowRight, Apple, Play } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function AppDevelopmentPage() {
  const features = [
    {
      icon: Smartphone,
      title: "Native iOS & Android",
      description: "Platform-specific apps that leverage native features for optimal performance",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Monitor,
      title: "Cross-Platform",
      description: "React Native and Flutter solutions for faster development and deployment",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized code and efficient architecture for lightning-fast app performance",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with data encryption and secure authentication",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for exceptional user experience and engagement",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Tablet,
      title: "Multi-Device Support",
      description: "Responsive design that works perfectly across phones, tablets, and devices",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const appTypes = [
    {
      title: "E-commerce Apps",
      description: "Shopping apps with payment integration, inventory management, and user accounts",
      icon: "🛒",
      examples: ["Online stores", "Marketplace apps", "B2B platforms"],
    },
    {
      title: "Social & Communication",
      description: "Social networking, messaging, and community-building applications",
      icon: "💬",
      examples: ["Chat apps", "Social networks", "Community platforms"],
    },
    {
      title: "Business & Productivity",
      description: "Enterprise solutions for workflow management and business operations",
      icon: "💼",
      examples: ["CRM systems", "Project management", "Team collaboration"],
    },
    {
      title: "Healthcare & Fitness",
      description: "Health monitoring, fitness tracking, and medical consultation apps",
      icon: "🏥",
      examples: ["Fitness trackers", "Telemedicine", "Health monitoring"],
    },
    {
      title: "Education & Learning",
      description: "E-learning platforms, course management, and educational tools",
      icon: "📚",
      examples: ["Online courses", "Language learning", "Skill development"],
    },
    {
      title: "Entertainment & Media",
      description: "Streaming, gaming, and multimedia content delivery applications",
      icon: "🎮",
      examples: ["Video streaming", "Music apps", "Gaming platforms"],
    },
  ]

  const technologies = [
    { name: "React Native", logo: "/placeholder.svg?height=60&width=60", category: "Cross-Platform" },
    { name: "Flutter", logo: "/placeholder.svg?height=60&width=60", category: "Cross-Platform" },
    { name: "Swift", logo: "/placeholder.svg?height=60&width=60", category: "iOS Native" },
    { name: "Kotlin", logo: "/placeholder.svg?height=60&width=60", category: "Android Native" },
    { name: "Firebase", logo: "/placeholder.svg?height=60&width=60", category: "Backend" },
    { name: "AWS", logo: "/placeholder.svg?height=60&width=60", category: "Cloud" },
    { name: "Node.js", logo: "/placeholder.svg?height=60&width=60", category: "Backend" },
    { name: "MongoDB", logo: "/placeholder.svg?height=60&width=60", category: "Database" },
  ]

  const packages = [
    {
      name: "MVP App",
      price: "$15,000",
      description: "Perfect for startups and proof of concept",
      features: [
        "Single platform (iOS or Android)",
        "Basic UI/UX design",
        "Core functionality",
        "User authentication",
        "Basic backend integration",
        "3 months support",
        "App store submission",
      ],
      popular: false,
    },
    {
      name: "Professional App",
      price: "$35,000",
      description: "Full-featured app for growing businesses",
      features: [
        "Cross-platform (iOS & Android)",
        "Custom UI/UX design",
        "Advanced features",
        "Push notifications",
        "Analytics integration",
        "Payment gateway",
        "6 months support",
        "Performance optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise App",
      price: "Custom",
      description: "Complex solutions for large organizations",
      features: [
        "Multi-platform deployment",
        "Enterprise-grade security",
        "Custom integrations",
        "Advanced analytics",
        "Scalable architecture",
        "Admin dashboard",
        "12 months support",
        "Dedicated team",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Mobile App{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your ideas into powerful mobile applications. We create native and cross-platform apps that
                engage users, drive growth, and deliver exceptional experiences across all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Start Your App
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  View Portfolio
                </motion.button>
              </div>

              {/* App Store Badges */}
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg"
                >
                  <Apple className="w-6 h-6" />
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg"
                >
                  <Play className="w-6 h-6" />
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Phone Mockups */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute left-0 top-0 w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <Smartphone className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-semibold">iOS App</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute right-0 top-8 w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl"
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <Monitor className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-semibold">Android App</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">App Development Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile app development services that cover every aspect of your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Types of Apps We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple utilities to complex enterprise solutions, we build apps for every industry and use case
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                  <div className="text-6xl mb-6 text-center">{type.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">{type.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          <span className="text-gray-600 text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Technologies & Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust, scalable mobile applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="w-12 h-12 mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">App Development Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your mobile app development needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative group ${pkg.popular ? "lg:-mt-8" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div
                  className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    pkg.popular
                      ? "border-purple-200 group-hover:border-purple-300"
                      : "border-gray-100 group-hover:border-gray-200"
                  }`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                    {pkg.price !== "Custom" && <p className="text-gray-500">Starting price</p>}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your App?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's turn your app idea into reality. Our expert team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your App Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
