import flask

app = flask.Flask(__name__)

@app.route("/")
def home():
    Data = ["Python", "Html" , "Css"]
    return flask.render_template("index.html", mydata = Data)


@app.route("/about")
def about():
    return "About page"

@app.route("/contact")
def contact():
    return flask.render_template("contact.html")



if __name__ == "__main__":
    # print("Application started")
    app.run()
