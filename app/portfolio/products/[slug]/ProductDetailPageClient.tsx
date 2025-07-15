"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { products } from "@/lib/products" // Import products data

export default function ProductDetailPageClient({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  const [currentImage, setCurrentImage] = useState(product?.mainImage || "/placeholder.svg")

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center py-20">
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Product Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We could not find the product you are looking for. Please check the URL or return to our{" "}
            <Link href="/portfolio" className="text-blue-600 hover:underline">
              portfolio page
            </Link>
            .
          </p>
        </motion.div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Hero Section for Product */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">{product.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{product.detailedDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Product Image Gallery */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative w-full h-[400px] md:h-[600px] mb-4">
              <Image
                src={currentImage || "/placeholder.svg"}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="object-center rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {[product.mainImage, ...product.galleryImages].map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative h-24 w-full rounded-lg overflow-hidden cursor-pointer border-2 ${
                    currentImage === img ? "border-blue-600 dark:border-blue-400" : "border-transparent"
                  }`}
                  onClick={() => setCurrentImage(img)}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Key Features</h2>
              <ul className="space-y-4">
                {(product.features ?? []).map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-lg text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Benefits for Your Business</h2>
              <ul className="space-y-4">
                {(product.benefits ?? []).map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-lg text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Pricing Plans</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(product.pricing).map(([tier, details], index) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 capitalize">{tier}</h3>
                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">{details.price}</p>
                <ul className="space-y-3 flex-grow mb-8">
                  {details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Implement {product.name}?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how this product can transform your business.
            </p>
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 dark:text-blue-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Get a Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
