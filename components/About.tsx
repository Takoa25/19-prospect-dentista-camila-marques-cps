import React from 'react';
import { TbDental } from "react-icons/tb";
import { ABOUT_CONTENT, IMAGES } from '../constants';

const About: React.FC = () => {
    return (
        <section className="w-full py-24 px-6 sm:px-10 bg-white dark:bg-[#150a0d] relative overflow-hidden" id="sobre">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="relative order-2 lg:order-1 reveal reveal-left">
                    <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-primary/5 rounded-2xl -z-10"></div>
                    <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-primary/5 rounded-2xl -z-10"></div>
                    <img
                        src={IMAGES.doctor}
                        alt="Dr. Camila Marques"
                        className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] sm:aspect-square md:aspect-auto md:h-[600px] lg:h-[550px] object-top transition-transform duration-500 hover:scale-[1.01]"
                    />
                    <div className="absolute bottom-4 right-4 md:bottom-8 md:-right-8 bg-white/90 dark:bg-[#2a171c]/90 backdrop-blur-sm shadow-xl p-4 md:p-6 rounded-xl border border-gray-100 dark:border-white/10 max-w-[200px] md:max-w-[240px]">
                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                            <span className="material-symbols-outlined text-primary text-xl md:text-2xl">verified</span>
                            <span className="text-base font-bold text-[#1b0e11] dark:text-white leading-tight">{ABOUT_CONTENT.doctorBadge}</span>
                        </div>
                        <p className="text-base text-gray-500 dark:text-gray-400 leading-normal">{ABOUT_CONTENT.doctorSubtext}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6 order-1 lg:order-2 relative reveal reveal-right">
                    {/* 
                        MARCA D'ÁGUA DE DENTE (Watermark)
                        Aparece apenas atrás do texto, centralizada nesta coluna.
                    */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden -z-10">
                        <TbDental
                            className="text-primary opacity-[0.1] transform rotate-12 scale-110"
                            size="500"
                            aria-hidden="true"
                        />
                    </div>

                    <span className="text-primary font-bold text-base tracking-widest uppercase relative z-10">{ABOUT_CONTENT.badge}</span>
                    <h2 className="text-[#1b0e11] dark:text-white text-3xl md:text-4xl font-black leading-tight relative z-10">
                        {ABOUT_CONTENT.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed relative z-10">
                        {ABOUT_CONTENT.text1}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed relative z-10">
                        {ABOUT_CONTENT.text2}
                    </p>
                    <ul className="flex flex-col gap-3 mt-4 relative z-10">
                        {ABOUT_CONTENT.features.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                <span className="text-[#1b0e11] dark:text-gray-200 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;