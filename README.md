   # Portfolio CRUD (Laravel + Inertia + React)

   Personal portfolio with a dynamic Projects section (Create, Read, Update, Delete) with server-side validation.

   ## Setup
   1. `composer install`
   2. `npm install`
   3. `cp .env.example .env`, then set the DB_* values (database: portfolio_crud)
   4. `php artisan key:generate`
   5. `php artisan migrate`
   6. `php artisan storage:link`
   7. `npm run dev` (or `node node_modules/vite/bin/vite.js`)
   8. `php artisan serve`, then open http://127.0.0.1:8000

   Manage projects at http://127.0.0.1:8000/projects