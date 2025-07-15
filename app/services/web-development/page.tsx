"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Zap, Shield, Search, ArrowRight } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Button from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored solutions built from scratch to meet your specific business requirements",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect performance across all devices",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Modern Technologies",
      description: "Latest frameworks and tools including React, Next.js, and Node.js",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed with advanced caching and performance techniques",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security measures to protect your data and users",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Search engine friendly structure for better visibility and rankings",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Basic SEO setup",
        "Contact form integration",
        "3 months support",
        "SSL certificate",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "6 months support",
        "Performance optimization",
        "Analytics setup",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Multi-language support",
        "Advanced security",
        "12 months support",
        "Dedicated project manager",
        "Priority support",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Web{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
                Create powerful, scalable web applications that drive business growth. Our expert developers use
                cutting-edge technologies to build websites that perform exceptionally and deliver outstanding user
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 dark:border-gray-600 transition-colors duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 dark:text-gray-500 text-sm ml-4">modern-website.tsx</span>
                </div>
                <pre className="text-green-400 dark:text-green-300 font-mono text-sm">
                  {`function ModernWebsite() {
  return (
    <div className="responsive">
      <Header navigation={dynamic} />
      <Hero animation={smooth} />
      <Features interactive={true} />
      <Footer seo={optimized} />
    </div>
  );
}`}
                </pre>
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
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Comprehensive web development services designed to meet your business needs
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
                className="group"
              >
                <Card className="group-hover:border-blue-200 dark:group-hover:border-blue-500">
                  <CardContent>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow-blue`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
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
              Pricing Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Choose the perfect package for your web development needs
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
                className={`relative group ${pkg.popular ? "lg:-mt-8" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <Card
                  className={`${
                    pkg.popular
                      ? "border-blue-200 dark:border-blue-600 group-hover:border-blue-300 dark:group-hover:border-blue-500"
                      : "group-hover:border-gray-200 dark:group-hover:border-gray-500"
                  }`}
                  hover={false}
                >
                  <CardContent>
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
                        <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                          One-time payment
                        </p>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button variant={pkg.popular ? "primary" : "secondary"} size="lg" className="w-full">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto transition-colors duration-300">
              Let's discuss your project and create a web solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="flex items-center justify-center space-x-2 bg-white text-blue-600 hover:bg-gray-100"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
