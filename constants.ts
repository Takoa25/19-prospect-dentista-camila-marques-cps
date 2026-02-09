import { Service, Testimonial, GalleryItem, ContactInfo } from './types';

/**
 * CONFIGURAÇÕES DE CORES
 * Cores principais utilizadas em todo o site para manter a consistência visual.
 */
export const COLORS = {
    primary: '#e8305e',           // Rosa principal (Ações, Realces)
    primaryDark: '#b01e42',       // Rosa escuro (Hover, Dark Mode)
    backgroundLight: '#f8f6f6',   // Fundo claro das seções
    backgroundDark: '#211115',    // Fundo escuro das seções
    surfaceLight: '#ffffff',      // Fundo dos cards (Claro)
    surfaceDark: '#2d1b20',       // Fundo dos cards (Escuro)
    textMain: '#1b0e11',          // Texto principal (Preto)
    textSecondary: '#974e60',     // Texto secundário (Rosa acinzentado)
};

/**
 * BANCO DE IMAGENS
 * Centralização de todas as URLs de imagens do projeto.
 * Indicação de seções e dimensões ideais recomendadas.
 */
export const IMAGES = {
    // LOGO
    logo: '/logo.png', // Caminho da logo na pasta public

    // HERO SECTION
    // Proporção ideal Desktop: 16:9 | Mobile: 9:16 ou 4:5
    heroDesktop: 'heroDesktop.avif',
    heroMobile: 'heroMobile.avif',

    // SERVICES SECTION (BENTO GRID)
    // Proporção ideal: 1:1 (Quadrada) ou 2:1 (Horizontal para destaques) | Dimensões: 800x800px ou 1200x600px
    implant: 'implante.avif',
    ortho: 'ortodontia.avif',
    veneer: 'faceta.avif',
    whitening: 'clareamento.avif',
    facial: 'harmonizacao.avif',
    wisdom: 'siso.avif',
    kids: 'odontopediatria.avif',
    endo: 'endodontia.avif',
    perio: 'periodontia.avif',

    // ABOUT SECTION
    // Proporção ideal: 4:5 (Vertical) | Dimensões: 1000x1250px (Foco na pessoa)
    doctor: 'about.avif',

    // TESTIMONIALS SECTION
    // Proporção ideal: 1:1 (Circular) | Dimensões: 200x200px (Resolução padrão para avatares)
    testimonial1: 'testimonial1.avif',
    testimonial2: 'testimonial2.avif',
    testimonial3: 'testimonial3.avif',
    testimonial4: 'testimonial4.avif',

    // GALLERY/SPACE SECTION
    // Proporção ideal: 4:3 ou 3:2 | Dimensões: 1200x900px (Alta qualidade para interiores)
    reception: '1.avif',
    chair: '2.avif',
    instruments: '3.avif',
    equipment: '4.avif',
    corridor: '5.avif',

    // CONTACT SECTION (MAP)
    // Proporção ideal: 2:1 (Horizontal) | Dimensões: 1200x600px (Fallback para o mapa)
    mapStatic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYT0klDpyiYvoilbfSEF-FVntdIFKRZyhI8tjvFNs9tYk5HqGqPXaSE_fjUaUAVA8LxeYjg0YIyv46sbT-c4_bmCFMJeDkrbp1PU6Uowpo1iOe127JapjW4GTQolnhTDW2k3W-yvG8LA-AlOlVJL23u2SuzkrFFCJWBGmKUAY4klDbiUQqeJiL0eiFfRQmF1xUYfRMLMdMZuRQpvKSjmGiraUbn7PxN2i5ofuQIB0R1rF71BFx1aNea2_1GBvSp3bwtsKlz4dkHQ'
};

/**
 * LINKS E INTEGRAÇÕES
 */
export const WHATSAPP_CONFIG = {
    number: '5519999744928',
    message: 'Olá Dra. Camila, vim pelo site e gostaria de saber mais sobre os procedimentos e agendar uma consulta.',
    getLink: function () {
        return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    }
};

