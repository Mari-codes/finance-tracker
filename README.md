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
