# CreditCanvas - Next.js Loan Application Platform

This is a Next.js starter project for CreditCanvas, a loan application and management platform, built within Firebase Studio.

## Technology Stack for this app

*   **Framework**: Next.js (App Router)
*   **UI**: React with ShadCN UI Components
*   **Styling**: Tailwind CSS
*   **Generative AI**: Genkit
*   **Database**: MongoDB
*   **Authentication**: Mock auth (client-side for demo purposes)

## Getting  Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up MongoDB:**
    *   Ensure you have a MongoDB instance (e.g., from MongoDB Atlas).
    *   Update the MongoDB connection string in `src/lib/mongodb.ts`. Replace `<credentials>` with your actual username and password:
        ```typescript
        // src/lib/mongodb.ts
        const MONGODB_URI = "mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.h4pm32y.mongodb.net/?retryWrites=true&w=majority";
        ```
    *   For production, it's highly recommended to use environment variables for your MongoDB URI.

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    The application will typically be available at `http://localhost:9002`.

5.  **Genkit Development (Optional):**
    If you are working with Genkit flows, you might need to run the Genkit development server in a separate terminal:
    ```bash
    npm run genkit:dev
    # or for watching changes
    npm run genkit:watch
    ```

## Project Structure Overview

*   `src/app/`: Contains the Next.js App Router pages and layouts.
*   `src/components/`: Reusable UI components, including ShadCN components.
*   `src/hooks/`: Custom React hooks (e.g., `useAuth`, `useIsMobile`).
*   `src/lib/`: Core logic and utilities.
    *   `src/lib/mongodb.ts`: MongoDB connection and collection access.
    *   `src/lib/services/`: Service layer for data operations (e.g., user management, loan processing).
    *   `src/lib/utils.ts`: General utility functions.
    *   `src/lib/currency-utils.ts`: Currency formatting.
    *   `src/lib/loan-utils.ts`: Loan calculation utilities.
*   `src/ai/`: Genkit related files, including flows.
*   `src/types/`: TypeScript type definitions.
*   `public/`: Static assets.

## Key Features (Implemented or In Progress)

*   User Authentication (Sign Up, Login)
*   Client Dashboard
*   Admin Dashboard (User Management, Loan Management, System Settings)
*   Loan Application Form
*   Loan Calculator
*   Document Verification
*   MongoDB for data persistence

## Admin Access

Upon signup, if a user's name is "Stallone" or their email is "odhiambostallone73@gmail.com", they will be automatically granted admin privileges.

## Further Development

This project is a starter and can be extended with more features, robust error handling, security enhancements, and production-ready deployment configurations.
