"use client"

import { motion } from "framer-motion"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function CustomerReviews() {
  const reviews = [
    {
      platform: "Google Reviews",
      rating: 4.9,
      totalReviews: 247,
      recentReviews: [
        {
          name: "Amanda Foster",
          rating: 5,
          date: "2 days ago",
          text: "Exceptional service! They delivered our e-commerce platform ahead of schedule.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Michael Brown",
          rating: 5,
          date: "1 week ago",
          text: "The AI integration they built for us has revolutionized our workflow.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    {
      platform: "Clutch",
      rating: 4.8,
      totalReviews: 89,
      recentReviews: [
        {
          name: "Jessica Liu",
          rating: 5,
          date: "3 days ago",
          text: "Professional team with deep technical expertise. Highly recommended!",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Carlos Martinez",
          rating: 5,
          date: "5 days ago",
          text: "Their mobile app development skills are top-notch. Great communication.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    {
      platform: "Trustpilot",
      rating: 4.9,
      totalReviews: 156,
      recentReviews: [
        {
          name: "Rachel Green",
          rating: 5,
          date: "1 day ago",
          text: "Outstanding SEO results! Our organic traffic increased by 300%.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          name: "Tom Wilson",
          rating: 5,
          date: "4 days ago",
          text: "The CRM system they built has streamlined our entire sales process.",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
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
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Real feedback from real clients across multiple review platforms
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
            >
              {/* Platform Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {platform.platform}
                </h3>

                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(platform.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300 dark:text-gray-600"
                      } transition-colors duration-300`}
                    />
                  ))}
                  <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {platform.rating}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  Based on {platform.totalReviews} reviews
                </p>
              </div>

              {/* Recent Reviews */}
              <div className="space-y-6">
                {platform.recentReviews.map((review, reviewIndex) => (
                  <motion.div
                    key={reviewIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: reviewIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-200 dark:border-blue-600 pl-4 transition-colors duration-300"
                  >
                    <div className="flex items-center mb-2">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm transition-colors duration-300">
                          {review.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                          {review.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                      "{review.text}"
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* View More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
              >
                View All Reviews
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Review Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-blue-800 transition-all duration-500"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: ThumbsUp,
                value: "98%",
                label: "Positive Reviews",
                color: "from-green-500 to-teal-500",
                darkColor: "from-green-400 to-teal-400",
              },
              {
                icon: Star,
                value: "4.9",
                label: "Average Rating",
                color: "from-blue-500 to-purple-500",
                darkColor: "from-blue-400 to-purple-400",
              },
              {
                icon: MessageSquare,
                value: "500+",
                label: "Total Reviews",
                color: "from-purple-500 to-pink-500",
                darkColor: "from-purple-400 to-pink-400",
              },
            ].map((stat, index) => (
              <div key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} dark:${stat.darkColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
