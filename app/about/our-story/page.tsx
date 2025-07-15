"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Award, Target, Lightbulb, Rocket } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function OurStoryPage() {
  const milestones = [
    {
      year: "2014",
      title: "The Beginning",
      description: "Founded with a vision to transform businesses through technology",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2016",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a game-changing solution",
      icon: Target,
      color: "from-blue-500 to-purple-500",
    },
    {
      year: "2018",
      title: "Team Expansion",
      description: "Grew to 25+ talented professionals across multiple disciplines",
      icon: Users,
      color: "from-green-500 to-teal-500",
    },
    {
      year: "2020",
      title: "AI Innovation",
      description: "Launched our AI R&D division and pioneered machine learning solutions",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Won multiple awards for excellence in web development and innovation",
      icon: Award,
      color: "from-red-500 to-orange-500",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Serving 500+ clients across 30+ countries with cutting-edge solutions",
      icon: Calendar,
      color: "from-indigo-500 to-blue-500",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client service.",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients as partners.",
      icon: "🤝",
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices at all times.",
      icon: "🛡️",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From a small startup to a leading IT services company, our journey has been driven by passion, innovation,
              and an unwavering commitment to transforming businesses through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses of all sizes with innovative technology solutions that drive growth, efficiency,
                and competitive advantage in the digital age.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that technology should be accessible, powerful, and transformative. Our mission is to bridge
                the gap between complex technical possibilities and real business outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the world's most trusted partner for digital transformation, recognized for our innovation,
                expertise, and commitment to client success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where every business, regardless of size or industry, can harness the full
                potential of technology to achieve extraordinary results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A decade of growth, innovation, and success stories
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < milestones.length - 1 && <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-300" />}

                {/* Year Badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8">
                  {milestone.year.slice(-2)}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-xl flex items-center justify-center mr-4`}
                    >
                      <milestone.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                      <p className="text-blue-600 font-semibold">{milestone.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="text-6xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">By the Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Our achievements speak for themselves</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years of Excellence" },
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "30+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
