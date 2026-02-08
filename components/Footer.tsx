import React from 'react';
import { FOOTER_CONTENT, NAVBAR_CONTENT, IMAGES } from '../constants';
import { FaHeart } from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-[#0f0709] border-t border-gray-100 dark:border-white/5 py-12 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
                <div className="flex flex-col items-start gap-6 max-w-lg">
                    <div className="flex flex-row items-center gap-6 text-left">
                        <div className="relative">
                            {/* AJUSTE O TAMANHO DO LOGO DO RODAPÉ AQUI: use h-[100px], h-20 etc */}
                            <img
                                src={IMAGES.logo}
                                alt={NAVBAR_CONTENT.logoText}
                                className="h-[100px] w-auto object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                                    if (fallback) fallback.classList.remove('hidden');
                                }}
                            />
                            <div className="logo-fallback size-12 text-primary hidden">
                                <span className="material-symbols-outlined text-4xl">dentistry</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#1b0e11] dark:text-white text-2xl lg:text-3xl font-bold font-handwritten">{NAVBAR_CONTENT.logoText}</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-sm">
                                {FOOTER_CONTENT.description}
                            </p>
                        </div>
                    </div>
                    {/* Ícones centrais apenas no mobile (flex md:hidden) */}
                    <div className="flex md:hidden justify-center gap-4 w-full">
                        <SocialButton iconPath="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" href={FOOTER_CONTENT.socialLinks.instagram} />
                        <SocialButton iconPath="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" href={FOOTER_CONTENT.socialLinks.facebook} />
                    </div>
                </div>

                {/* Ícones maiores no desktop (md:flex), um ao lado do outro na direita */}
                <div className="hidden md:flex gap-8 self-center">
                    <SocialButton
                        sizeClass="w-18 h-18"
                        iconClass="w-10 h-10"
                        iconPath="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" href={FOOTER_CONTENT.socialLinks.instagram} />
                    <SocialButton
                        sizeClass="w-18 h-18"
                        iconClass="w-10 h-10"
                        iconPath="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" href={FOOTER_CONTENT.socialLinks.facebook} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">

                {/* Lado Esquerdo: Copyright e CRO */}
                <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                    <p>© {new Date().getFullYear()} Clínica Camila Marques. {FOOTER_CONTENT.copyright}</p>
                    <p>{FOOTER_CONTENT.croStatus}</p>
                </div>

                {/* Lado Direito: Desenvolvedor e Links Legais */}
                <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
                    {/* Desenvolvedor */}
                    <div className="flex items-center justify-center md:justify-end gap-1.5 font-medium">
                        <span>Desenvolvido com</span>
                        <FaHeart className="text-primary fill-primary" size={12} />
                        <span>&</span>
                        <GiCoffeeCup className="text-amber-600" size={14} />
                        <span>pela</span>
                        <a
                            href={FOOTER_CONTENT.developerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary font-bold transition-colors"
                        >
                            {FOOTER_CONTENT.developerName}
                        </a>
                    </div>

                    {/* Links Legais */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialButton: React.FC<{ iconPath: string; href: string; sizeClass?: string; iconClass?: string }> = ({ iconPath, href, sizeClass = "w-10 h-10", iconClass = "w-5 h-5" }) => (
    <a href={href} className={`${sizeClass} rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-white hover:bg-primary hover:text-white transition-colors`}>
        <svg className={iconClass + " fill-current"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d={iconPath}></path>
        </svg>
    </a>
);

export default Footer;