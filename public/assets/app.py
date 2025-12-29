from flask import Flask, render_template, request

app = Flask(__name__)

# Home route to render the form
@app.route('/')
def index():
    return render_template('index.html')  # Replace with the correct path to your form

# Route to handle form submission
@app.route('/submit', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        message = request.form['message']

        # Here you can save this data to a database or file, or just print it
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Phone: {phone}")
        print(f"Message: {message}")

        # After submission, you can redirect or render a success page
        return "Form submitted successfully!"

if __name__ == '__main__':
    app.run(debug=True)
