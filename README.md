# Sobre o Projeto

Este projeto foi desenvolvido utilizando as tecnologias Vite, TypeScript e SCSS. A arquitetura é baseada em componentes, o que promove uma alta reutilização de código e facilita a manutenção. A metodologia Clean Code foi aplicada para garantir um código limpo, organizado e fácil de entender.

## Tecnologias Utilizadas

- Vite: Ferramenta de build rápida para desenvolvimento frontend.
- TypeScript: Linguagem de tipagem estática para JavaScript, proporcionando maior segurança e escalabilidade.
- SCSS: Pré-processador CSS que oferece recursos avançados de estilização.

## Estrutura do Projeto:

- assets: Contém arquivos de imagens utilizados no projeto.
- components: Contém os componentes reutilizáveis da aplicação.
- pages: Contém as páginas da aplicação.
- services: Contém funções utilizadas para requisições api.
- themes: Contém o tema de cores utilizado no projeto.
- utils: Contém funções que podem se repetir no projeto como os formatadores.

## Componentização:

A componentização é um dos pilares do React. Consiste em dividir a interface do usuário em componentes menores e mais gerenciáveis. Cada componente possui sua própria lógica e estilo, o que facilita a organização do código e a reutilização de elementos.

- Reutilização: Componentes podem ser reutilizados em diferentes partes da aplicação.
- Manutenção: Facilita a manutenção do código, pois as alterações são localizadas.
- Teste: Permite testar os componentes de forma isolada.
- Colaboração: Facilita a colaboração entre desenvolvedores.

## Como Inicializar o Projeto:

- npm install
- npm run dev (para inicializar o frontend)
- npm run backend (para inicializar o backend, foi utilizado o json-server para isso)

## Observações

- Sem bibliotecas externas: A decisão de não utilizar bibliotecas externas foi intencional para demonstrar a capacidade de criar componentes personalizados e eficientes sem a necessidade de ferramentas adicionais.
- Clean Code: O código foi escrito seguindo os princípios do Clean Code, como nomes de variáveis e funções significativos, funções com responsabilidades únicas.
