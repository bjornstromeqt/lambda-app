
from flask import Flask, render_template, request, redirect

TEMPLATE_FOLDER = 'build'
STATIC_FOLDER = 'build/static'


def create_app():

    app = Flask(
        __name__,
        template_folder=TEMPLATE_FOLDER,
        static_folder=STATIC_FOLDER,
        instance_relative_config=True
    )

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def render_index(path):
        return render_template('index.html')

    @app.after_request
    def add_header(response):
        return response

    return app


app = create_app()

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, threaded=True)