export const GOOGLE_MAPS = {
    reviewsUrl: 'https://maps.app.goo.gl/23751reUAVR4v339A',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0397019510197!2d-47.1204577!3d-22.9855675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9acc83a8005%3A0x35b1f6a821f8fd8e!2sDra%20Camila%20Marques%20%7C%20Implante%20dent%C3%A1rio%20%7C%20Dente%20do%20Siso%20%7C%20Facetas%20em%20Resina%20%7C%20Dentista%20Ouro%20Verde%20%7C%20Dentista%20Campinas!5e0!3m2!1spt-BR!2sbr!4v1770418059784!5m2!1spt-BR!2sbr', // Futuro: Adicionar link real de embed
    locationTitle: 'Av. Pastor João Prata Vieira, 627 - Campinas, SP'
};

/**
 * CONTEÚDO DA PÁGINA (ORDEM DE APARIÇÃO)
 */

// 1. NAVBAR / HEADER
export const NAVBAR_CONTENT = {
    logoText: 'Dra. Camila Marques',
    links: [
        { label: 'Início', href: 'hero' },
        { label: 'Serviços', href: 'servicos' },
        { label: 'Sobre', href: 'sobre' },
        { label: 'Depoimentos', href: 'depoimentos' },
        { label: 'Nosso Espaço', href: 'espaco' },
        { label: 'Contato', href: 'contato' },
    ],
    ctaText: 'Agendar Consulta'
};

// 2. HERO SECTION
export const HERO_CONTENT = {
    badge: 'Odontologia Especializada em Campinas',
    title: 'Seu Novo Sorriso Começa Aqui',
    description: 'Implantes, facetas, aparelhos e muito mais — tudo com equipamentos modernos e cuidado que prioriza você.',
    ctaPrimary: 'Agendar Consulta',
    ctaSecondary: 'Saiba Mais'
};

// 3. SERVICES SECTION (Home)
export const SERVICES_SECTION = {
    badge: '',
    title: 'Nossas Especialidades',
    description: 'Soluções completas: desde ortodontia até facetas de resina, tudo em um só lugar.',
    seeMoreTitle: 'Ver mais serviços',
    ctaAgendar: 'Agendar agora'
};

export const SERVICES: Service[] = [
    {
        id: '1',
        title: 'Implante Dentário',
        description: 'Recuperação de dentes perdidos com implantes de titânio.',
        imageUrl: IMAGES.implant,
        isFeatured: true
    },
    {
        id: '2',
        title: 'Dente do Siso',
        description: 'Extração segura e humanizada com foco na recuperação rápida e indolor.',
        imageUrl: IMAGES.wisdom,
        isFeatured: false
    },
    {
        id: '3',
        title: 'Facetas em Resina',
        description: 'Sorriso perfeito e harmônico com facetas que transformam a estética dos seus dentes.',
        imageUrl: IMAGES.veneer,
        isFeatured: false
    },
    {
        id: '4',
        title: 'Odontopediatria',
        description: 'Cuidado especial e lúdico para garantir a saúde bucal das crianças.',
        imageUrl: IMAGES.kids,
        isFeatured: false
    },
    {
        id: '5',
        title: 'Ver mais serviços',
        description: '', // Descrição removida conforme solicitado
        isSeeMore: true,
        isFeatured: false
    }
];

// 4. ABOUT SECTION
export const ABOUT_CONTENT = {
    badge: 'Sobre a Dra. Camila',
    title: 'Especialista que Combina Técnica e Cuidado Humano',
    text1: 'Com mais de 10 anos de experiência, a Dra. Camila Marques acredita que um sorriso saudável é a chave para a autoconfiança. Sua abordagem une técnica refinada com um olhar humano e acolhedor.',
    text2: 'Na nossa clínica, cada paciente é único. Utilizamos equipamentos de última geração para diagnósticos precisos, mas é o nosso cuidado individualizado que faz a diferença no seu tratamento.',
    features: [
        'Atendimento personalizado',
        'Diagnósticos precisos',
        'Ambiente acolhedor'
    ],
    doctorBadge: 'CRO-SP 139.585',
    doctorSubtext: 'Especialista em Odontologia Estética e Implantodontia.'
};

