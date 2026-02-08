import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { NAVBAR_CONTENT, COLORS, WHATSAPP_CONFIG, IMAGES } from '../constants';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Bloqueia o scroll do corpo quando o menu está aberto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const handleNavigation = (path: string, hash?: string) => {
        setIsMenuOpen(false);
        const currentPath = window.location.pathname;

        if (path === '/' && currentPath === '/') {
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            navigate(path);
            if (hash) {
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        }
    };

    return (
        /* 
           AJUSTE DE INTENSIDADE DO LIQUID GLASS (Navbar):
           - Para a transparência: Altere 'bg-white/40' ou 'dark:bg-black/40' (o número /40 controla a opacidade).
           - Para o desfoque (blur): Altere 'backdrop-blur-xl' para 'backdrop-blur-md' (menos) ou 'backdrop-blur-2xl' (mais).
        */
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-white/20 dark:bg-black/40 dark:border-white/10 transition-all duration-300 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto py-3 flex items-center justify-between whitespace-nowrap">
                <div
                    className="flex items-center gap-3 text-primary cursor-pointer group"
                    onClick={() => handleNavigation('/')}
                >
                    <div className="relative flex items-center justify-center">
                        {/* AJUSTE O TAMANHO DO LOGO DA NAVBAR AQUI: mude 'h-10' para a altura desejada */}
                        <img
                            src={IMAGES.logo}
                            alt={NAVBAR_CONTENT.logoText}
                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                                // Caso a imagem falhe (ex: não exista em public), removemos a imagem e mostramos o ícone
                                e.currentTarget.style.display = 'none';
                                const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                                if (fallback) fallback.classList.remove('hidden');
                            }}
                        />
                        <div className="logo-fallback size-8 text-primary hidden">
                            <span className="material-symbols-outlined text-3xl">dentistry</span>
                        </div>
                    </div>
                    <h2 className="text-[#1b0e11] dark:text-white text-2xl lg:text-3xl font-bold font-handwritten leading-tight tracking-[-0.015em]">{NAVBAR_CONTENT.logoText}</h2>
                </div>

                <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                    <div className="flex items-center gap-9">
                        {NAVBAR_CONTENT.links.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavigation('/', link.href === 'hero' ? '' : link.href)}
                                className="text-[#1b0e11] dark:text-gray-200 text-base font-semibold leading-normal hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                    <a
                        href={WHATSAPP_CONFIG.getLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30"
                    >
                        <span className="truncate">{NAVBAR_CONTENT.ctaText}</span>
                    </a>
                </div>

                <button
                    className="lg:hidden text-[#1b0e11] dark:text-white bg-transparent border-none p-0 flex items-center justify-center cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-outlined select-none">menu</span>
                </button>
            </div>

            {/* Mobile Menu - Sidebar Drawer overlay (Using Portal to escape header context) */}
            {ReactDOM.createPortal(
                <div
                    className={`lg:hidden fixed inset-0 z-[9999] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    aria-hidden={!isMenuOpen}
                >
                    {/* Backdrop - Cobre TUDO e fecha ao clicar */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Painel do Menu (Gaveta) */}
                    <div
                        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-[#1b0e11] shadow-2xl transition-transform duration-300 ease-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                            } p-8 flex flex-col gap-8 overflow-y-auto z-[10000]`}
                    >
                        {/* Cabeçalho do Menu Mobile */}
                        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center">
                                    <img
                                        src={IMAGES.logo}
                                        alt={NAVBAR_CONTENT.logoText}
                                        className="h-8 w-auto object-contain"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback-mobile');
                                            if (fallback) fallback.classList.remove('hidden');
                                        }}
                                    />
                                    <div className="logo-fallback-mobile size-7 text-primary hidden">
                                        <span className="material-symbols-outlined text-2xl">dentistry</span>
                                    </div>
                                </div>
                                <span className="text-lg font-bold font-handwritten text-[#1b0e11] dark:text-white leading-tight">
                                    {NAVBAR_CONTENT.logoText}
                                </span>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                            >
                                <span className="material-symbols-outlined text-3xl text-primary">close</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 mt-4">
                            {NAVBAR_CONTENT.links.map((link, index) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavigation('/', link.href === 'hero' ? '' : link.href)}
                                    className={`text-xl font-bold text-[#1b0e11] dark:text-white hover:text-primary text-left bg-transparent border-none transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${isMenuOpen ? index * 100 + 100 : 0}ms` }}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        <a
                            href={WHATSAPP_CONFIG.getLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-auto w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all duration-500 delay-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="material-symbols-outlined text-xl">schedule</span>
                            {NAVBAR_CONTENT.ctaText}
                        </a>
                    </div>
                </div>,
                document.body
            )}
        </header>
    );
};

export default Header;