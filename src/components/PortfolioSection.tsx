'use client'

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Plus } from 'lucide-react';
import { useJoinUs } from './JoinUsContext';

const PortfolioSection = () => {
    const { openForm } = useJoinUs();
    const startups = [
        { name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
        { name: 'Airbnb', logo: 'https://cdn.worldvectorlogo.com/logos/airbnb-1.svg' },
        { name: 'Instacart', logo: 'https://cdn.worldvectorlogo.com/logos/instacart-1.svg' },
        { name: 'Doordash', logo: 'https://cdn.worldvectorlogo.com/logos/doordash.svg' },
        { name: 'Coinbase', logo: 'https://cdn.worldvectorlogo.com/logos/coinbase.svg' },
        { name: 'Faire', logo: 'https://logowik.com/content/uploads/images/faire5150.jpg' },
        { name: 'Brex', logo: 'https://cdn.worldvectorlogo.com/logos/brex.svg' },
        { name: 'Deel', logo: 'https://cdn.worldvectorlogo.com/logos/deel-1.svg' },
        { name: 'Rippling', logo: 'https://cdn.worldvectorlogo.com/logos/rippling.svg' },
        { name: 'Gusto', logo: 'https://cdn.worldvectorlogo.com/logos/gusto-1.svg' },
        { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg' },
    ];

    const gridRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: gridRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-75, 75]);
    const y3 = useTransform(scrollYProgress, [0, 1], [-125, 125]);
    
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleYourStartupHere = () => {
        openForm('Founder');
    };

    return (
        <section id="portfolio" className="bg-gray-50 py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto text-center px-6">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Growing Ecosystem</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">We're proud to have supported a diverse range of startups. Here are just a few of the companies from our ecosystem.</p>
                </motion.div>

                <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
                    {/* Column 1 */}
                    <motion.div className="space-y-8" style={{ y: y1 }}>
                        {startups.slice(0, 4).map((startup, j) => {
                            const index = j;
                            return (
                                <motion.div 
                                    key={startup.name} 
                                    className="bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 h-32"
                                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: 'easeOut', delay: j * 0.1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)}
                                    animate={{ opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5 }}
                                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                >
                                    <img src={startup.logo} alt={startup.name} className="max-h-12 max-w-full" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                     {/* Column 2 */}
                    <motion.div className="space-y-8" style={{ y: y2 }}>
                        {startups.slice(4, 8).map((startup, j) => {
                            const index = 4 + j;
                            return (
                                <motion.div 
                                    key={startup.name} 
                                    className="bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 h-32"
                                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: 'easeOut', delay: j * 0.1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)}
                                    animate={{ opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5 }}
                                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                >
                                    <img src={startup.logo} alt={startup.name} className="max-h-12 max-w-full" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                     {/* Column 3 */}
                    <motion.div className="space-y-8" style={{ y: y3 }}>
                        {startups.slice(8, 11).map((startup, j) => {
                             const index = 8 + j;
                            return (
                                <motion.div 
                                    key={startup.name} 
                                    className="bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 h-32"
                                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: 'easeOut', delay: j * 0.1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)}
                                    animate={{ opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5 }}
                                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                >
                                    <img src={startup.logo} alt={startup.name} className="max-h-12 max-w-full" />
                                </motion.div>
                            );
                        })}
                         <motion.div 
                            className="bg-orange-50 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 h-32 text-orange-500 border-2 border-dashed border-orange-200 hover:border-orange-500 hover:bg-orange-100 transition-colors cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                            viewport={{ once: true, amount: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={handleYourStartupHere}
                        >
                            <Plus className="h-12 w-12 mb-2" />
                            <span className="font-bold">Your Startup Here?</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;