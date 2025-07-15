'use client';

import { useState } from 'react';
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Link as LinkIcon,
    Figma,
    X,
    Sparkles,
    Users,
    Award,
    Target,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Shwetank from '../../../public/image/shwetank.jpg';
import Avnish from '../../../public/image/avnish.jpg';
import Shaqib from '../../../public/image/shaqib.jpg';
import Hifzur from '../../../public/image/hifzur.jpg';
import Ashok from '../../../public/image/ashok.jpg';
import Avinash from '../../../public/image/avinash.jpg';
import Gaurav from '../../../public/image/gaurav.jpg';

export default function OurTeamPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        location: '',
        department: '',
        coverLetter: '',
        cv: null as File | null,
        agree: false,
    });

    const departmentOptions = [
        'Human Resources',
        'Frontend Development',
        'Backend Development',
        'UI/UX Design',
        'Marketing',
        'Project Management',
    ];

    // Mock team images - replace with actual image paths

    const leadership = [
        {
            name: 'Shwetank Dhar Dwiedi',
            role: 'CEO & Founder (Backend Specialist)',
            image: Shwetank,
            bio: 'Shwetank is a backend expert with over 15 years of experience, leading strategic growth and building scalable platforms that empower businesses through high-performance, secure, and reliable digital solutions worldwide.',
            expertise: [
                'Next JS',
                'Strapi',
                'React JS',
                'PHP',
                'CodeIgniter',
                'Laravel',
            ],
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'shwetank@techsolutions.com',
            },
        },
        {
            name: 'Avnish Kumar',
            role: 'Full Stack Developer',
            image: Avnish,
            bio: 'Avnish is a skilled full-stack developer who creates responsive web and mobile applications using modern frontend and backend technologies, focusing on performance, user experience, and scalable architecture design.',
            expertise: [
                'Next.js',
                'Strapi',
                'React JS',
                'Node.js',
                'React Native',
            ],
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
                email: 'avnish@techsolutions.com',
            },
        },
        {
            name: 'Shaqib Raja',
            role: 'MERN Stack Developer',
            image: Shaqib,
            bio: 'Shaqib combines UI/UX design with advanced development skills, delivering creative and functional user experiences through a deep understanding of both front-end aesthetics and backend technology integration and systems.',
            expertise: [
                'Laravel',
                'PHP',
                'Strapi',
                'React',
                'React Native',
                'Next.js',
                'Angular',
                'MySQL',
                'MongoDB',
            ],
            social: {
                linkedin: '#',
                twitter: '#',
                email: 'shaqib@techsolutions.com',
            },
        },
    ];

    const departments = [
        {
            name: 'Development Team',
            description: 'Expert developers building cutting-edge solutions',
            icon: <Target className="w-8 h-8" />,
            color: 'from-blue-500 to-cyan-500',
            members: [
                {
                    name: 'Hifzur Rahman',
                    role: 'Frontend Developer',
                    image: Hifzur,
                    bio: 'Crafting pixel-perfect web interfaces by blending creativity with code. With a strong grasp of frontend technologies and UI tools, transforms ideas into responsive, engaging digital experiences.',
                    expertise: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'jQuery',
                        'Bootstrap',
                        'Tailwind',
                        'Figma',
                        'Photoshop',
                        'Canva',
                        'React JS',
                        'Next JS',
                        'PHP',
                        'MySQL',
                    ],
                    social: {
                        linkedin:
                            'https://www.linkedin.com/in/hifzur-rahman-05b149169/',
                        github: 'https://github.com/hifzur001',
                        figma: 'https://www.figma.com/@hifzurrahman',
                        email: 'hrrahman47@outlook.com',
                        portfolio:
                            'https://portfolio-zeta-hazel-12.vercel.app/',
                    },
                },
                {
                    name: 'Ashok Tiwari',
                    role: 'SEO Specialist | UI/UX',
                    image: Ashok,
                    bio: 'Optimizes websites for search engines while enhancing user experience through modern UI/UX principles. Blends analytical SEO strategies with intuitive design to drive engagement and performance.',
                    expertise: [
                        'SEO',
                        'Google Analytics',
                        'UI/UX Design',
                        'Figma',
                        'HTML',
                        'CSS',
                        'On-Page Optimization',
                        'Content Strategy',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        email: 'ashok@techsolutions.com',
                    },
                },
                {
                    name: 'Avnish Kumar',
                    role: 'Full Stack Developer',
                    image: Avnish,
                    bio: 'Builds responsive web and mobile applications using modern frontend and backend technologies. Focuses on performance, user experience, and scalable architecture design.',
                    expertise: [
                        'Next.js',
                        'React JS',
                        'React Native',
                        'Strapi',
                        'MongoDB',
                        'MySQL',
                        'JavaScript',
                        'TypeScript',
                        'Tailwind CSS',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        github: '#',
                        email: 'avnish@techsolutions.com',
                    },
                },
                {
                    name: 'Shaqib Raja',
                    role: 'MERN Stack Developer',
                    image: Shaqib,
                    bio: 'Delivers creative and functional user experiences through strong UI/UX design and full-stack development. Specializes in front-end aesthetics and backend systems integration.',
                    expertise: [
                        'Laravel',
                        'PHP',
                        'Strapi',
                        'React',
                        'React Native',
                        'Next.js',
                        'Angular',
                        'MySQL',
                        'MongoDB',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        email: 'shaqib@techsolutions.com',
                    },
                },
            ],
        },
        {
            name: 'Human Resources & Finance',
            description:
                'Supporting our team with strategic HR and financial management',
            icon: <Users className="w-8 h-8" />,
            color: 'from-purple-500 to-pink-500',
            members: [
                {
                    name: 'Gaurav Rai',
                    role: 'Human Resources & Recruitment',
                    image: Gaurav,
                    bio: 'A strategic HR professional with expertise in talent acquisition, employee engagement, and building efficient onboarding frameworks.',
                    expertise: [
                        'Talent Acquisition',
                        'Employee Engagement',
                        'HR Strategy',
                        'Onboarding Processes',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        email: 'gaurav@techsolutions.com',
                    },
                },
                {
                    name: 'Avinash Kumar',
                    role: 'Finance & Accounting',
                    image: Avinash,
                    bio: 'A detail-oriented finance specialist skilled in budgeting, taxation, financial planning, reporting, and managing corporate accounts effectively.',
                    expertise: [
                        'Financial Planning',
                        'Budgeting',
                        'Taxation',
                        'Corporate Accounting',
                    ],
                    social: {
                        linkedin: '#',
                        twitter: '#',
                        email: 'avinash@techsolutions.com',
                    },
                },
            ],
        },
    ];

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;

        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: target.checked,
            }));
        } else if (type === 'file') {
            const files = target.files;
            setFormData(prev => ({
                ...prev,
                [name]: files ? files[0] : null,
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, mobile, location, department, cv, agree } =
            formData;

        // Improved validation
        if (!name.trim()) {
            alert('Please enter your name.');
            return;
        }
        if (!email.trim()) {
            alert('Please enter your email.');
            return;
        }
        if (!mobile.trim()) {
            alert('Please enter your mobile number.');
            return;
        }
        if (!location.trim()) {
            alert('Please enter your location.');
            return;
        }
        if (!department) {
            alert('Please select a department.');
            return;
        }
        if (!cv) {
            alert('Please upload your CV/Resume.');
            return;
        }
        if (!agree) {
            alert('Please agree to the terms and privacy policy.');
            return;
        }

        // Success message
        alert('Application submitted successfully!');
        setIsModalOpen(false);
        setFormData({
            name: '',
            email: '',
            mobile: '',
            location: '',
            department: '',
            coverLetter: '',
            cv: null,
            agree: false,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <Header />

            {/* Hero Section with Floating Elements */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-8">
                            <Sparkles className="w-5 h-5 text-blue-600" />
                            <span className="text-blue-800 font-semibold">
                                Meet Our Amazing Team
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-8">
                            Exceptional
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Talent
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            Meet the passionate professionals who turn
                            innovative ideas into
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                                {' '}
                                exceptional digital experiences
                            </span>
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                    15+
                                </div>
                                <div className="text-gray-600 font-medium">
                                    Years Experience
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                    50+
                                </div>
                                <div className="text-gray-600 font-medium">
                                    Projects Delivered
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                    100%
                                </div>
                                <div className="text-gray-600 font-medium">
                                    Client Satisfaction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full mb-6">
                            <Award className="w-5 h-5 text-amber-600" />
                            <span className="text-amber-800 font-semibold">
                                Leadership Excellence
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Visionary
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                {' '}
                                Leaders
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experienced leaders guiding our vision with
                            innovation and strategic excellence
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {leadership.map((leader, index) => (
                            <div key={index} className="group relative">
                                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50 transform group-hover:-translate-y-2">
                                    {/* Gradient Border Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

                                    <div className="relative mb-8 group-hover:scale-105 transition-transform duration-500">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                            <Image
                                                src={leader.image}
                                                alt={leader.name}
                                                width={400}
                                                height={400}
                                                className="w-56 h-56 rounded-2xl mx-auto object-cover relative z-10 ring-4 ring-white group-hover:ring-blue-200 transition-all duration-500"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-900 transition-colors duration-300">
                                        {leader.name}
                                    </h3>
                                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-6 text-center">
                                        {leader.role}
                                    </p>
                                    <p className="text-gray-600 text-center mb-8 leading-relaxed">
                                        {leader.bio}
                                    </p>

                                    {/* Expertise */}
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-gray-900 mb-4 text-center">
                                            Expertise
                                        </h4>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {leader.expertise.map(
                                                (skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 cursor-default"
                                                    >
                                                        {skill}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex justify-center space-x-4">
                                        {leader.social.linkedin && (
                                            <a
                                                href={leader.social.linkedin}
                                                className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-blue-600 hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {leader.social.twitter && (
                                            <a
                                                href={leader.social.twitter}
                                                className="w-12 h-12 bg-gradient-to-r from-sky-100 to-sky-200 rounded-full flex items-center justify-center text-sky-600 hover:from-sky-500 hover:to-sky-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                            >
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        {leader.social.github && (
                                            <a
                                                href={leader.social.github}
                                                className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:from-gray-700 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        <a
                                            href={`mailto:${leader.social.email}`}
                                            className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center text-green-600 hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Department Teams */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                {' '}
                                Departments
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Specialized teams working in perfect harmony to
                            deliver extraordinary results
                        </p>
                    </div>

                    <div className="space-y-24">
                        {departments.map((department, deptIndex) => (
                            <div key={deptIndex}>
                                <div className="text-center mb-16">
                                    <div
                                        className={`inline-flex items-center gap-3 bg-gradient-to-r ${department.color} p-4 rounded-2xl mb-6 text-white shadow-lg`}
                                    >
                                        {department.icon}
                                        <h3 className="text-2xl font-bold">
                                            {department.name}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                        {department.description}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {department.members.map(
                                        (member, memberIndex) => (
                                            <div
                                                key={memberIndex}
                                                className="group relative"
                                            >
                                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent transform group-hover:-translate-y-2 relative overflow-hidden">
                                                    {/* Animated Background */}
                                                    <div
                                                        className={`absolute inset-0 bg-gradient-to-br ${department.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                                    ></div>

                                                    <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                                                        <div className="relative">
                                                            <div
                                                                className={`absolute inset-0 bg-gradient-to-r ${department.color} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                                                            ></div>
                                                            <Image
                                                                src={
                                                                    member.image
                                                                }
                                                                alt={
                                                                    member.name
                                                                }
                                                                width={300}
                                                                height={300}
                                                                className="w-28 h-28 rounded-full mx-auto object-cover relative z-10 ring-4 ring-white group-hover:ring-blue-200 transition-all duration-500"
                                                            />
                                                        </div>
                                                    </div>

                                                    <h4 className="text-lg font-bold text-gray-900 mb-1 text-center group-hover:text-blue-900 transition-colors duration-300">
                                                        {member.name}
                                                    </h4>
                                                    <p
                                                        className={`text-transparent bg-clip-text bg-gradient-to-r ${department.color} font-semibold mb-3 text-center text-sm`}
                                                    >
                                                        {member.role}
                                                    </p>

                                                    {member.bio && (
                                                        <p className="text-gray-600 text-center text-sm mb-4 leading-relaxed">
                                                            {member.bio}
                                                        </p>
                                                    )}

                                                    {/* Expertise */}
                                                    {member.expertise && (
                                                        <div className="flex flex-wrap gap-1 justify-center mb-6">
                                                            {member.expertise
                                                                .slice(0, 6)
                                                                .map(
                                                                    (
                                                                        skill,
                                                                        skillIndex
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                skillIndex
                                                                            }
                                                                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors duration-300 cursor-default"
                                                                        >
                                                                            {
                                                                                skill
                                                                            }
                                                                        </span>
                                                                    )
                                                                )}
                                                            {member.expertise
                                                                .length > 6 && (
                                                                <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs font-medium">
                                                                    +
                                                                    {member
                                                                        .expertise
                                                                        .length -
                                                                        6}{' '}
                                                                    more
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* Social Icons */}
                                                    {member.social && (
                                                        <div className="flex justify-center space-x-3">
                                                            {member.social
                                                                .linkedin && (
                                                                <a
                                                                    href={
                                                                        member
                                                                            .social
                                                                            .linkedin
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-10 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-blue-600 hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <Linkedin className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                            {member.social
                                                                .github && (
                                                                <a
                                                                    href={
                                                                        member
                                                                            .social
                                                                            .github
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:from-gray-700 hover:to-gray-800 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <Github className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                            {member.social
                                                                .email && (
                                                                <a
                                                                    href={`mailto:${member.social.email}`}
                                                                    className="w-10 h-10 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center text-green-600 hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <Mail className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                            {member.social
                                                                .figma && (
                                                                <a
                                                                    href={
                                                                        member
                                                                            .social
                                                                            .figma
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-10 h-10 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center text-pink-600 hover:from-pink-500 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <Figma className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                            {member.social
                                                                .portfolio && (
                                                                <a
                                                                    href={
                                                                        member
                                                                            .social
                                                                            .portfolio
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="w-10 h-10 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center text-purple-600 hover:from-purple-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                                                                >
                                                                    <LinkIcon className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Our Team CTA */}
            <section className="py-24 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>

                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                            <Sparkles className="w-5 h-5 text-white" />
                            <span className="text-white font-semibold">
                                Join Our Journey
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                            Ready to Make an
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                                Impact?
                            </span>
                        </h2>

                        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            We're always looking for passionate individuals who
                            share our vision for innovation and excellence. Join
                            our team and help shape the future of technology.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Sparkles className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                            <span className="relative z-10">
                                Explore Opportunities
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Animated Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 overflow-y-auto">
                    <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl mt-10 mb-10">
                        {/* Modal Header */}
                        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white rounded-t-3xl">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-90"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">
                                        Join Our Team
                                    </h3>
                                    <p className="text-blue-100">
                                        Start your journey with us
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 max-h-[80vh] overflow-y-auto">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Mobile Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            placeholder="+1 (555) 123-4567"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">
                                            Location *
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            placeholder="City, Country"
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">
                                        Department *
                                    </label>
                                    <select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:outline-none transition-colors"
                                        required
                                    >
                                        <option value="">
                                            Select your preferred department
                                        </option>
                                        {departmentOptions.map(dept => (
                                            <option key={dept} value={dept}>
                                                {dept}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">
                                        Resume/CV *
                                    </label>
                                    <input
                                        type="file"
                                        name="cv"
                                        onChange={handleInputChange}
                                        accept=".pdf,.doc,.docx"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors file:bg-blue-50 file:text-blue-700 file:border-0 file:px-4 file:py-2 file:rounded-lg file:mr-4"
                                        required
                                    />
                                    <p className="text-xs text-gray-500">
                                        Please upload your CV in PDF, DOC, or
                                        DOCX format
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        name="agree"
                                        checked={formData.agree}
                                        onChange={handleInputChange}
                                        className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        required
                                    />
                                    <label className="text-sm text-gray-600 leading-relaxed">
                                        I agree to the{' '}
                                        <span className="text-blue-600 font-semibold text-decoration-none cursor-pointer hover:text-blue-800">
                                            Terms and Conditions
                                        </span>{' '}
                                        and{' '}
                                        <span className="text-blue-600 font-semibold text-decoration-none cursor-pointer hover:text-blue-800">
                                            Privacy Policy
                                        </span>
                                        .
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        Submit Application
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
