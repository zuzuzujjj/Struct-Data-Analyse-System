from flask import Flask
from flask_cors import CORS

from app.controller.testController import test
# 静态资源文件/static/{name}
app = Flask(__name__, static_folder='./static')
# 跨域设置
CORS(app)

if __name__ == '__main__':
    app.register_blueprint(test)
    app.run(host='127.0.0.1', port=8888, debug=True)
