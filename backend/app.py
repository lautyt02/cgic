from flask import Flask
from flask_cors import CORS
from controllers.content_controller import content_bp
from controllers.contact_controller import contact_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    CORS(app)
    app.register_blueprint(content_bp)
    app.register_blueprint(contact_bp)
    return app


app = create_app()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
