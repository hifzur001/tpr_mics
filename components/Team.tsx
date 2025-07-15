'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from './ui/Card';

export default function Team() {
    const teamMembers = [
        {
            name: 'Shwetank Dhar Dwiedi',
            role: 'CEO & Founder',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Visionary leader with 15+ years in tech innovation',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'Avnish Kumar',
            role: 'CTO',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Full-stack architect specializing in scalable solutions',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'Emily Rodriguez',
            role: 'Lead Designer',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Creative director crafting beautiful user experiences',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'David Kim',
            role: 'AI Research Lead',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Machine learning expert driving innovation',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'Lisa Thompson',
            role: 'Project Manager',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Agile expert ensuring seamless project delivery',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            name: 'Alex Martinez',
            role: 'DevOps Engineer',
            image: '/placeholder.svg?height=300&width=300',
            bio: 'Infrastructure specialist optimizing performance',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
    ];

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
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
                        Talented professionals dedicated to bringing your vision
                        to life with expertise and passion
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
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
                                        whileHover={{ scale: 1.05 }}
                                        className="relative mb-6"
                                    >
                                        <Image
                                            src={
                                                member.image ||
                                                '/placeholder.svg'
                                            }
                                            alt={member.name}
                                            width={300}
                                            height={300}
                                            className="w-32 h-32 rounded-full mx-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/30 dark:to-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center transition-colors duration-300">
                                        {member.name}
                                    </h3>

                                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-center transition-colors duration-300">
                                        {member.role}
                                    </p>

                                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed transition-colors duration-300">
                                        {member.bio}
                                    </p>

                                    <div className="flex justify-center space-x-4">
                                        <motion.a
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 5,
                                            }}
                                            href={member.social.linkedin}
                                            className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: -5,
                                            }}
                                            href={member.social.twitter}
                                            className="w-10 h-10 bg-sky-100 dark:bg-sky-900/50 rounded-full flex items-center justify-center text-sky-600 dark:text-sky-400 hover:bg-sky-200 dark:hover:bg-sky-800/50 transition-colors duration-300"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 5,
                                            }}
                                            href={member.social.github}
                                            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Team Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
                >
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '50+', label: 'Team Members' },
                            { number: '15+', label: 'Years Experience' },
                            { number: '25+', label: 'Certifications' },
                            { number: '100%', label: 'Dedication' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <motion.div
                                    className="text-4xl md:text-5xl font-bold mb-2"
                                    animate={{
                                        textShadow: [
                                            '0 0 0px rgba(255,255,255,0)',
                                            '0 0 10px rgba(255,255,255,0.5)',
                                            '0 0 0px rgba(255,255,255,0)',
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                    }}
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-blue-100 dark:text-blue-200">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
