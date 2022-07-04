from flask import Blueprint
test=Blueprint("test",__name__,url_prefix="/test")

@test.route('/')
def index():
    return {"status":200,"msg":"接口正常"}


