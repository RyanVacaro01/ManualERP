import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ajuda.seuerp.com.br',
  integrations: [
    starlight({
      title: 'MODUM ERP',
      logo: {
        src: './src/content/assets/logos/logo.png',
        alt: 'Logo MODUM ERP',
        replacesTitle: true,
      },
      
      locales: {
        root: {
          label: 'Português do Brasil',
          lang: 'pt-BR',
        },
      },
      
      lastUpdated: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: 'Início',
          items: [
            { label: 'Bem-vindo', slug: 'index' },
            { label: 'Sobre o Sistema', slug: 'sobre' },
          ],
        },
        {
          label: 'Módulos',
          collapsed: false,
          items: [
            {
              label: 'Produtos',
              collapsed: true,
              items: [
                { label: 'Produtos', slug: 'modulos/produtos' },
                { label: 'Cadastro Grupo de Produtos', slug: 'modulos/produtos/grupo-produtos' },
              ],
            },
            { label: 'Clientes', slug: 'modulos/clientes' },
            { label: 'Custos', slug: 'modulos/custos' },
            { label: 'Pedidos', slug: 'modulos/pedidos' },
            { label: 'Produção', slug: 'modulos/producao' },
            {
              label: 'Expedição',
              collapsed: true,
              items: [
                { label: 'Expedição', slug: 'modulos/expedicao' },
                {
                  label: 'NF-e Débitos',
                  collapsed: true,
                  items: [
                    { label: 'NF-e Multa e Juros', slug: 'modulos/expedicao/nfe-debitos/nfe-multa-juros' },
                  ],
                },
              ],
            },
            { label: 'Compras', slug: 'modulos/compras' },
            { label: 'Recebimento', slug: 'modulos/recebimento' },
            { label: 'Pessoas', slug: 'modulos/pessoas' },
            { label: 'Marketplace', slug: 'modulos/marketplace' },
            { label: 'Indicadores', slug: 'modulos/indicadores' },
            { label: 'Arquivos', slug: 'modulos/arquivos' },
            { label: 'Extras', slug: 'modulos/extras' },
          ],
        },
        {
          label: 'Ajuda',
          collapsed: false,
          items: [
            { label: 'Erros Comuns', slug: 'troubleshoot/erros-comuns' },
            { label: 'FAQ', slug: 'troubleshoot/faq' },
            { label: 'Suporte', slug: 'troubleshoot/suporte' },
          ],
        },
      ],
      components: {
        Sidebar: './src/components/Sidebar.astro',
      },
      customCss: ['./src/styles/custom.css', './src/styles/motion.css'],
      head: [
        {
          tag: 'script',
          content: `document.documentElement.classList.add('ux');`,
        },
        {
          tag: 'script',
          attrs: { src: '/js/ux.js', defer: true },
        },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://ajuda.seuerp.com.br/og-image.png' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '1200' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '630' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:alt', content: 'Manual MODUM ERP — guias e tutoriais do sistema' },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#161422' },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: `{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://ajuda.seuerp.com.br/#org","name":"MODUM ERP","url":"https://ajuda.seuerp.com.br/","logo":"https://ajuda.seuerp.com.br/og-image.png"},{"@type":"WebSite","name":"Manual MODUM ERP","url":"https://ajuda.seuerp.com.br/","inLanguage":"pt-BR","publisher":{"@id":"https://ajuda.seuerp.com.br/#org"}}]}`,
        },
        {
          tag: 'meta',
          attrs: { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
        },
        {
          tag: 'meta',
          attrs: { httpEquiv: 'X-Frame-Options', content: 'DENY' },
        },
        {
          tag: 'meta',
          attrs: { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        },
      ],
    }),
  ],
});
