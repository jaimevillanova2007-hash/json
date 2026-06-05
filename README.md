# Workspace Reservation System (SPA)

## What is this system about?
It is a professional platform designed to manage the reservation of meeting rooms, private offices, and coworking spaces within a company. It uses modern technologies like **Vanilla JavaScript**, **TailwindCSS** for design, and **JSON Server** to simulate a real database environment.

---

## Main Features

### 1. Role-Based Access Control (RBAC)
*   **Administrators:**
    *   Access to a global statistics dashboard.
    *   Ability to view all reservations from all users.
    *   Power to approve or reject pending requests.
    *   Full management (Create, Edit, Delete) of workspaces.
*   **Standard Users:**
    *   Personal panel to view only their own reservations.
    *   Ability to request new spaces.
    *   Options to edit or cancel their own requests (subject to status rules).

### 2. Security
*   **Authentication:** The system requires a valid email and password to log in.
*   **Persistence:** Sessions are maintained using `localStorage`, keeping the user logged in even after a page refresh.
*   **Route Protection:** Unauthorized users are redirected to the login page, and specific roles are restricted from accessing administrative sections.

### 3. Business Rules
*   **No Duplicates:** The system prevents overlapping reservations (same space, date, and time).
*   **Status Workflow:** Reservations transition through "Pending", "Approved", "Rejected", or "Cancelled".
*   **Modification Restrictions:** 
    *   Users can only edit reservations that are still in "Pending" status.
    *   Once a reservation is "Approved", it can only be cancelled, not modified.

---

## Technical Structure
*   **Modular Architecture:** The project is organized into **Controllers** (logic and event handling), **Views** (dynamic HTML generation), and **Components** (reusable UI elements like the sidebar or reservation cards).
*   **True SPA:** Navigation is instant via a custom router. The page never reloads completely, ensuring a smooth and fluid user experience.

---

## How to use (Instructions)

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development environment:**
    ```bash
    npm run dev
    ```
    *This command will start both the Vite frontend and the JSON Server concurrently.*

---

## Test Credentials

### Administrator
*   **Email:** `admin@test.com`
*   **Password:** `A123456`

### Standard User
*   **Email:** `user@test.com`
*   **Password:** `A123456`

### Standard User 2
*   **Email:** `user2@test.com`
*   **Password:** `A123456`

---
*This project was developed as a performance test for modern JavaScript frontend development.*

