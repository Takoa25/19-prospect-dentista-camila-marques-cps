import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES, SERVICES_SECTION, WHATSAPP_CONFIG } from '../constants';
import { Service } from '../types';

const Services: React.FC = () => {
    return (
        <section className="w-full bg-[#fcf8f9] dark:bg-[#1b0e11] py-24 px-6 sm:px-10" id="servicos">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 reveal reveal-up">
                    <span className="text-primary font-bold text-base tracking-widest uppercase">{SERVICES_SECTION.badge}</span>
                    <h2 className="text-[#1b0e11] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.02em]">
                        {SERVICES_SECTION.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {SERVICES_SECTION.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const navigate = useNavigate();

    // Estilos comuns para os cards com imagem de fundo
    // AJUSTE: 'aspect-square' no mobile torna o card um quadrado perfeito.
    // 'md:h-[280px] md:aspect-auto' mantém a altura original no desktop.
    const cardBaseStyles = "group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-soft focus:outline-none aspect-square md:h-[280px] md:aspect-auto";
    const overlayStyles = "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90";
    const contentStyles = "relative z-20 h-full p-8 flex flex-col justify-end text-white";

    if (service.isSeeMore) {
        return (
            <div className="flex flex-col gap-6 md:gap-6 md:h-[280px]">
                {/* 
                    BOTÃO: Ver mais serviços
                    AJUSTE DE ALTURA (Mobile): Altere 'h-28' abaixo para 'h-24', 'h-32' ou um valor fixo em px (ex: h-[100px]).
                */}
                <div
                    onClick={() => navigate('/servicos')}
                    className="h-28 md:h-auto md:flex-1 bg-primary rounded-[2rem] px-6 flex items-center justify-center text-center cursor-pointer transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-primary/20 group relative overflow-hidden reveal reveal-right"
                    role="button"
                    tabIndex={0}
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
                    <div className="relative z-10 flex items-center gap-3">
                        <h3 className="text-white text-lg font-bold">{service.title}</h3>
                        <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:ring-2 group-hover:ring-white transition-all duration-300">
                            <span className="material-symbols-outlined font-bold text-[18px]">arrow_forward</span>
                        </div>
                    </div>
                </div>

                {/* 
                    BOTÃO: Agendar agora
                    AJUSTE DE ALTURA (Mobile): Altere 'h-28' abaixo para 'h-24', 'h-32' ou um valor fixo em px (ex: h-[100px]).
                */}
                <a
                    href={WHATSAPP_CONFIG.getLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-28 md:h-auto md:flex-1 bg-white dark:bg-[#1b0e11] border border-primary/20 rounded-[2rem] px-6 flex items-center justify-center text-center cursor-pointer transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] shadow-soft group no-underline reveal reveal-right"
                    role="button"
                    tabIndex={0}
                >
                    <div className="flex items-center gap-3">
                        <h3 className="text-primary dark:text-white text-lg font-bold">{SERVICES_SECTION.ctaAgendar}</h3>
                        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

    // Lógica de span para o card destaque (apenas no desktop e tablet)
    const spanStyles = service.isFeatured
        ? "md:col-span-2 md:row-span-2 md:h-full"
        : "col-span-1";

    return (
        <div
            className={`${cardBaseStyles} ${spanStyles} reveal reveal-scale`}
            tabIndex={0}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Overlay */}
            <div className={overlayStyles}></div>

            {/* Content */}
            <div className={contentStyles}>
                <h3 className={`${service.isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-2`}>
                    {service.title}
                </h3>
                <p className={`${service.isFeatured ? 'text-lg md:text-xl' : 'text-base'} text-gray-200 leading-relaxed`}>
                    {service.description}
                </p>
            </div>
        </div>
    );
};

export default Services;