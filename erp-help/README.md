# Site de Ajuda ERP

Portal de ajuda e documentação do sistema ERP, construído com [Astro](https://astro.build) e [Starlight](https://starlight.astro.build).

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 20+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/erp-help.git

# Entre no diretório
cd erp-help

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:4321`

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Visualiza build de produção |
| `npm run astro` | Executa comandos do Astro |

## 📁 Estrutura do Projeto

```
erp-help/
├── src/
│   ├── content/
│   │   ├── docs/           # Documentação em Markdown
│   │   │   ├── index.mdx   # Página inicial
│   │   │   ├── modulos/    # Módulos do sistema
│   │   │   ├── fluxos/     # Fluxos de trabalho
│   │   │   ├── integracoes/ # Integrações
│   │   │   ├── troubleshoot/ # Ajuda
│   │   │   └── referencias/ # Referências
│   │   └── assets/         # Imagens e icons
│   └── components/         # Componentes customizados
├── public/                 # Arquivos estáticos
├── astro.config.mjs        # Configuração do Astro
└── package.json
```

## 🛠️ Tecnologias

- **[Astro](https://astro.build)** - Framework estático
- **[Starlight](https://starlight.astro.build)** - Template de documentação
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte o repositório ao [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente
3. O deploy será automático

### GitHub Actions

O workflow de deploy está configurado em `.github/workflows/deploy.yml`

### Outras Opções

- **Netlify**: `npm run build` → pasta `dist/`
- **GitHub Pages**: Configure o output para estático
- **Servidor próprio**: Copie a pasta `dist/`

## 🔒 Segurança

Este site é estático e não possui backend. As principais medidas de segurança são:

- ✅ HTTPS obrigatório
- ✅ Headers de segurança (CSP, HSTS, X-Frame-Options)
- ✅ Sem dados sensíveis armazenados
- ✅ Autenticação via proxy (se necessário)

## 📝 Editando o Conteúdo

1. Navegue até `src/content/docs/`
2. Edite os arquivos `.mdx`
3. Salve e o site atualiza automaticamente

### Formato dos Arquivos

```markdown
---
title: Título da Página
description: Descrição da página
---

 Conteúdo em Markdown
```

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça commit das alterações
4. Envie um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- **E-mail**: suporte@seuaempresa.com.br
- **Telefone**: 0800-123-4567
- **Chat**: Disponível no sistema
