# encoding: utf-8
"""
@author: xyliao
@contact: xyliao1993@qq.com
"""
import json
import flask
import csv
from flask_cors import *

# Initialize our Flask application and the PyTorch model.
app = flask.Flask(__name__)

CORS(app, supports_credentials=True) #设置允许跨域

str='失败'
@app.route("/predict", methods=["post"])
def predict():
    tableData = []
    if flask.request.method == 'POST':
        print('接受到post请求')
        print(flask.request.values.get("request_type"))
        if flask.request.values.get("request_type"):
            print('接受到request参数')
            with open('deploy_result.csv', 'r') as f:
                reader=csv.DictReader(f)
                for row in reader:
                    tableData.append(dict(row))

            return json.dumps(tableData,sort_keys=True,indent=2,ensure_ascii=False)
    return str



if __name__ == '__main__':

    print("Loading PyTorch model and Flask starting server ...")
    print("Please wait until server has fully started")
    app.run(host='0.0.0.0', port=5002, debug=True)

