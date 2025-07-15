"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Partners() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Technology Partner",
      description: "Certified Microsoft Partner for cloud solutions and enterprise software",
    },
    {
      name: "Google",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Cloud Partner",
      description: "Google Cloud Partner specializing in AI and machine learning solutions",
    },
    {
      name: "AWS",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Cloud Partner",
      description: "Amazon Web Services Partner for scalable cloud infrastructure",
    },
    {
      name: "Shopify",
      logo: "/placeholder.svg?height=80&width=160",
      category: "E-commerce Partner",
      description: "Shopify Plus Partner for enterprise e-commerce solutions",
    },
    {
      name: "Salesforce",
      logo: "/placeholder.svg?height=80&width=160",
      category: "CRM Partner",
      description: "Salesforce Consulting Partner for customer relationship management",
    },
    {
      name: "HubSpot",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Marketing Partner",
      description: "HubSpot Solutions Partner for inbound marketing and sales",
    },
    {
      name: "Stripe",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Payment Partner",
      description: "Stripe Partner for secure payment processing solutions",
    },
    {
      name: "MongoDB",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Database Partner",
      description: "MongoDB Partner for modern database solutions",
    },
    {
      name: "Vercel",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Deployment Partner",
      description: "Vercel Partner for modern web application deployment",
    },
    {
      name: "OpenAI",
      logo: "/placeholder.svg?height=80&width=160",
      category: "AI Partner",
      description: "OpenAI Partner for artificial intelligence implementations",
    },
    {
      name: "Docker",
      logo: "/placeholder.svg?height=80&width=160",
      category: "DevOps Partner",
      description: "Docker Partner for containerization and deployment solutions",
    },
    {
      name: "GitHub",
      logo: "/placeholder.svg?height=80&width=160",
      category: "Development Partner",
      description: "GitHub Partner for version control and collaboration",
    },
  ]

  const featuredPartners = [
    {
      name: "TechCorp Solutions",
      logo: "/placeholder.svg?height=120&width=240",
      industry: "Enterprise Software",
      partnership: "Strategic Technology Partner",
      description:
        "Leading enterprise software company specializing in digital transformation solutions for Fortune 500 companies.",
      achievements: [
        "5+ years of successful collaboration",
        "50+ joint projects completed",
        "99.9% client satisfaction rate",
        "24/7 technical support coverage",
      ],
      testimonial:
        "TechSolutions has been instrumental in our digital transformation journey. Their expertise and dedication have helped us deliver exceptional results to our clients.",
      author: "Sarah Johnson, CTO at TechCorp Solutions",
      website: "www.techcorp.com",
      employees: "10,000+",
      founded: "2010",
    },
    {
      name: "InnovateLabs",
      logo: "/placeholder.svg?height=120&width=240",
      industry: "AI & Machine Learning",
      partnership: "Innovation Partner",
      description:
        "Cutting-edge AI research company developing next-generation machine learning solutions for various industries.",
      achievements: [
        "3+ years of R&D collaboration",
        "15+ AI projects delivered",
        "Multiple patent applications filed",
        "Industry-leading innovation awards",
      ],
      testimonial:
        "Our partnership with TechSolutions has accelerated our AI development capabilities. Together, we're pushing the boundaries of what's possible in machine learning.",
      author: "Dr. Michael Chen, Head of Research at InnovateLabs",
      website: "www.innovatelabs.ai",
      employees: "500+",
      founded: "2018",
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
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We collaborate with industry leaders to deliver exceptional solutions and drive innovation
          </p>
        </motion.div>

        {/* Featured Partners */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Featured Partnerships
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Strategic alliances that drive mutual success
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-blue-200 dark:group-hover:border-blue-500">
                  {/* Partner Header */}
                  <div className="flex items-center mb-6">
                    <motion.div whileHover={{ scale: 1.05 }} className="mr-6">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={240}
                        height={120}
                        className="h-16 w-auto dark:filter dark:brightness-0 dark:invert"
                      />
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                        {partner.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                          {partner.industry}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                          {partner.partnership}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{partner.employees}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Employees</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">{partner.founded}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Founded</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">A+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                    {partner.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                      Partnership Highlights:
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {partner.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 transition-all duration-500">
                    <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4 transition-colors duration-300">
                      "{partner.testimonial}"
                    </blockquote>
                    <cite className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                      - {partner.author}
                    </cite>
                  </div>

                  {/* Website Link */}
                  <div className="mt-6 text-center">
                    <a
                      href={`https://${partner.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-300"
                    >
                      Visit {partner.website} →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Partners Grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Technology Partners
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Trusted partnerships with leading technology providers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-500 text-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="h-12 w-auto mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300 dark:filter dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 transition-colors duration-300">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">
                    {partner.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">Become Our Partner</h3>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto transition-colors duration-300">
            Join our network of trusted partners and unlock new opportunities for growth and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 dark:text-blue-500 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Partner With Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
