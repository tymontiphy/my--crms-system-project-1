# my--crms-system-project-1

## NEWS HUB CRM System
The NEWS HUB CRM System is a web-based application that allows users to manage customer information and track news related to CNN news, leading in international news on how the world fairing.

## Features
1. Customer Management:
    - Add new customers
    - Update existing customer information
    - Delete customers
    - Display a list of all customers
2. News Feed:
    - Fetch and display the latest news articles related to news API
    - Display the news articles with relevant details like author, title, description, published date, and a link to the full article

## Technologies Used
- HTML
- CSS
- JavaScript
- NewsAPI

## GETTING STARTED
1. clone the repository
git clone  https://github.com/tymontiphy/my--crms-system-project-1.git
Install the required dependencies:
If you're using json-server to serve the customer data, install it globally:

2. If you're using json-server to serve the customer data, install it globally:

  npm install -g json-server

3. Start the local server
  for the customer data:
  json-server --watch db.json
  This will start the server at http://localhost:3000/customers.
4. Open the index.html file in your web browser.

## Usage
 1. Customer Management:
Fill out the form with the customer's name, email, phone, and orders.
Click the "Add Customer" button to create a new customer or update an existing one.
The customer list will be displayed below the form, with options to edit or delete the customer.
 2. News Feed:
The news articles related to CNN will be displayed in the "NEWS TRENDS" section of the page.
Each article will include the author, title, description, published date, content, and a link to the full article.
## Configuration
The apiKey variable in the JavaScript code is set to . This is a sample "https://saurav.tech/NewsAPI/everything/cnn.json" API key from NewsAPI. You can replace it with your own API key if you want to use a different news source.

The localApiUrl variable in the JavaScript code is set to 'http://localhost:3000/customers'. This is the URL for the local server serving the customer data. If you're using a different server or endpoint, update this variable accordingly.

## Contributing
If you find any issues or have suggestions for improvements, feel free to create a new issue or submit a pull request.

## author
NAME : simon tiphy
EMAIL : simontiphy@gmail.com
## License
This project is licensed under the MIT License.

## code .