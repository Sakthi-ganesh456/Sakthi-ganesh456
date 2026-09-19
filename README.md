# Namma Harvest / நம்ம ஹார்வெஸ்ட்

A low-bandwidth marketplace and rural-farm investment platform. The repository is an npm-workspaces monorepo: `frontend/` is a React/Vite customer experience and `backend/` is an Express/MySQL API.

## Local setup

1. Install Node.js 20+ and MySQL 8+.
2. Copy `backend/.env.example` to `backend/.env` and set `DATABASE_URL` and a strong `JWT_SECRET`. Copy `frontend/.env.example` to `frontend/.env` if necessary.
3. Create the database and apply the schema: `mysql -u root -p -e 'CREATE DATABASE rural_harvest'` then `mysql -u root -p rural_harvest < backend/migrations/001_initial_schema.sql`.
4. Run `npm install`, then `npm run dev`. The UI runs on Vite's displayed URL and the API on port 4000.

## API overview

- `POST /api/auth/register`, `POST /api/auth/login`: registration and bearer-token login. Roles are consumer, seller, farmer, investor, and administrator.
- `GET /api/market/products?q=&category=vegetable|fruit`: searchable available market catalogue; `GET /api/market/orders/:id` provides customer order tracking.
- `POST /api/seller/products`, `GET /api/seller/dashboard`: seller/farmer catalogue, inventory seed, and stock dashboard.
- `GET /api/investments/campaigns`, `POST /api/investments/campaigns/:id/investments`: transparent campaign funding and investor contributions.

All protected endpoints require `Authorization: Bearer <token>`. Validation failures produce structured `VALIDATION_ERROR` responses; authorization and unknown-resource failures are similarly machine-readable.

See [the data model](docs/data-model.md) for table ownership and lifecycle notes.
