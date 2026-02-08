import { GALLERY, GALLERY_CONTENT } from '../constants';

const Gallery: React.FC = () => {
    return (
        <section className="w-full py-24 px-6 sm:px-10 bg-white dark:bg-[#150a0d]" id="espaco">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 reveal reveal-up">
                    <span className="text-primary font-bold text-base tracking-widest uppercase">{GALLERY_CONTENT.badge}</span>
                    <h2 className="text-[#1b0e11] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.02em]">
                        {GALLERY_CONTENT.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {GALLERY_CONTENT.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {GALLERY.map((item, index) => (
                        <div
                            key={item.id}
                            className={`relative group overflow-hidden rounded-2xl cursor-pointer focus:outline-none ${item.spanCols || ''} ${item.spanRows || 'row-span-1'} reveal reveal-scale`}
                            tabIndex={0}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 group-active:bg-black/10 transition-colors z-10"></div>
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                            />
                            <div className={`absolute bottom-0 left-0 ${item.description ? 'p-8' : 'p-6'} z-20`}>
                                <h3 className={`text-white text-xl md:text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500`}>
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="text-white/90 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 delay-100">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;