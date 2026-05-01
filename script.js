// NAVIGATION
// 1️ Select all sections (pages)
const pages = document.querySelectorAll("section");

// 2️ Select all navigation links
const links = document.querySelectorAll("nav a");

// 3️ Function to hide all pages
function hideAllPages() {
    pages.forEach(page => {
        page.style.display = "none";
    });
}

// 4️ Function to show a specific page
function showPage(pageId) {
    hideAllPages(); // hide everything first
    document.getElementById(pageId).style.display = "block";
}

// 5️ Add click event to each nav link
links.forEach(link => {
    link.addEventListener("click", function(event) {

        event.preventDefault(); // prevent page reload

        // Get the clicked link text (ex: "Home", "Products")
        const pageName = this.textContent.toLowerCase().trim();

        // Match link text to section id
        if (pageName === "home") showPage("home");
        else if (pageName === "account") showPage("account");
        else if (pageName === "products") showPage("products");
        else if (pageName === "payment") showPage("payment");
        else if (pageName === "review") showPage("page5");

    });
});

// 6️ Show home page by default when site loads
hideAllPages();
showPage("home");

// CALCUL IN PAGE PRODUCTS :
 // Prices
const foodPrice = 6;
const woodPrice = 6;
const stonePrice = 6;
const goldPrice = 12;

// Inputs
const foodQty = document.getElementById("foodQty");
const woodQty = document.getElementById("woodQty");
const stoneQty = document.getElementById("stoneQty");
const goldQty = document.getElementById("goldQty");

// Totals display
const foodTotal = document.getElementById("foodTotal");
const woodTotal = document.getElementById("woodTotal");
const stoneTotal = document.getElementById("stoneTotal");
const goldTotal = document.getElementById("goldTotal");

// Final total
const finalTotal = document.getElementById("finalTotal");

// Main function
function calculateTotal() {

    // get values (if empty = 0)
    const f = Number(foodQty.value) || 0;
    const w = Number(woodQty.value) || 0;
    const s = Number(stoneQty.value) || 0;
    const g = Number(goldQty.value) || 0;

    // calculate each product
    const foodResult = f * foodPrice;
    const woodResult = w * woodPrice;
    const stoneResult = s * stonePrice;
    const goldResult = g * goldPrice;

    // display each total
    foodTotal.innerText = "Total: " + foodResult + "$";
    woodTotal.innerText = "Total: " + woodResult + "$";
    stoneTotal.innerText = "Total: " + stoneResult + "$";
    goldTotal.innerText = "Total: " + goldResult + "$";

    // final bill
    const total = foodResult + woodResult + stoneResult + goldResult;

    finalTotal.innerText = "Total Price: " + total + "$";
}

// Events 
foodQty.addEventListener("input", calculateTotal);
woodQty.addEventListener("input", calculateTotal);
stoneQty.addEventListener("input", calculateTotal);
goldQty.addEventListener("input", calculateTotal);

// FORM PAGE 2 AND 5 : 

// PAGE 2 :
// Select the form
const accountForm = document.querySelector("#account form");

// Add submit event
accountForm.addEventListener("submit", function(event) {

   event.preventDefault(); // stop page reload

   // Get input values
   const name = document.querySelector("#account input[type='text']").value;

   // Simple message
   alert("Account created successfully ");

});

// PAGE 5 : 
// Select review form
const reviewForm = document.querySelector("#page5 form");

reviewForm.addEventListener("submit", function(event) {

   event.preventDefault();

   // Get values
   const rating = document.getElementById("rating").value;
   const comment = document.getElementById("comment").value;

   // Show result
   alert("Thanks for your review  " + rating);

});
 
 


