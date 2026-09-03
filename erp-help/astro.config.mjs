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
            { label: 'Produtos', slug: 'modulos/produtos' },
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
          label: 'Fluxos de Trabalho',
          collapsed: false,
          items: [
            { label: 'Cadastro de Produto', slug: 'fluxos/cadastro-produto' },
            { label: 'Criar Pedido', slug: 'fluxos/criar-pedido' },
            { label: 'Processar Venda', slug: 'fluxos/processar-venda' },
            { label: 'Gerenciar Estoque', slug: 'fluxos/gerenciar-estoque' },
            { label: 'Fluxo de Compras', slug: 'fluxos/fluxo-compras' },
            { label: 'Expedir Pedido', slug: 'fluxos/expedir-pedido' },
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
      customCss: ['./src/styles/custom.css'],
      head: [
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
