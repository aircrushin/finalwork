from flask import Flask,request,jsonify
import sqlite3
app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False

@app.route('/',methods=['POST'])
def main():
    if request.method=='POST':
        data=request.form
        con=sqlite3.connect("userdata.db")
        cur=con.cursor()
        sql="CREATE TABLE IF NOT EXISTS userdata(username TEXT,password TEXT,email TEXT)"
        cur.execute(sql)
        find="SELECT * FROM userdata WHERE username=? AND password=?"
        cur=con.execute(find,(data.get('username',-1),data.get('password',-1)))
        checkdata= len(cur.fetchall())
        cur.close()
        con.close()
        if checkdata:
            return jsonify({"status":200,"message":"登陆成功"})
        return jsonify({"status":"404","message":"登录失败"})
@app.route('/reg',methods=['POST'])
def reg():
    if request.method=='POST':
        try:
            data = request.form
            con = sqlite3.connect("userdata.db")
            cur = con.cursor()
            sql = "CREATE TABLE IF NOT EXISTS userdata(username TEXT,password TEXT,email TEXT)"
            cur.execute(sql)
            newData = "INSERT INTO userdata VALUES(?,?,?)"
            cur = con.execute(newData,(data.get('username', -1), data.get('password', -1), data.get('email', -1)))
            con.commit()
            cur.close()
            con.close()
            return jsonify({"status": 200, "message": "注册成功"})
        except:
            return jsonify({"status": "404", "message": "注册失败"})

if __name__ == '__main__':
    app.run()

