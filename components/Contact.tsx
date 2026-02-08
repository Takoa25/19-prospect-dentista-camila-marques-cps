import React from 'react';
import { CONTACT_INFO, CONTACT_CONTENT, WHATSAPP_CONFIG, IMAGES, GOOGLE_MAPS } from '../constants';

const Contact: React.FC = () => {
    return (
        <section className="w-full py-24 px-6 sm:px-10 bg-[#f8f6f6] dark:bg-[#211115]" id="contato">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="text-center reveal reveal-up">
                    <h2 className="text-[#1b0e11] dark:text-white text-3xl md:text-4xl font-black leading-tight mb-4">{CONTACT_CONTENT.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{CONTACT_CONTENT.description}</p>
                </div>

                <div className="bg-white dark:bg-[#150a0d] rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                    {/* Contact Details Sidebar */}
                    <div className="p-8 lg:p-12 lg:w-1/3 bg-primary text-white flex flex-col justify-between relative overflow-hidden reveal reveal-left">
                        <div className="relative z-10 flex flex-col gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">{CONTACT_CONTENT.sidebarTitle}</h3>
                                <div className="flex flex-col gap-6">
                                    <ContactItem icon="location_on" title="Endereço" text={CONTACT_INFO.address} />
                                    <ContactItem icon="call" title="Telefone" text={`${CONTACT_INFO.phone1}\n${CONTACT_INFO.phone2}`} />

                                    <ContactItem icon="schedule" title="Horário" text={`${CONTACT_INFO.hoursWeek}\n${CONTACT_INFO.hoursSat}`} />
                                </div>
                            </div>
                            <div>
                                <a
                                    href={WHATSAPP_CONFIG.getLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 no-underline"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {CONTACT_CONTENT.ctaWhatsApp}
                                </a>
                            </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full z-0 pointer-events-none"></div>
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full z-0 pointer-events-none"></div>
                    </div>

                    {/* Map Area */}
                    <div className="lg:w-2/3 h-[400px] lg:h-auto bg-gray-200 dark:bg-gray-800 relative reveal reveal-right min-h-[400px]">
                        <iframe
                            src={GOOGLE_MAPS.embedUrl}
                            className="w-full h-full border-0 absolute inset-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Dra. Camila Marques"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactItem: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="flex gap-4 items-start">
        <span className="material-symbols-outlined bg-white/20 p-2 rounded-lg">{icon}</span>
        <div>
            <p className="font-bold text-lg">{title}</p>
            <p className="text-white/90 whitespace-pre-line">{text}</p>
        </div>
    </div>
);

export default Contact;