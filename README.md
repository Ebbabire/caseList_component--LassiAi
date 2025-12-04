# Clinical Case List Component

A standalone, reusable React UI component designed for veterinary clinical applications. This project implements a clean, professional "Case List" view using React and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Adapts seamlessly from mobile to desktop.
- **Status Indicators**: Color-coded badges for "New", "In Progress", and "Completed" statuses.
- **Sorting**: built-in functionality to sort cases by Creation Date (Ascending/Descending).
- **Accessibility**: Keyboard navigation support and semantic HTML.
- **Type Safety**: Fully typed with TypeScript.

## 🛠 Project Structure

```
src/
├── App.tsx                  # Main entry for the demo
├── components/
│   └── CaseList/
│       ├── CaseList.tsx     # The core reusable component
│       ├── CaseListDemo.tsx # Demo wrapper to showcase the component
│       └── mockCases.ts     # Sample data
├── types.ts                 # Shared TypeScript interfaces
└── index.tsx                # Entry point
```

## 📦 Setup & Usage

1. **Install Dependencies**
   Ensure you have a React environment set up with Tailwind CSS configured.

2. **Import the Component**

   ```tsx
   import CaseList from "./components/CaseList/CaseList";
   import { Case } from "./types";

   // ... inside your component
   <CaseList cases={myCaseData} onSelectCase={(id) => handleSelection(id)} />;
   ```

## 🎨 Design Decisions

### 1. Visual Style (Clinical & Minimal)

- **Color Palette**: We utilized `slate` (gray-blue) shades from Tailwind to create a sterile, professional clinical look. High contrast text ensures readability in high-paced environments.
- **Typography**: The `Inter` font family was chosen for its excellent legibility at small sizes, crucial for reading medical complaints and IDs.
- **Badges**: Statuses use semantic colors (Blue for New, Amber for In Progress, Emerald for Completed) to allow users to scan the list rapidly.

### 2. Architecture

- **Separation of Concerns**: The `CaseList` is a pure presentational component. It doesn't fetch data; it receives `cases` as props. This makes it easy to plug into any backend (GraphQL, REST, Firebase).
- **Mock Data Strategy**: Data is separated into `mockCases.ts` to simulate real API responses during development.

### 3. Recent Updates & Changelog

#### **Feature: Date Sorting (v1.1)**

We implemented client-side sorting to improve usability for veterinarians who need to prioritize recent cases or review older history.

- **Why**: Clinical lists often grow long. Users need to toggle between "Newest First" (urgent triage) and "Oldest First" (clearing backlog).
- **Implementation**:
  - Added local state `sortOrder` ('asc' | 'desc').
  - Used `useMemo` to cache the sorted array. This prevents expensive re-sorting operations on every render unless the `cases` prop or `sortOrder` changes.
  - Added a sleek header bar with a toggle button that rotates an icon to indicate direction, maintaining the minimal aesthetic.

#### **Feature: Initial Release (v1.0)**

- Basic list layout with card-style rows.
- Hover states and click handlers.
- Responsive hiding of secondary columns on mobile devices.
