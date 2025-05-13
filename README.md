# Recipe Preservation

A modern web application dedicated to preserving and sharing traditional recipes, culinary history, and food culture.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview
Recipe Preservation is a platform designed to document, preserve, and share traditional recipes and culinary history. The project aims to create a digital archive of food heritage, allowing users to explore recipes, learn about food history, contribute their own recipes, and support preservation efforts.

## Features
- **Recipe Archive**: Browse and search through a collection of preserved recipes
- **Blog Section**: Articles and posts about food history and culinary traditions
- **Contribution System**: Allow users to submit their own traditional recipes
- **History Timeline**: Explore the history of food preservation and culinary traditions
- **Online Store**: Purchase related products or support the preservation effort
- **Donation Platform**: Support the recipe preservation initiative

## Technology Stack
- **Frontend Framework**: React.js with TypeScript
- **Routing**: React Router v6
- **Styling**: Styled Components
- **Icons**: Font Awesome
- **Testing**: Jest and React Testing Library
- **Package Manager**: npm

## Project Structure
```
recipe-preservation/
├── public/                  # Public assets and HTML template
├── src/                     # Source code
│   ├── Assets/              # Images and static assets
│   ├── components/          # Reusable UI components
│   │   ├── Footer.tsx       # Site footer component
│   │   ├── Header.tsx       # Site header/navigation component
│   │   └── RecipeCard.jsx   # Recipe display component
│   ├── data/                # Data files
│   │   ├── blogPosts.ts     # Blog content
│   │   ├── history.ts       # Historical information
│   │   ├── products.ts      # Store products
│   │   └── recipes.js       # Recipe collection
│   ├── pages/               # Page components
│   │   ├── BlogPage.tsx     # Blog section
│   │   ├── ContributePage.jsx # Recipe contribution page
│   │   ├── DonatePage.jsx   # Donation page
│   │   ├── HistoryPage.tsx  # Food history page
│   │   ├── LandingPage.tsx  # Homepage
│   │   └── StorePage.tsx    # Product store page
│   ├── styles/              # Global styles and theme configuration
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx              # Main application component with routing
│   └── index.js             # Application entry point
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/recipe-preservation.git
   cd recipe-preservation
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
   This will launch the application at [http://localhost:3000](http://localhost:3000)

2. Build for production:
   ```
   npm run build
   ```

3. Run tests:
   ```
   npm test
   ```

   <img width="1512" alt="image" src="https://github.com/user-attachments/assets/a0fac785-d741-41ca-85ab-d93834e22a67" />

