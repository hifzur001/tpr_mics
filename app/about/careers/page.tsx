"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Shield, Coffee } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO policy",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Learning budget, conference attendance, and career development programs",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries, equity options, and performance bonuses",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Work with talented, passionate people in a collaborative environment",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Coffee,
      title: "Great Perks",
      description: "Free meals, snacks, gym membership, and team building activities",
      color: "from-orange-500 to-red-500",
    },
  ]

  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Join our core development team to build scalable web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Strong understanding of database design and optimization",
      ],
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Lead the development of machine learning models and AI solutions for our clients across various industries.",
      requirements: [
        "3+ years of ML/AI development experience",
        "Proficiency in Python, TensorFlow, and PyTorch",
        "Experience with MLOps and model deployment",
        "Strong mathematical and statistical background",
      ],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Los Angeles, CA / Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Create beautiful, intuitive user experiences for web and mobile applications that delight our clients' users.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, and design systems",
        "Strong portfolio demonstrating user-centered design",
        "Experience with user research and testing",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Austin, TX / Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Build and maintain scalable infrastructure and deployment pipelines for our applications and client projects.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Expertise in Docker, Kubernetes, and CI/CD",
        "Experience with cloud platforms and infrastructure as code",
        "Strong scripting and automation skills",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Chicago, IL / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive growth through SEO, content marketing, and digital advertising campaigns for our clients.",
      requirements: [
        "3+ years of digital marketing experience",
        "Expertise in SEO, SEM, and social media marketing",
        "Experience with analytics tools and data-driven optimization",
        "Strong content creation and copywriting skills",
      ],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead cross-functional teams to deliver exceptional results for our clients while ensuring projects stay on time and budget.",
      requirements: [
        "5+ years of project management experience",
        "PMP or Agile certification preferred",
        "Experience managing technical projects",
        "Excellent communication and leadership skills",
      ],
    },
  ]

  const culture = [
    {
      title: "Innovation First",
      description: "We encourage experimentation and embrace new technologies to stay ahead of the curve.",
      icon: "🚀",
    },
    {
      title: "Collaborative Spirit",
      description: "We believe the best solutions come from diverse perspectives working together.",
      icon: "🤝",
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training, conferences, and skill development.",
      icon: "📚",
    },
    {
      title: "Work-Life Balance",
      description: "We support flexible work arrangements and prioritize mental health and well-being.",
      icon: "⚖️",
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
              Join Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Build the future of technology with us. We're looking for passionate individuals who want to make a real
              impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, innovation, and making a real impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values and principles that make TechSolutions a great place to work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity and join our growing team
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <Shield className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 mt-4 lg:mt-0"
                    >
                      Apply Now
                    </motion.button>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{req}</span>
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

      {/* Application CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't see a position that fits? We're always interested in hearing from talented individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Send Your Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Learn More About Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
