# docs-fontes — Material de origem dos manuais

Pasta para PDFs e imagens usados como fonte pelo agente
`@midia-reader`. Nada aqui é publicado no site.

## Como organizar

1. Um assunto por vez (ex.: só o fluxo de um manual).
2. Nomeie os arquivos em ordem de execução:
   ```
   01-menu-produtos.png
   02-tela-grupos.png
   03-campos-preenchidos.png
   manual-antigo.pdf
   ```
3. Um print por etapa importante: menu → tela aberta →
   campos preenchidos → botão clicado → resultado/tela seguinte.
4. Inclua prints de mensagens de erro ou aviso, se houver.
5. Garanta que textos estejam legíveis (sem cortes em campos,
   botões ou valores).

## Como usar

Chame `@midia-reader` indicando os arquivos, ex.:

```
@midia-reader extraia docs-fontes/01-menu-produtos.png,
docs-fontes/02-tela-grupos.png e docs-fontes/manual-antigo.pdf
```

Ele devolve um resumo para aprovação. Aprovado, o
`@manual-writer` transforma em página do portal.

> Anexos enviados no chat não chegam como arquivo: salve as
> imagens/PDFs nesta pasta antes de chamar o agente.
