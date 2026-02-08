import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Pequeno atraso para garantir que o DOM da nova rota foi renderizado
        const timer = setTimeout(() => {
            const revealElements = document.querySelectorAll('.reveal');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                        } else {
                            // Mantido o comportamento de resetar ao sair da visão
                            // para que a animação ocorra tanto ao descer quanto ao subir
                            entry.target.classList.remove('active');
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px',
                }
            );

            revealElements.forEach((el) => observer.observe(el));

            return () => {
                revealElements.forEach((el) => observer.unobserve(el));
            };
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};

export default ScrollReveal;