// 5. TESTIMONIALS SECTION
export const TESTIMONIALS_CONTENT = {
    badge: 'O Que Nossos Pacientes Dizem',
    title: 'Avaliações',
    ctaVerMais: 'Ver mais'
};

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Maria Ines Oliveira',
        avatarUrl: IMAGES.testimonial1,
        rating: 5,
        text: 'Tenho total confiança no trabalho da Dra Camila,  nos cuidados com a minha família, só tenho a agradecer pelo carinho, e por ser esse excelente profissional!'
    },
    {
        id: '2',
        name: 'Simael Barreto de Sousa',
        avatarUrl: IMAGES.testimonial2,
        rating: 5,
        text: 'Excelente Profissiona...As lentes que ela faz fica perfeita, ótimo qualidade de produtos...em fim é um consultório completo...Nota 10.'
    },
    {
        id: '3',
        name: 'Marcelle Santos Silva',
        avatarUrl: IMAGES.testimonial3,
        rating: 5,
        text: 'Ótimo atendimento. Doutora Andrea super compreensiva e gentil'
    },
    {
        id: '4',
        name: 'Juliano Godofredo',
        avatarUrl: IMAGES.testimonial4,
        rating: 5,
        text: 'Ótimo atendimento, excelentes profissionais 👏🏻👏🏻👏🏻👏🏻👏🏻 Dra Andrea showw…'
    },
    {
        id: '5',
        name: 'Kauany Lujan',
        avatarUrl: IMAGES.testimonial1,
        rating: 5,
        text: 'Atendimento foi ótimo, gostei bastante. Lugar agradável e muito organizado.'
    },
    {
        id: '6',
        name: 'Marcos Vinícius',
        avatarUrl: IMAGES.testimonial2,
        rating: 5,
        text: 'Clínica moderna e muito organizada. A Dra. Camila é extremamente técnica e cuidadosa. Vale cada centavo o investimento.'
    },
    {
        id: '7',
        name: 'Diego Silva',
        avatarUrl: IMAGES.testimonial3,
        rating: 5,
        text: 'Dr Andrea total confiança e excelente atendimento'
    },
    {
        id: '8',
        name: 'Kayo Victor',
        avatarUrl: IMAGES.testimonial4,
        rating: 5,
        text: 'Muito bom recomendo dms. Dra Andrea Lobo'
    },
    {
        id: '9',
        name: 'Giovanna Donadon',
        avatarUrl: IMAGES.testimonial1,
        rating: 5,
        text: 'Fui atendida pela Dra Andrea, super atenciosa e cuidadosa, espaço super limpo e organizado, super indico!!!!'
    },
    {
        id: '10',
        name: 'Elieze Ventura',
        avatarUrl: IMAGES.testimonial2,
        rating: 5,
        text: 'Profissional com excelência, atendimento ótimo! Amooo quando vou lá cuidar dos meus dentes.'
    }
];

// 6. GALLERY / SPACE SECTION
export const GALLERY_CONTENT = {
    badge: '',
    title: 'Conheça Nosso Espaço',
    description: 'Espaço pensado para seu conforto: salas equipadas, ambiente higienizado e recepção acolhedora.'
};

