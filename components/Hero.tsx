import React from 'react';
import { IMAGES, HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
    return (
        <section className="w-full relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
            <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 1024px)" srcSet={IMAGES.heroDesktop} />
                <img
                    src={IMAGES.heroMobile}
                    alt="Modern dental office waiting area"
                    className="w-full h-full object-cover object-center"
                    fetchPriority="high"
                />
            </picture>
            {/* 
                AJUSTE DE INTENSIDADE DO FILTRO (Global):
                Altere 'bg-black/60' abaixo para 'bg-black/40', 'bg-black/80', etc. 
                O número após a barra (/) controla a opacidade (0-100).
            */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 w-full max-w-7xl px-6 sm:px-10 flex flex-col gap-6">
                <div className="max-w-[800px] flex flex-col gap-4 animate-fade-in-up">
                    {/* AJUSTE DO TAMANHO DO BADGE: Altere 'md:text-base' para mudar o texto e 'md:px-4 md:py-1.5' para o preenchimento */}
                    <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-primary/20 dark:bg-primary/20 text-white text-base font-bold rounded-full w-fit tracking-wider">
                        {HERO_CONTENT.badge}
                    </span>

                    {/* AJUSTE DO TAMANHO DO TÍTULO: Altere 'text-5xl' (mobile) ou 'md:text-7xl' (desktop) para o tamanho da fonte */}
                    <h1 className="text-white text-6xl md:text-7xl font-black leading-[1.05] tracking-[-0.033em]">
                        {HERO_CONTENT.title}
                    </h1>

                    {/* AJUSTE DO TAMANHO DA DESCRIÇÃO: Altere 'md:text-xl' para o tamanho da fonte no desktop */}
                    <p className="text-white/90 text-base md:text-xl font-medium leading-relaxed max-w-[550px]">
                        {HERO_CONTENT.description}
                    </p>

                    <div className="pt-4 flex flex-wrap gap-4">
                        {/* AJUSTE DO TAMANHO DOS BOTÕES: Altere 'md:h-14' (altura), 'md:px-10' (largura interna) e 'md:text-lg' (fonte) */}
                        <a
                            href="#contato"
                            className="h-12 md:h-14 px-8 md:px-10 bg-primary hover:bg-primary/90 text-white text-base md:text-lg font-bold rounded-lg shadow-lg shadow-primary/40 transition-all hover:-translate-y-0.5 flex items-center justify-center no-underline"
                        >
                            {HERO_CONTENT.ctaPrimary}
                        </a>
                        <a
                            href="#servicos"
                            className="h-12 md:h-14 px-8 md:px-10 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 text-[#1b0e11] dark:text-white hover:bg-gray-50 dark:hover:bg-white/20 text-base md:text-lg font-bold rounded-lg transition-all flex items-center justify-center no-underline"
                        >
                            {HERO_CONTENT.ctaSecondary}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;