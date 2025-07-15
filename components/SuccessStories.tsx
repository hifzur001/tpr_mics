"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, DollarSign } from "lucide-react"
import Image from "next/image"

export default function SuccessStories() {
  const successStories = [
    {
      company: "EcoTech Solutions",
      industry: "Renewable Energy",
      logo: "/placeholder.svg?height=60&width=120",
      challenge: "Outdated website with poor mobile experience",
      solution: "Complete web redesign with mobile-first approach",
      results: [
        { metric: "Website Traffic", increase: "350%", icon: TrendingUp },
        { metric: "Mobile Users", increase: "500%", icon: Users },
        { metric: "Lead Generation", increase: "280%", icon: DollarSign },
      ],
      testimonial:
        "TechSolutions transformed our digital presence completely. The results exceeded our wildest expectations.",
      author: "Sarah Mitchell, CEO",
    },
    {
      company: "UrbanFit Gym Chain",
      industry: "Fitness & Wellness",
      logo: "/placeholder.svg?height=60&width=120",
      challenge: "No mobile app for member management",
      solution: "Custom mobile app with booking and tracking features",
      results: [
        { metric: "Member Engagement", increase: "400%", icon: Users },
        { metric: "Class Bookings", increase: "250%", icon: TrendingUp },
        { metric: "Revenue Growth", increase: "180%", icon: DollarSign },
      ],
      testimonial:
        "The mobile app revolutionized how our members interact with our services. Membership retention improved dramatically.",
      author: "Marcus Rodriguez, Operations Director",
    },
    {
      company: "FreshMart Grocery",
      industry: "Retail & E-commerce",
      logo: "/placeholder.svg?height=60&width=120",
      challenge: "Low online visibility and poor local search ranking",
      solution: "Comprehensive SEO and Google My Business optimization",
      results: [
        { metric: "Local Search Ranking", increase: "600%", icon: TrendingUp },
        { metric: "Store Visits", increase: "220%", icon: Users },
        { metric: "Online Orders", increase: "450%", icon: DollarSign },
      ],
      testimonial:
        "We went from invisible to the top local search result. Our foot traffic and online sales skyrocketed.",
      author: "Jennifer Walsh, Store Manager",
    },
  ]

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
            Businesses Who Excelled Just By Believing In Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Real success stories from companies that trusted us to transform their digital presence
          </p>
        </motion.div>

        <div className="space-y-16">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <Image
                      src={story.logo || "/placeholder.svg"}
                      alt={story.company}
                      width={120}
                      height={60}
                      className="mr-4 dark:filter dark:brightness-0 dark:invert"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        {story.company}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                        {story.industry}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      Challenge:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                      {story.challenge}
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      Solution:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{story.solution}</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 transition-all duration-500">
                    <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4 transition-colors duration-300">
                      "{story.testimonial}"
                    </blockquote>
                    <cite className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                      - {story.author}
                    </cite>
                  </div>
                </div>

                {/* Right Content - Results */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
                    Results Achieved
                  </h4>
                  <div className="space-y-6">
                    {story.results.map((result, resultIndex) => (
                      <motion.div
                        key={resultIndex}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: resultIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-600 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-500"
                      >
                        <div className="flex items-center">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center mr-4 shadow-lg"
                          >
                            <result.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                              {result.metric}
                            </h5>
                            <div className="flex items-center">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-4"
                                style={{ width: "80%" }}
                              />
                              <span className="text-2xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">
                                +{result.increase}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-8">Combined Impact Across All Clients</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "$50M+", label: "Revenue Generated" },
              { value: "300%", label: "Average Growth" },
              { value: "500+", label: "Success Stories" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
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
                  {stat.value}
                </motion.div>
                <div className="text-blue-100 dark:text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
