"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "TechSolutions transformed our outdated website into a modern, high-performing platform. The team's expertise in web development and SEO helped us increase our online presence by 300%.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, EcoGreen Solutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The mobile app they developed for us exceeded all expectations. User engagement increased by 250% and our app store ratings went from 3.2 to 4.8 stars. Incredible work!",
    },
    {
      name: "Sarah Kim",
      role: "Marketing Director, RetailPro",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Their Amazon Ads and SEO services completely revolutionized our online sales. We saw a 400% increase in revenue within just 3 months. The ROI has been phenomenal.",
    },
    {
      name: "David Thompson",
      role: "CTO, FinanceFlow",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The AI R&D team helped us implement machine learning solutions that automated 60% of our manual processes. Their technical expertise is unmatched in the industry.",
    },
    {
      name: "Lisa Chen",
      role: "Operations Manager, LogiTech",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The CRM solution they built for us streamlined our entire sales process. Lead conversion improved by 180% and our team productivity increased significantly.",
    },
    {
      name: "Robert Johnson",
      role: "Owner, Local Bistro",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Their Google My Business optimization brought us from page 3 to the top 3 local search results. Our foot traffic increased by 150% in just 2 months!",
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-500 relative">
                {/* Quote Icon */}
                <motion.div
                  whileHover={{ rotate: 180 }}
                  className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Quote className="w-4 h-4 text-white" />
                </motion.div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1 }}>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <motion.div whileHover={{ scale: 1.1 }} className="relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg inline-block border border-gray-100 dark:border-gray-600 transition-colors duration-300">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
              ))}
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              4.9/5
            </div>
            <div className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Average rating from 500+ reviews
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