export const GALLERY: GalleryItem[] = [
    {
        id: '1',
        title: 'Sala de Atendimento',
        description: '',
        imageUrl: IMAGES.reception,
        spanCols: 'md:col-span-2',
        spanRows: 'md:row-span-2'
    },
    {
        id: '2',
        title: 'Recepção',
        imageUrl: IMAGES.chair
    },
    {
        id: '3',
        title: 'Sala de Atendimento',
        imageUrl: IMAGES.instruments
    },
    {
        id: '4',
        title: 'Entrada',
        imageUrl: IMAGES.equipment,
        spanCols: 'md:col-span-1'
    },
    {
        id: '5',
        title: 'Tecnologia',
        description: '',
        imageUrl: IMAGES.corridor,
        spanCols: 'md:col-span-2'
    }
];

// 7. CONTACT SECTION
export const CONTACT_INFO: ContactInfo = {
    address: 'Av. Pastor João Prata Vieira, 627\nParque dos Servidores, Campinas - SP',
    phone1: '(19) 99974-4928',
    phone2: '',
    email: 'contato@clinicacamilamarques.com.br',
    hoursWeek: 'Seg - Sex: 09:00 - 18:00',
    hoursSat: 'Sáb: 09:00 - 12:30'
};

export const CONTACT_CONTENT = {
    title: 'Vamos Conversar Sobre Seu Sorriso?',
    description: 'Estamos localizados próximo a Sanasa, com fácil acesso e estacionamento.',
    sidebarTitle: '',
    ctaWhatsApp: 'Falar no WhatsApp'
};

// 8. FOOTER
export const FOOTER_CONTENT = {
    description: 'Transformando vidas através de sorrisos saudáveis e bonitos. Agende sua avaliação e comece sua jornada para ter o sorriso que você sempre quis.',
    navTitle: 'Navegação',
    legalTitle: 'Legal',
    copyright: "Todos os direitos reservados.",
    developedBy: "Desenvolvido com ❤️ & ☕ pela ",
    developerName: "TAKOA",
    developerUrl: "https://takoadigital.com",
    croStatus: 'CRO-SP 139.585 | Resp. Téc. Dra. Camila Marques',
    socialLinks: {
        instagram: 'https://www.instagram.com/dracamilamarquesz',
        facebook: 'https://www.facebook.com/clinicacamilamarquesz'
    }
};

// 9. SERVICES PAGE (Página Completa)
export const SERVICES_PAGE_CONTENT = {
    hero: {
        badge: 'Excelência em Odontologia',
        title: 'Nossas Especialidades',
        description: 'Unimos tecnologia de ponta e atendimento humanizado para oferecer os melhores tratamentos.'
    },
    items: {
        implantes: {
            title: 'Implante Dentário',
            description: 'Restaure a função mastigatória e a estética do seu sorriso.'
        },
        ortodontia: {
            title: 'Ortodontia',
            description: 'Alinhe seus dentes com aparelhos estéticos ou alinhadores invisíveis.'
        },
        lentes: {
            title: 'Facetas em Resina',
            description: 'Transforme seu sorriso: facetas que corrigem cor, forma e alinhamento dos dentes.'
        },
        clareamento: {
            title: 'Clareamento',
            description: 'Procedimentos a laser ou caseiros para iluminar seu sorriso.'
        },
        harmonizacao: {
            title: 'Harmonização Facial',
            description: 'Realce sua beleza natural com procedimentos minimamente invasivos.'
        },
        siso: {
            title: 'Siso',
            description: 'Extração planejada do siso com recuperação rápida e mínimo desconforto.'
        },
        kids: {
            title: 'Odontopediatria',
            description: 'Cuidado especial e lúdico para garantir a saúde bucal das crianças.'
        },
        endodontia: {
            title: 'Endodontia',
            description: 'Tratamento de canal com microscopia para salvar dentes.'
        },
        periodontia: {
            title: 'Periodontia',
            description: 'Saúde das gengivas e tecidos de sustentação.'
        }
    },
    ctaSection: {
        title: 'Vamos transformar seu sorriso?',
        description: 'Agende uma avaliação inicial e descubra o plano de tratamento ideal para você.',
        buttonText: 'Agendar via WhatsApp'
    }
};