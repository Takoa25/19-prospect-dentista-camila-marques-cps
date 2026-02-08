# Dra. Camila Marques - Landing Page Odontológica

Uma Landing Page moderna, responsiva e otimizada para a clínica odontológica da Dra. Camila Marques. Desenvolvida com foco em conversão, performance e experiência do usuário (UX/UI premium).

## 🚀 Tecnologias Utilizadas

- **React** (v18)
- **TypeScript**
- **Vite** (Build Tool ultra-rápido)
- **Tailwind CSS** (v3.4 - Estilização utilitária)
- **React Router DOM** (Navegação SPA)

## ✨ Funcionalidades

- **Design Responsivo & Mobile-First**: Layout adaptável para qualquer tamanho de tela.
- **Performance Otimizada**: Imagens em formato moderno (AVIF), Lazy Loading e split-chunks.
- **SEO Ready**: Meta tags configuradas, Open Graph para redes sociais e estrutura semântica.
- **Animações Suaves**: ScrollReveal e micro-interações para engajamento.
- **Fácil Customização**: Todo o conteúdo (textos, links, imagens) centralizado em um único arquivo de configuração.
- **Integração**: Botões de ação direta para WhatsApp e Google Maps.

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd 6_Prospect_Dentista_Camila_Marques
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

O projeto estará rodando em `http://localhost:3000` (ou outra porta disponível).

## 📦 Build para Produção

Para gerar a versão otimizada para deploy:

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `dist`.

## ⚙️ Customização de Conteúdo

Todo o texto e links do site podem ser alterados sem mexer na estrutura do código.
Edite o arquivo: **`constants.ts`** na raiz do projeto.

Lá você encontrará objetos para configurar:
- `COLORS`: Paleta de cores do tema.
- `IMAGES`: Caminhos das imagens.
- `WHATSAPP_CONFIG`: Número e mensagem padrão do WhatsApp.
- `HERO_CONTENT`, `SERVICES_SECTION`, etc.: Textos de cada seção.

## 📂 Estrutura do Projeto

```
/
├── components/          # Componentes React (Hero, Header, Footer, etc.)
├── public/              # Arquivos estáticos (imagens, favicons)
├── constants.ts         # Central de configuração de conteúdo
├── index.html           # Entry point HTML
├── netlify.toml         # Configuração de deploy (Netlify)
├── tailwind.config.js   # Configuração do Tailwind CSS
└── vite.config.ts       # Configuração do Vite
```

## 🔒 Segurança

Este projeto segue boas práticas de segurança para SPAs estáticas:
- Headers de segurança configurados (`netlify.toml`).
- Dependências gerenciadas via npm (sem scripts externos inseguros).
- Sem exposição de chaves de API sensíveis no frontend.

---

Desenvolvido com ❤️ pela **TAKOA**.
