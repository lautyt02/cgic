from flask import Blueprint, request, jsonify
from models.submission import Submission
import re

contact_bp = Blueprint('contact', __name__)


def is_email(value: str | None) -> bool:
    return bool(value) and re.match(r"[^@]+@[^@]+\.[^@]+", value)


@contact_bp.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json() or {}
    submission = Submission.from_dict(data)
    errors = submission.validate()
    if errors:
        return jsonify({"ok": False, "error": ", ".join(errors)}), 400
    return jsonify({"ok": True, "message": "Solicitud recibida"}), 201
