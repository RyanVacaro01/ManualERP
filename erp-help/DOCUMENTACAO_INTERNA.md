# Documentação Interna - Portal de Ajuda MODUM ERP

## Visão Geral

O **Portal de Ajuda MODUM ERP** é um site de documentação online que serve como central de ajuda para todos os usuários do sistema ERP da empresa. Ele permite que a equipe de suporte e os clientes encontrem informações sobre módulos, funcionalidades, fluxos de trabalho e soluções de problemas.

---

## Estrutura do Projeto

### Organização de Pastas

```
erp-help/
├── src/
│   ├── components/          # Componentes visuais customizados
│   ├── content/docs/        # Todo o conteúdo de documentação
│   │   ├── index.mdx        # Página inicial
│   │   ├── modulos/         # Documentação dos 13 módulos
│   │   ├── fluxos/          # Guias de processos
│   │   ├── integracoes/     # Integrações com outros sistemas
│   │   ├── troubleshoot/    # Erros comuns e FAQ
│   │   └── referencias/     # Glossário e atalhos
│   └── styles/              # Estilos CSS customizados
├── public/                  # Arquivos estáticos
├── .github/workflows/       # Automação de deploy
└── astro.config.mjs         # Configuração principal
```

### Módulos Documentados

| Módulo | Descrição |
|--------|-----------|
| Produtos | Catálogo de produtos, variações e preços |
| Clientes | Cadastro e gestão de clientes |
| Custos | Controle de custos |
| Pedidos | Criação e processamento de pedidos |
| Produção | Gestão de produção |
| Expedição | Controle de expedição e entregas |
| Compras | Gestão de compras e fornecedores |
| Recebimento | Recebimento de mercadorias |
| Pessoas | Cadastro de pessoas |
| Marketplace | Integração com marketplaces |
| Indicadores | Dashboards e relatórios |
| Arquivos | Gestão de arquivos |
| Extras | Funcionalidades extras |

---

## Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| **Astro** | Framework para construção do site |
| **Starlight** | Tema de documentação (sidebar, busca, navegação) |
| **MDX** | Formato dos arquivos de conteúdo (Markdown + JSX) |
| **TypeScript** | Tipagem estática |
| **CSS** | Estilos customizados (tema escuro) |
| **GitHub Actions** | Automação de build e deploy |
| **Vercel** | Hospedagem do site |

---

## Como Funciona o Conteúdo

### Editar uma Página

1. Acesse a pasta `src/content/docs/`
2. Localize o arquivo `.mdx` desejado
3. Edite o conteúdo usando Markdown
4. Salve e o site será atualizado automaticamente

### Adicionar Nova Página

1. Crie um novo arquivo `.mdx` na pasta correspondente
2. Adicione o frontmatter no início:
   ```yaml
   ---
   title: Título da Página
   description: Descrição curta
   ---
   ```
3. Adicione o link na sidebar em `astro.config.mjs`

### Adicionar Novo Módulo

1. Crie uma pasta em `src/content/docs/modulos/`
2. Crie o arquivo `index.mdx` com o conteúdo
3. Adicione o item na sidebar em `astro.config.mjs`

---

## Componentes Disponíveis

### Componentes do Starlight

| Componente | Uso |
|------------|-----|
| `<Steps>` | Lista numerada de passos |
| `<Aside>` | Notas e dicas laterais |
| `<Card>` | Cards informativos |
| `<CardGrid>` | Grid de cards |

### Componentes Customizados

| Componente | Uso |
|------------|-----|
| `CalloutCustom` | Alertas coloridos (tip, note, warning, caution) |
| `FeedbackWidget` | Widget de feedback "Esta página foi útil?" |
| `StepByStep` | Passo-a-passo com numeração visual |
| `VideoEmbed` | Embed de vídeos (YouTube/Vimeo) |

---

## Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Iniciar servidor local para desenvolvimento |
| `npm run build` | Gerar versão final do site |
| `npm run preview` | Visualizar o site buildado |

---

## Deploy (Publicação)

O site é publicado automaticamente via **GitHub Actions** + **Vercel**:

1. **Desenvolvimento:** Edite os arquivos localmente
2. **Teste:** Execute `npm run dev` para visualizar
3. **Publicação:** Faça push para o repositório GitHub
4. **Automático:** O GitHub Actions faz build e publica no Vercel

### URLs Importantes

- **Site:** https://ajuda.seuerp.com.br
- **Repositório:** https://github.com/seu-usuario/erp-help

---

## Manutenção do Conteúdo

### Para a Equipe de Suporte

- **Adicionar FAQ:** Edite `src/content/docs/troubleshoot/faq.mdx`
- **Documentar Erro:** Edite `src/content/docs/troubleshoot/erros-comuns.mdx`
- **Atualizar Módulo:** Edite o arquivo correspondente em `src/content/docs/modulos/`
- **Criar Fluxo:** Adicione arquivo em `src/content/docs/fluxos/`

### Boas Práticas

1. **Títulos claros:** Use títulos descritivos para facilitar a busca
2. **Estrutura:** Organize o conteúdo com subtítulos (## e ###)
3. **Imagens:** Use imagens para ilustrar telas quando necessário
4. **Exemplos:** Inclua exemplos práticos sempre que possível
5. **Atualização:** Mantenha o conteúdo atualizado com as versões do ERP

---

## Suporte Técnico

Para dúvidas sobre a manutenção do portal, entre em contato com o responsável pela equipe de desenvolvimento.

---

*Documento gerado em: Setembro 2026*
