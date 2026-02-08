import React, { useEffect, useRef, useState } from 'react';
import { TESTIMONIALS, TESTIMONIALS_CONTENT, GOOGLE_MAPS } from '../constants';

const GoogleLogo = () => (
    <span className="inline-flex font-bold tracking-tight align-baseline">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
    </span>
);

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const getVisibleItems = () => {
        if (typeof window === 'undefined') return 1;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const maxIndex = Math.max(0, TESTIMONIALS.length - getVisibleItems());

    const nextSlide = () => {
        setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [maxIndex]);

    useEffect(() => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const itemWidth = container.querySelector('div')?.offsetWidth || 0;
            const gap = 24;
            container.scrollTo({
                left: activeIndex * (itemWidth + gap),
                behavior: 'smooth'
            });
        }
    }, [activeIndex]);

    return (
        <section className="w-full py-24 bg-[#f8f6f6] dark:bg-[#1b0e11] overflow-hidden" id="depoimentos">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                {/* Header da Seção */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal reveal-up">
                    <div className="flex flex-col gap-4">
                        <span className="text-primary font-bold text-base tracking-widest uppercase">{TESTIMONIALS_CONTENT.badge}</span>
                        <h2 className="text-[#1b0e11] dark:text-white text-3xl md:text-4xl font-black leading-tight">
                            <GoogleLogo /> {TESTIMONIALS_CONTENT.title}
                        </h2>
                    </div>

                    <a
                        href={GOOGLE_MAPS.reviewsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group px-4 py-2"
                    >
                        {TESTIMONIALS_CONTENT.ctaVerMais}
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>

                <div className="relative reveal reveal-scale">
                    {/* Carousel Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-hidden scrollbar-hide gap-6 pb-4"
                    >
                        {TESTIMONIALS.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                            >
                                <div className="h-full bg-white dark:bg-[#2d1b20] p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-white/5 flex flex-col gap-6 relative overflow-hidden min-h-[320px]">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`material-symbols-outlined text-[18px] ${i < testimonial.rating ? 'text-[#FBBC05] [font-variation-settings:"FILL"_1]' : 'text-gray-300'}`}>
                                                star
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed flex-1">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-50 dark:border-white/5">
                                        <img
                                            src={testimonial.avatarUrl}
                                            alt={testimonial.name}
                                            className="size-12 rounded-full object-cover ring-2 ring-primary/10"
                                        />
                                        <div>
                                            <h4 className="text-[#1b0e11] dark:text-white font-bold">{testimonial.name}</h4>
                                            <p className="text-base text-gray-500 dark:text-gray-400">Avaliação via Google</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer do Carrossel (Controles) */}
                    <div className="flex items-center justify-between mt-12">
                        {/* Botões de Navegação (Canto Inferior Esquerdo) */}
                        <div className="flex gap-3">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full border border-primary/20 bg-white dark:bg-[#2d1b20] text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-sm cursor-pointer"
                                aria-label="Anterior"
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full border border-primary/20 bg-white dark:bg-[#2d1b20] text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-sm cursor-pointer"
                                aria-label="Próximo"
                            >
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>

                        {/* Botão Ver mais (Mobile apenas, canto inferior direito) */}
                        <a
                            href={GOOGLE_MAPS.reviewsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex md:hidden items-center gap-2 text-primary font-bold hover:gap-4 transition-all group px-4 py-2"
                        >
                            {TESTIMONIALS_CONTENT.ctaVerMais}
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;