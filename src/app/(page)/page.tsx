'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import navbarData from "@/data/navbar.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Home from '@/components/Home'

export default function Portfolio_Page() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const activityRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const sectionRefs = [homeRef, aboutRef, experienceRef, activityRef, contactRef];

    const [activeTab, setActiveTab] = useState(navbarData[0].id);

    const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const handleTabClick = (id: string, ref: React.MutableRefObject<HTMLDivElement | null>) => {
        setActiveTab(id);
        scrollToSection(ref);
    };

    useEffect(() => {
        scrollToSection(homeRef);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        sectionRefs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            sectionRefs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [sectionRefs]);

    return (
        <>
            <header className="fixed top-10 w-full z-50">
                <nav >
                    <ul className="relative mx-auto flex w-fit rounded-full bg-white p-2 shadow-xl">
                        {navbarData.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleTabClick(item.id,
                                    item.id === "home" ? homeRef :
                                        item.id === "about" ? aboutRef :
                                            item.id === "experience" ? experienceRef :
                                                item.id === "activity" ? activityRef :
                                                    contactRef
                                )}
                                className={`${activeTab === item.id ? "" : "hover:text-white/60"
                                    }relative z-10 block cursor-pointer px-3 py-1.5 uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base`}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                <button aria-current={activeTab === item.id ? "page" : undefined}>
                                    {item.label}
                                </button>
                                {activeTab === item.id && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <motion.section
                ref={homeRef} id="home"
                className="bg-gradient-to-r from-[#795757] to-[#664343]"
                initial="hidden"
                animate="visible"
            >
                <Home />
            </motion.section>

            <motion.section
                ref={aboutRef}
                id="about" className="bg-[#FFF8F3]"
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                whileInView="visible"
            >
                <div className="container mx-auto py-20 h-screen flex  flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>My Story</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>I'm a passionate developer with 5 years of experience in creating web applications. I love solving complex problems and learning new technologies.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className='bg-[#405D72] hover:bg-black'>React</Badge>
                                    <Badge className='bg-[#405D72] hover:bg-black'>Node.js</Badge>
                                    <Badge className='bg-[#405D72] hover:bg-black'>TypeScript</Badge>
                                    <Badge className='bg-[#405D72] hover:bg-black'>Python</Badge>
                                    <Badge className='bg-[#405D72] hover:bg-black'>AWS</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.section>

            <motion.section
                ref={experienceRef}
                id="experience"
                className="bg-[#FFF8F3]"
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                whileInView="visible"
            >
                <div className="container mx-auto py-20 h-screen justify-center flex flex-col">
                    <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Senior Developer at Tech Co.</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 mb-4">2020 - Present</p>
                                <p>Led a team of developers in creating scalable web applications using React and Node.js.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Full Stack Developer at Startup Inc.</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 mb-4">2018 - 2020</p>
                                <p>Developed and maintained multiple client projects using various technologies including React, Express, and MongoDB.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.section>

            <motion.section
                ref={activityRef}
                id="activity"
                className="bg-gray-100"
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                whileInView="visible"
            >
                <div className="container mx-auto py-20 h-screen justify-center flex flex-col">
                    <h2 className="text-4xl font-bold mb-10 text-center">Recent Activity</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Open Source Contribution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Contributed to React ecosystem by submitting bug fixes and improvements.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Tech Talk</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Gave a talk on "Scaling Node.js Applications" at local tech meetup.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Blog Post</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Wrote an article on "Best Practices for React Hooks" which got featured on dev.to</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.section>

            <motion.section
                ref={contactRef}
                id="contact"
                className="bg-gradient-to-r from-[#405D72] to-[#758694] h-screen justify-center flex flex-col"
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
            >
                <div className="container mx-auto py-20 ">
                    <h2 className="text-4xl font-bold mb-10 text-center text-white">Contact Me</h2>
                    <Card className="max-w-md mx-auto">
                        <CardContent className="pt-6">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </motion.section>
        </>
    )
}