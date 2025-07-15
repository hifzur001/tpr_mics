"use client"

import { motion } from "framer-motion"
import { Search, TrendingUp, Target, BarChart, Globe, Users, CheckCircle, ArrowRight } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function SEOServicesPage() {
  const features = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "In-depth analysis to identify high-value keywords that drive qualified traffic",
      color: "from-green-500 to-teal-500",
      darkColor: "from-green-400 to-teal-400",
    },
    {
      icon: TrendingUp,
      title: "On-Page Optimization",
      description: "Complete optimization of your website's content, structure, and technical elements",
      color: "from-blue-500 to-purple-500",
      darkColor: "from-blue-400 to-purple-400",
    },
    {
      icon: Target,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area",
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-400 to-pink-400",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Detailed performance tracking and monthly reports showing your SEO progress",
      color: "from-orange-500 to-red-500",
      darkColor: "from-orange-400 to-red-400",
    },
    {
      icon: Globe,
      title: "Link Building",
      description: "High-quality backlink acquisition to boost your domain authority and rankings",
      color: "from-cyan-500 to-blue-500",
      darkColor: "from-cyan-400 to-blue-400",
    },
    {
      icon: Users,
      title: "Content Strategy",
      description: "SEO-optimized content creation that engages users and ranks well in search",
      color: "from-pink-500 to-rose-500",
      darkColor: "from-pink-400 to-rose-400",
    },
  ]

  const packages = [
    {
      name: "Local SEO",
      price: "$999",
      description: "Perfect for local businesses",
      features: [
        "Google My Business optimization",
        "Local keyword research",
        "Citation building",
        "Review management",
        "Local content creation",
        "Monthly reporting",
      ],
      popular: false,
    },
    {
      name: "Professional SEO",
      price: "$1,999",
      description: "Comprehensive SEO for growing businesses",
      features: [
        "Complete SEO audit",
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO fixes",
        "Content optimization",
        "Link building campaign",
        "Monthly reporting",
        "Competitor analysis",
      ],
      popular: true,
    },
    {
      name: "Enterprise SEO",
      price: "Custom",
      description: "Advanced SEO for large organizations",
      features: [
        "Enterprise SEO strategy",
        "Multi-location optimization",
        "Advanced technical SEO",
        "Custom reporting dashboard",
        "Dedicated SEO manager",
        "Priority support",
        "Quarterly strategy reviews",
        "Advanced analytics setup",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                SEO{" "}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
                Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. We help
                businesses rank higher in search results and attract qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Get SEO Audit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    SEO Performance
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live Data</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Organic Traffic</span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">+350%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Keyword Rankings</span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">+280%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Conversion Rate</span>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">+180%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
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
              Our SEO Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Comprehensive SEO solutions designed to improve your search rankings and drive organic growth
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
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-green-200 dark:group-hover:border-green-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} dark:${feature.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-green`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              SEO Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Choose the perfect SEO package for your business needs and budget
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
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div
                  className={`bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-2 ${
                    pkg.popular
                      ? "border-green-200 dark:border-green-600 group-hover:border-green-300 dark:group-hover:border-green-500"
                      : "border-gray-100 dark:border-gray-600 group-hover:border-gray-200 dark:group-hover:border-gray-500"
                  }`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">
                      {pkg.description}
                    </p>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      {pkg.price}
                    </div>
                    {pkg.price !== "Custom" && (
                      <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">per month</p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500"
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-500 dark:to-teal-500 text-white transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate Search Results?</h2>
            <p className="text-xl text-green-100 dark:text-green-200 mb-8 max-w-3xl mx-auto transition-colors duration-300">
              Let's boost your online visibility and drive more qualified traffic to your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 dark:text-green-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start SEO Campaign</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 dark:hover:text-green-500 transition-colors duration-300"
              >
                Free SEO Audit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
