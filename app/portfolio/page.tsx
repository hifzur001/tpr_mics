"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Code, Smartphone, Search, Brain, Cloud, Shield } from "lucide-react"
import { products as allProducts } from "@/lib/products" // Import products data

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description:
        "A modern, responsive e-commerce website built for a retail client, focusing on user experience and conversion.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Web Development",
      client: "Retail Innovations Inc.",
      challenge: "Outdated UI/UX, slow performance, and poor mobile responsiveness.",
      solution:
        "Complete redesign with Next.js, Tailwind CSS, and optimized image loading. Integrated a new payment gateway and inventory system.",
      results: ["+150% Website Traffic", "+80% Mobile Conversions", "+60% Sales Revenue"],
      icon: Code,
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "A secure and intuitive mobile application for patient management and appointment booking.",
      image: "/placeholder.svg?height=600&width=800",
      category: "App Development",
      client: "MediCare Solutions",
      challenge: "Lack of a centralized platform for patients to manage appointments and access health records.",
      solution:
        "Developed a cross-platform mobile app using React Native with secure data encryption and HIPAA compliance.",
      results: ["+200% Patient Engagement", "+120% Appointment Bookings", "4.8/5 App Store Rating"],
      icon: Smartphone,
    },
    {
      id: 3,
      title: "AI-Powered Chatbot for Customer Support",
      description: "An intelligent chatbot integrated into a client's website to provide 24/7 customer assistance.",
      image: "/placeholder.svg?height=600&width=800",
      category: "AI R&D",
      client: "Global Tech Support",
      challenge: "High volume of customer inquiries overwhelming human support agents.",
      solution:
        "Implemented a custom AI chatbot using natural language processing (NLP) to handle common queries and escalate complex issues.",
      results: ["-70% Support Tickets", "+40% Customer Satisfaction", "24/7 Availability"],
      icon: Brain,
    },
    {
      id: 4,
      title: "Local SEO Domination for Restaurants",
      description:
        "Helped a chain of local restaurants achieve top rankings in Google My Business and local search results.",
      image: "/placeholder.svg?height=600&width=800",
      category: "SEO Services",
      client: "Gourmet Bites Group",
      challenge: "Low online visibility in local search, leading to fewer walk-ins and online orders.",
      solution:
        "Comprehensive local SEO strategy including GMB optimization, local citation building, and review management.",
      results: ["Top 3 Local Ranking", "+250% Foot Traffic", "+180% Online Orders"],
      icon: Search,
    },
    {
      id: 5,
      title: "Cloud Migration & Optimization",
      description:
        "Migrated a large enterprise's on-premise infrastructure to AWS, improving scalability and reducing costs.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Cloud Infrastructure",
      client: "Enterprise Solutions Co.",
      challenge: "High operational costs and limited scalability with existing on-premise servers.",
      solution:
        "Planned and executed a phased migration to AWS, optimizing resource allocation and implementing serverless architectures.",
      results: ["-40% Infrastructure Costs", "+99.99% Uptime", "Enhanced Scalability"],
      icon: Cloud,
    },
    {
      id: 6,
      title: "Cybersecurity Audit & Implementation",
      description:
        "Conducted a full security audit and implemented robust cybersecurity measures for a financial institution.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Cybersecurity Solutions",
      client: "SecureBank Financial",
      challenge: "Vulnerabilities in existing systems and compliance requirements.",
      solution:
        "Performed penetration testing, implemented advanced threat detection systems, and conducted employee security training.",
      results: ["0 Security Breaches", "100% Compliance Achieved", "Improved Data Protection"],
      icon: Shield,
    },
    {
      id: 7,
      title: "Custom CRM Development",
      description:
        "Built a tailored Customer Relationship Management system to streamline sales and marketing processes.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Custom Software Development",
      client: "SalesPro CRM",
      challenge: "Off-the-shelf CRM solutions did not meet unique business workflows.",
      solution:
        "Designed and developed a custom CRM with integrated lead tracking, sales automation, and reporting features.",
      results: ["+30% Sales Efficiency", "+20% Lead Conversion", "Streamlined Workflows"],
      icon: Code,
    },
    {
      id: 8,
      title: "Mobile Game Development",
      description: "Developed an engaging casual mobile game for iOS and Android with in-app purchases.",
      image: "/placeholder.svg?height=600&width=800",
      category: "App Development",
      client: "PlayTime Studios",
      challenge: "Need for a high-performance, addictive mobile game to capture market share.",
      solution:
        "Used Unity for cross-platform development, focusing on smooth animations, intuitive controls, and engaging gameplay loops.",
      results: ["1M+ Downloads", "4.5/5 User Rating", "+50% Retention Rate"],
      icon: Smartphone,
    },
  ]

  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))]

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Products Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Discover our innovative software products designed to streamline your business operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allProducts.map((product, index) => (
              <Link href={`/portfolio/products/${product.slug}`} key={product.id} passHref>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group cursor-pointer"
                >
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                    <Image
                      src={product.mainImage || "/placeholder.svg"}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white text-lg font-bold">{product.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3"
                    >
                      <product.icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Software Product</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{product.shortDescription}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero Section (Existing Portfolio Hero) */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our diverse range of successful projects and see how we've helped businesses achieve their digital
              goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group"
              >
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white text-lg font-bold">{item.title}</span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3"
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.category}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Client: {item.client}</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{item.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {item.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-gray-600 dark:text-gray-400 text-xl mt-16"
            >
              No projects found for this category.
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
              Let's discuss your vision and turn it into a success story.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 dark:text-blue-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Get a Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
