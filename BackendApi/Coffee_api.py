from flask import Flask, request, jsonify
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

@app.route("/get/users", methods=["GET"])
def home():
    with open("new.txt","r") as f:
        data=f.read()
        f.close()

    return jsonify({"email":f"{data}"}), 200


@app.route("/users/emails",methods=["POST"])
def user():
    Data = request.get_json()
    user_email = Data.get("email")

    with open("new.txt","r") as f:
        data=f.read()
        f.close()

    with open("new.txt","w") as f:
        f.write(f"{user_email} ###### {data}")
        f.close
    
    return jsonify({"massage":"email recived"}), 200

if __name__=="__main__":
    app.run(
        debug=True
    )