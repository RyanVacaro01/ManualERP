import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ajuda.seuerp.com.br',
  integrations: [
    starlight({
      title: 'Ajuda ERP',
      logo: {
        src: './src/content/assets/logos/logo.png',
        alt: 'Logo ERP',
      },
      
      locales: {
        root: {
          label: 'Português do Brasil',
          lang: 'pt-BR',
        },
      },
      
      editLink: {
        baseUrl: 'https://github.com/seu-usuario/erp-help/edit/main/',
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
          label: 'Primeiros Passos',
          collapsed: false,
          items: [
            { label: 'Introdução', slug: 'primeiros-passos' },
            { label: 'Instalação', slug: 'primeiros-passos/instalacao' },
            { label: 'Configuração Inicial', slug: 'primeiros-passos/configuracao-inicial' },
            { label: 'Primeiro Login', slug: 'primeiros-passos/primeiro-login' },
          ],
        },
        {
          label: 'Módulos',
          collapsed: false,
          items: [
            { label: '📦 Produtos', slug: 'modulos/produtos' },
            { label: '👥 Clientes', slug: 'modulos/clientes' },
            { label: '💰 Custos', slug: 'modulos/custos' },
            { label: '📋 Pedidos', slug: 'modulos/pedidos' },
            { label: '🏭 Produção', slug: 'modulos/producao' },
            {
              label: '🚚 Expedição',
              collapsed: true,
              items: [
                { label: 'Expedição', slug: 'modulos/expedicao' },
                {
                  label: '📄 NFe Débitos',
                  collapsed: true,
                  items: [
                    { label: 'NF-e Multa e Juros', slug: 'modulos/expedicao/nfe-debitos/nfe-multa-juros' },
                  ],
                },
              ],
            },
            { label: '🛒 Compras', slug: 'modulos/compras' },
            { label: '📥 Recebimento', slug: 'modulos/recebimento' },
            { label: '👤 Pessoas', slug: 'modulos/pessoas' },
            { label: '🌐 Marketplace', slug: 'modulos/marketplace' },
            { label: '📊 Indicadores', slug: 'modulos/indicadores' },
            { label: '📁 Arquivos', slug: 'modulos/arquivos' },
            { label: '⚙️ Extras', slug: 'modulos/extras' },
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
          label: 'Integrações',
          collapsed: false,
          items: [
            { label: 'Marketplace', slug: 'integracoes/marketplace-config' },
            { label: 'NF Eletrônica', slug: 'integracoes/nf-eletronica' },
            { label: 'API', slug: 'integracoes/api-integrations' },
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
        {
          label: 'Referências',
          collapsed: false,
          items: [
            { label: 'Glossário', slug: 'referencias/glossario' },
            { label: 'Atalhos', slug: 'referencias/atalhos-teclado' },
            { label: 'Permissões', slug: 'referencias/permissoes' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [
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
