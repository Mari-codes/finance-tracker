# Finance Track

## Leia em outros idiomas

- [Português (Brasil)](./docs/README.pt-BR.md)

Finance Track é um projeto em **React, Vite e TypeScript** para acompanhamento de finanças pessoais.  
A aplicação lista todas as transações, permite adicionar novas entradas e exibe totais de receitas, despesas e saldo geral.  
O projeto utiliza uma estrutura limpa, um hook personalizado para cálculos de totais e o Prettier para formatação.

---

## Funcionalidades

- Lista de todas as transações
- Adição de novas transações através do botão **+ Transaction**
- Totais de receitas, despesas e saldo
- Lógica de cálculo memoizada com hook personalizado

---

## Stack Tecnológica

| Tecnologia            | Finalidade                            |
| --------------------- | ------------------------------------- |
| **React + Vite**      | Configuração da aplicação e interface |
| **TypeScript**        | Tipagem estática e código mais seguro |
| **CSS Modules**       | Estilos de componentes com escopo     |
| **ESLint & Prettier** | Ferramentas de qualidade e formatação |

---

## Estrutura do Projeto

- Componentes separados por responsabilidade
- Componente Modal para criação de transações
- Pasta `hooks` para lógica compartilhada
- Pasta `types` para modelos de domínio
- Formatação de código com Prettier
- **Validações no modal: só é possível adicionar uma transação quando todos os campos obrigatórios estão preenchidos**

---

## Primeiros Passos

### Pré-requisitos

- Node.js (>= 14.x)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/devfinder.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd devfinder
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

## Executando o Projeto

```sh
npm run dev
```

ou

```bash
yarn dev
```

---

## Capturas de tela

### Página principal (Finance Tracker)

![Página Finance Tracker](./src/assets/screenshots/finance-tracker.png)

### Modal de transação

![Modal de Transação](./src/assets/screenshots/finance-tracker-modal.png)

### Modal com erros de validação (campos obrigatórios não preenchidos)

![Modal com Erros de Validação](./src/assets/screenshots/finance-tracker-modal-validation.png)
