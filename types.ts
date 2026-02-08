export interface Service {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    icon?: string;
    ctaText?: string;
    isFeatured?: boolean;
    isSeeMore?: boolean;
}

export interface Testimonial {
    id: string;
    name: string;
    avatarUrl: string;
    rating: number;
    text: string;
}

export interface GalleryItem {
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
    spanCols?: string;
    spanRows?: string;
}

export interface ContactInfo {
    address: string;
    phone1: string;
    phone2: string;
    email: string;
    hoursWeek: string;
    hoursSat: string;
}