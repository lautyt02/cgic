from flask import Blueprint, jsonify

content_bp = Blueprint('content', __name__)

INFO = [
    {"titulo": "Quiénes somos", "parrafo": "Somos una organización comprometida con el impacto social."},
    {"titulo": "Qué hacemos", "parrafo": "Facilitamos proyectos que transforman comunidades."}
]

LOGOS = [
    {"name": "Fundación Lupa", "imageUrl": None},
    {"name": "Lujan Joven", "imageUrl": None},
    {"name": "Lujan", "imageUrl": None},
    {"name": "Bloomberg", "imageUrl": None},
    {"name": "Extra Brut", "imageUrl": None},
    {"name": "Escuela de Steel frame", "imageUrl": None},
    {"name": "Fondos de Acción climática", "imageUrl": None}
]


@content_bp.route('/api/health')
def health():
    return jsonify({"status": "ok"})


@content_bp.route('/api/content')
def get_content():
    return jsonify({"info": INFO, "logos": LOGOS})
