import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { SERVICES_PAGE_CONTENT, WHATSAPP_CONFIG, IMAGES } from '../constants';

const ServicesPage: React.FC = () => {
    return (
        <div className="flex min-h-screen w-full flex-col relative">
            <Header />

            <section className="relative flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#FEF2F5] to-background-light py-16 text-center dark:from-[#2d1b20] dark:to-background-dark lg:py-32 pt-32">
                <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
                    <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
                    <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl"></div>
                </div>
                <div className="relative z-10 mx-auto max-w-4xl px-6 animate-fade-in-up">
                    <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-base font-bold tracking-wider text-primary">{SERVICES_PAGE_CONTENT.hero.badge}</span>
                    <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-text-main dark:text-white md:text-5xl lg:text-6xl">
                        {SERVICES_PAGE_CONTENT.hero.title}
                    </h1>
                    <p className="mx-auto max-w-2xl text-base text-text-secondary dark:text-gray-300 md:text-xl md:leading-relaxed">
                        {SERVICES_PAGE_CONTENT.hero.description}
                    </p>
                </div>
            </section>

            <main className="flex-1 bg-background-light px-6 py-8 dark:bg-background-dark sm:px-10 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {/* Implantes */}
                        <div className="bento-card group relative col-span-1 h-auto aspect-square lg:h-auto lg:aspect-square overflow-hidden rounded-2xl bg-surface-light shadow-card dark:bg-surface-dark md:col-span-2 lg:col-span-2 lg:row-span-2 reveal reveal-scale" tabIndex={0}>
                            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img alt={SERVICES_PAGE_CONTENT.items.implantes.title} loading="lazy" className="bento-image h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src={IMAGES.implant} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                            </div>
                            <div className="bento-content relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">{SERVICES_PAGE_CONTENT.items.implantes.title}</h3>
                                <p className="text-base text-gray-200">
                                    {SERVICES_PAGE_CONTENT.items.implantes.description}
                                </p>
                            </div>
                        </div>

                        {/* Ortodontia */}
                        <div className="bento-card group relative col-span-1 h-auto aspect-square lg:h-auto lg:aspect-square overflow-hidden rounded-2xl bg-surface-light shadow-card dark:bg-surface-dark lg:col-span-1 lg:row-span-1 reveal reveal-scale" tabIndex={0}>
                            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img alt={SERVICES_PAGE_CONTENT.items.ortodontia.title} loading="lazy" className="bento-image h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src={IMAGES.ortho} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            </div>
                            <div className="bento-content relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">{SERVICES_PAGE_CONTENT.items.ortodontia.title}</h3>
                                <p className="text-base text-gray-200">{SERVICES_PAGE_CONTENT.items.ortodontia.description}</p>
                            </div>
                        </div>

                        {/* Lentes */}
                        <div className="bento-card group relative col-span-1 h-auto aspect-square lg:h-auto lg:aspect-square overflow-hidden rounded-2xl bg-surface-light shadow-card dark:bg-surface-dark lg:col-span-1 lg:row-span-1 reveal reveal-scale" tabIndex={0}>
                            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img alt={SERVICES_PAGE_CONTENT.items.lentes.title} loading="lazy" className="bento-image h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src={IMAGES.veneer} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            </div>
                            <div className="bento-content relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">{SERVICES_PAGE_CONTENT.items.lentes.title}</h3>
                                <p className="text-base text-gray-200">{SERVICES_PAGE_CONTENT.items.lentes.description}</p>
                            </div>
                        </div>

                        {/* Clareamento */}
                        <div className="bento-card group relative col-span-1 h-auto aspect-square lg:h-auto lg:aspect-[2.1/1] overflow-hidden rounded-2xl bg-surface-light shadow-card dark:bg-surface-dark md:col-span-2 lg:col-span-2 lg:row-span-1 reveal reveal-scale" tabIndex={0}>
                            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img alt={SERVICES_PAGE_CONTENT.items.clareamento.title} loading="lazy" className="bento-image h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src={IMAGES.whitening} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                            </div>
                            <div className="bento-content relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">{SERVICES_PAGE_CONTENT.items.clareamento.title}</h3>
                                <p className="text-base leading-relaxed text-gray-200">
                                    {SERVICES_PAGE_CONTENT.items.clareamento.description}
                                </p>
                            </div>
                        </div>

                        {/* Harmonização */}
                        <div className="bento-card group relative col-span-1 h-auto aspect-square lg:h-auto lg:aspect-[2.1/1] overflow-hidden rounded-2xl bg-surface-light shadow-card dark:bg-surface-dark md:col-span-2 lg:col-span-2 lg:row-span-1 reveal reveal-scale" tabIndex={0}>
                            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img alt={SERVICES_PAGE_CONTENT.items.harmonizacao.title} loading="lazy" className="bento-image h-full w-full object-cover object-[50%_30%] opacity-90 transition-opacity group-hover:opacity-100" src={IMAGES.facial} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <div className="bento-content relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">{SERVICES_PAGE_CONTENT.items.harmonizacao.title}</h3>
                                <p className="text-base text-gray-200">
                                    {SERVICES_PAGE_CONTENT.items.harmonizacao.description}
                                </p>
                            </div>
                        </div>

                        {/* Siso */}
                        <div className="bento-card group relative col-span-1 h-auto aspect-square lg:h-auto lg:aspect-square overflow-hidden rounded-2xl bg-surface-light shadow-card dark:bg-surface-dark lg:col-span-1 lg:row-span-1 reveal reveal-scale" tabIndex={0}>
                            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img alt={SERVICES_PAGE_CONTENT.items.siso.title} loading="lazy" className="bento-image h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src={IMAGES.wisdom} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            </div>
                            <div className="bento-content relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">{SERVICES_PAGE_CONTENT.items.siso.title}</h3>
                                <p className="text-base text-gray-200">{SERVICES_PAGE_CONTENT.items.siso.description}</p>
                            </div>
                        </div>

                        {/* Kids */}
                        <div className="bento-card group relative col-span-1 h-auto aspect-square lg:h-auto lg:aspect-square overflow-hidden rounded-2xl bg-surface-light shadow-card dark:bg-surface-dark lg:col-span-1 lg:row-span-1 reveal reveal-scale" tabIndex={0}>
                            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img alt={SERVICES_PAGE_CONTENT.items.kids.title} loading="lazy" className="bento-image h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src={IMAGES.kids} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                            </div>
                            <div className="bento-content relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">{SERVICES_PAGE_CONTENT.items.kids.title}</h3>
                                <p className="text-base text-gray-200">{SERVICES_PAGE_CONTENT.items.kids.description}</p>
                            </div>
                        </div>

                        {/* Endodontia */}
                        <div className="bento-card group relative col-span-1 h-auto aspect-square lg:h-auto lg:aspect-[2.1/1] overflow-hidden rounded-2xl bg-surface-light shadow-card dark:bg-surface-dark md:col-span-2 lg:col-span-2 lg:row-span-1 reveal reveal-scale" tabIndex={0}>
                            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img alt={SERVICES_PAGE_CONTENT.items.endodontia.title} loading="lazy" className="bento-image h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100" src={IMAGES.endo} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                            </div>
                            <div className="bento-content relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">{SERVICES_PAGE_CONTENT.items.endodontia.title}</h3>
                                <p className="text-base leading-relaxed text-gray-200">
                                    {SERVICES_PAGE_CONTENT.items.endodontia.description}
                                </p>
                            </div>
                        </div>

                        {/* Periodontia */}
                        <div className="bento-card group relative col-span-1 h-auto aspect-square lg:h-auto lg:aspect-[2.1/1] overflow-hidden rounded-2xl bg-surface-light shadow-card dark:bg-surface-dark md:col-span-2 lg:col-span-2 lg:row-span-1 reveal reveal-scale" tabIndex={0}>
                            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                                <img alt={SERVICES_PAGE_CONTENT.items.periodontia.title} loading="lazy" className="bento-image h-full w-full object-cover object-center opacity-90 transition-opacity group-hover:opacity-100" src={IMAGES.perio} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <div className="bento-content relative z-10 flex h-full flex-col justify-end p-6 md:p-8 text-white">
                                <h3 className="mb-2 text-xl md:text-2xl font-bold">{SERVICES_PAGE_CONTENT.items.periodontia.title}</h3>
                                <p className="text-base text-gray-200">
                                    {SERVICES_PAGE_CONTENT.items.periodontia.description}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <section className="relative overflow-hidden bg-primary py-20 text-white dark:bg-[#b01e42]">
                {/* Texture Pattern Overlay */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}></div>

                <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-8 px-6 text-center md:px-20 reveal reveal-up">
                    <div className="flex flex-col gap-4">
                        <h2 className="max-w-[800px] font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                            {SERVICES_PAGE_CONTENT.ctaSection.title}
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg font-medium text-white/90">
                            {SERVICES_PAGE_CONTENT.ctaSection.description}
                        </p>
                    </div>
                    <a
                        href={WHATSAPP_CONFIG.getLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-[200px] cursor-pointer items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-extrabold text-primary shadow-lg transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-[#b01e42] no-underline"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        {SERVICES_PAGE_CONTENT.ctaSection.buttonText}
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;