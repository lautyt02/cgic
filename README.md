# CGIC Landing Page

Proyecto full-stack con arquitectura MVC.

## Tecnologías
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Flask con CORS

## Requisitos
- Node.js 18+
- Python 3.11+

## Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
Servidor en `http://localhost:5000`.

## Frontend
```bash
cd frontend
npm install
npm run dev
```
Aplicación en `http://localhost:5173`.

## Endpoints
- `GET /api/health`
- `GET /api/content`
- `POST /api/contact`

## Estructura
```
/frontend - SPA React
/backend  - API Flask
```

## Licencia
MIT
