from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows frontend to connect

@app.route('/health')
def health():
    return jsonify({"status": "OK"}), 200

if __name__ == '__main__':
    app.run(debug=True)
