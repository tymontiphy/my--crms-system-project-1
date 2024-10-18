

document.addEventListener("DOMContentLoaded", () => {
    const customerForm = document.getElementById("customer-form");
    const customerList = document.getElementById("customer-list");
    const customerIdInput = document.getElementById("customer-id");
    const customerNameInput = document.getElementById("customer-name");
    const customerEmailInput = document.getElementById("customer-email");
    const customerPhoneInput = document.getElementById("customer-phone");
    const customerOrdersInput = document.getElementById("customer-Orders");
    const newsContainer = document.getElementById("news-container");

    // Fetch and display customers
    async function fetchCustomers() {
        //make request to customer customer data from server
        const response = await fetch("http://localhost:3000/customers");
        const customers = await response.json();
        //display customers in the list
        displayCustomers(customers);
    }

    // Display customers in the list
    function displayCustomers(customers) {
        customerList.innerHTML = "";
        //clear the current list
        customers.forEach(customer => {
            const listItem = document.createElement("li");
            //add class for styling
            listItem.className = "customer-item";
            listItem.innerHTML = `
                <span>${customer.name} - ${customer.email} - ${customer.phone} - ${customer.Orders}</span>
                <div>
                    <button class="edit-btn" data-id="${customer.id}">Edit</button>
                    <button class="delete-btn" data-id="${customer.id}">Delete</button>
                </div>
            `;
            customerList.appendChild(listItem);
        });
    }

    // Fetch news articles from public API
    async function fetchNews() {
        //make a request to news article
        const response = await fetch("https://saurav.tech/NewsAPI/everything/cnn.json");
        //parse the json data
        const data = await response.json();
        //display news articles 
        displayNews(data.articles);
    }

    // Display news articles
    function displayNews(articles) {
        newsContainer.innerHTML = "";
        articles.forEach(article => {
            //create a DIV for each articles
            const articleDiv = document.createElement("div");
            articleDiv.innerHTML = `
                <h2>${article.author}</h2>
                <p>${article.title}</p>
                <p>${article.description}</p>
                <p>${article.publishedAt}</p>
                <p>${article.content}</p>
                <img src="${article.urlToImage}"  alt="${article.title}"  width="800" height="800">
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(articleDiv);
        });
    }

    // Add or update customer on form submit
    customerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const id = customerIdInput.value;
        const customer = {
            //create a customer object from the inputs
            name: customerNameInput.value,
            email: customerEmailInput.value,
            phone: customerPhoneInput.value,
            Orders: customerOrdersInput.value,
        };

        if (id) {
            // Update existing customer
            await fetch(`http://localhost:3000/customers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(customer)
            });
        } else {
            // Create new customer
            await fetch("http://localhost:3000/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(customer)
            });
        }

        customerForm.reset();
        //clear the customer ID input
        customerIdInput.value = "";
        //refresh customer list
        fetchCustomers();
    });

    // Edit customer
    customerList.addEventListener("click", async (event) => {
        if (event.target.classList.contains("edit-btn")) {
            const id = event.target.dataset.id;
            const response = await fetch(`http://localhost:3000/customers/${id}`);
            const customer = await response.json();

           //populate the form fields with the customer data
            customerIdInput.value = customer.id;
            customerNameInput.value = customer.name;
            customerEmailInput.value = customer.email;
            customerPhoneInput.value = customer.phone;
            customerOrdersInput.value = customer.Orders;
        }

        // Delete customer when button is clicked
        if (event.target.classList.contains("delete-btn")) {
            const id = event.target.dataset.id;
            await fetch(`http://localhost:3000/customers/${id}`, {
                method: "DELETE"
            });
            //refresh customer list after deletion
            fetchCustomers();
        }
    });

    // Initial fetch
    fetchCustomers();
    // Fetch news articles on page load
    fetchNews(); 
});
