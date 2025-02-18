# 📄 Como contribuir?

## Introdução

Muito obrigado pelo seu interesse em ajudar a manter este projeto.

## Padrões de commits

De acordo com a documentação do **Conventional Commits**, Commits Semânticos são uma convenção simples para ser utilizada nas mensagens de commit. Essa convenção define  um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas.

Esses commits auxiliarão você e sua equipe a entenderem de forma facilitada quais alterações foram realizadas no trecho de código que foi commitado.

Essa identificação ocorre por meio de um prefixo que identifica se aquele commit realizado se trata de uma alteração de código, atualização de pacotes, documentação, alteração de visual, teste...

- `feat`- Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso** (se relaciona com o MINOR do versionamento semântico).

- `fix` - Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento semântico).

- `docs` - Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).

- `test` - Commits do tipo test são utilizados quando são realizadas **alterações em testes**, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)

- `build` - Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências**.

- `perf` - Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a **performance**.

- `style` - Commits do tipo style indicam que houveram alterações referentes a **formatações de código**, semicolons, trailing spaces, lint... (Não inclui alterações em código).

- `refactor` - Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.

- `chore` - Commits do tipo chore indicam **atualizações de tarefas** de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código)

- `ci` - Commits do tipo ci indicam mudanças relacionadas a **integração contínua** (*continuous integration*).

### Recomendações

- Adicione um título consistente com o título do conteúdo;
- Recomendamos que na primeira linha deve ter no máximo 4 palavras;
- Para descrever com detalhes, usar a descrição do commit;

##### Alguns exemplos abaixo:

```shell
git commit -m "docs: Atualizaçao do README"
git commit -m "fix: Loop infinito na linha 50"
git commit -m "feat: Pagina de login"
git commit -m "ci: Modificaçao no Dockerfile"git commit -m "ci: Modificaçao no Dockerfile"
git commit -m "refactor: Passando para arrow functions"
git commit -m "perf: Melhoria no tempo de resposta"
git commit -m "test: Criando novo teste"
```