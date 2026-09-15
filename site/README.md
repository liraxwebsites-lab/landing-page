# Lirax — Landing Page

Landing page institucional da **Lirax Agência Digital**: sites profissionais e presença digital de alto impacto para empresas e microempreendedores de todo o Brasil.

## Tecnologias

- HTML + **CSS puro** + JS vanilla (zero frameworks, zero build)
- Tipografia via Google Fonts (Plus Jakarta Sans + Space Grotesk)
- 1 imagem local (`assets/img/antes-petshop.png`); restante é CSS/SVG inline

## Estrutura

```
site/               ← raiz do deploy (é isso que vai pro GitHub/Vercel)
├── index.html       ← landing única
├── demo-antes/      ← site de demonstração "feio" (embedado no ANTES via iframe)
├── demo-depois/      ← site de demonstração "bonito" (embedado no DEPOIS via iframe)
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/lirax-logo.jpeg
└── README.md
```

`_referencias/` (fora do deploy) guarda as versões antigas, demos e o design system.

## Rodar local

Abra `site/index.html` no navegador. Sem build, sem servidor.

## Publicação na Vercel

- **Opção A (recomendada):** suba só o conteúdo de `site/` como raiz do repositório.
- **Opção B:** suba a pasta inteira e configure **Root Directory = `site`** nas configurações do projeto na Vercel.

## Contatos oficiais

- WhatsApp: (21) 98462-5248 → `https://wa.me/5521984625248`
- E-mail: lirax.websites@gmail.com
