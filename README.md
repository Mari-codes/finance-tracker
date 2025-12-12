# Finance Track

## Read this in other languages

- [Português (Brasil)](./docs/README.pt-BR.md)

Finance Track is a project built with **React, Vite, and TypeScript** for tracking personal finances.  
The application lists all transactions, allows adding new entries, and displays totals for income, expenses, and overall balance.  
It follows a clean structure, uses a custom hook for totals calculation, and applies Prettier for code formatting.

---

## Features

- Display a list of all transactions
- Add new transactions via the **+ Transaction** button
- Show totals for income, expenses, and balance
- Optimized calculation logic with a memoized custom hook
- **Form validation in the modal: transactions can only be added when all required fields are filled**

---

## Tech Stack

| Technology            | Purpose                                     |
| --------------------- | ------------------------------------------- |
| **React + Vite**      | Application setup and UI framework          |
| **TypeScript**        | Static typing for safer, more reliable code |
| **CSS Modules**       | Scoped and maintainable component styles    |
| **ESLint & Prettier** | Code quality and formatting tools           |

---

## Project Structure

- Components organized by responsibility
- Modal component for creating transactions
- `hooks` folder for shared logic
- `types` folder for domain models
- Code formatting enforced with Prettier

---

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/devfinder.git
   ```
2. Navigate to the project folder:
   ```bash
   cd devfinder
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Running the Project

```sh
npm run dev
```

or

```bash
yarn dev
```

---

## Screenshots

### Finance Tracker main page

![Finance Tracker Page](./src/assets/screenshots/finance-tracker.png)

### Transaction modal

![Transaction Modal](./src/assets/screenshots/finance-tracker-modal.png)

### Modal with validation errors (required fields not filled)

![Validation Error Modal](./src/assets/screenshots/finance-tracker-modal-validation.png)
