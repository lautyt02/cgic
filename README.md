# CGIC Landing Page

Guía rápida para ejecutar el backend (Flask) y el frontend (React + Vite) en local.

## Prerrequisitos
- Node.js 18 o superior (incluye `npm`)
- Python 3.11 o superior

## Backend (Flask)
1) Entrar a la carpeta y crear un entorno virtual:
   - Linux/macOS:
     ```bash
     cd backend
     python -m venv venv
     source venv/bin/activate
     ```
   - Windows (PowerShell):
     ```powershell
     cd backend
     python -m venv venv
     .\venv\Scripts\Activate.ps1
     ```
2) Instalar dependencias:
   ```bash
   pip install -r requirements.txt
   ```
3) Ejecutar el servidor:
   ```bash
   python app.py
   ```
   - URL: `http://localhost:5000`

Notas:
- Para salir del entorno virtual: `deactivate`.
- CORS está habilitado para permitir que el frontend consuma la API en desarrollo.

## Frontend (Vite + React)
1) Entrar a la carpeta e instalar dependencias:
   ```bash
   cd frontend
   npm install
   ```
2) Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```
   - URL: `http://localhost:5173`
   - Vite está configurado para hacer proxy de `/api` a `http://localhost:5000`.

## Verificación rápida
- Backend: abrir `http://localhost:5000/api/health` o usar curl:
  ```bash
  curl http://localhost:5000/api/health
  ```
- Frontend: abrir `http://localhost:5173` en el navegador.

## Endpoints disponibles
- `GET /api/health` — health check
- `GET /api/content` — contenido informativo y logos
- `POST /api/contact` — envía formulario de contacto (JSON)

Ejemplo POST:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Ada",
    "apellido": "Lovelace",
    "sector": "Tecnología",
    "mail": "ada@example.com"
  }'
```

## Estructura del proyecto
```
frontend/  # SPA React (Vite, Tailwind)
backend/   # API Flask (blueprints, CORS)
```

## Problemas comunes
- Puerto en uso 5000 o 5173: cierra procesos previos o cambia el puerto.
- Certificados/ejecución en Windows: si PowerShell bloquea scripts, ejecuta como admin:
  `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`.

## Scripts útiles
- Frontend build de producción: `cd frontend && npm run build` (previsualizar: `npm run preview`).
- Backend ejecución: `python app.py` (usa `0.0.0.0:5000`).

## Licencia
MIT
