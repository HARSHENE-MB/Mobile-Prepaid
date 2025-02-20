const rechargePlans = {
    "recharge_plans": [
        {
            "category": "Family Plan",
            "plans": [
                { "id": 101, "name": "Family Pack - 4 Users", "price": 599, "data": "2GB/day per user", "validity": "28 days", "benefits": "Unlimited Calls, 100 SMS/day, OTT Subscription", "bestseller": false },
                { "id": 102, "name": "Family Pack - 6 Users", "price": 799, "data": "3GB/day per user", "validity": "28 days", "benefits": "Unlimited Calls, 200 SMS/day, Netflix", "bestseller": true }
            ]
        },
        {
            "category": "Data Validity Plan",
            "plans": [
                { "id": 201, "name": "Long-Term Data Plan", "price": 499, "data": "50GB total", "validity": "90 days", "benefits": "Unlimited Calls, 100 SMS/day", "bestseller": false },
                { "id": 202, "name": "Super Data Saver", "price": 699, "data": "100GB total", "validity": "120 days", "benefits": "Unlimited Calls", "bestseller": true }
            ]
        },
        {
            "category": "Study Plan",
            "plans": [
                { "id": 301, "name": "Student Internet Pack", "price": 299, "data": "3GB/day", "validity": "30 days", "benefits": "Free access to educational apps", "bestseller": true },
                { "id": 302, "name": "Online Class Pack", "price": 399, "data": "4GB/day", "validity": "45 days", "benefits": "Zoom, Google Meet Access", "bestseller": false }
            ]
        },
        {
            "category": "More Plans",
            "plans": [
                { "id": 401, "name": "Super Saver Pack", "price": 199, "data": "1GB/day", "validity": "28 days", "benefits": "Unlimited Calls", "bestseller": false },
                { "id": 402, "name": "Budget Data Pack", "price": 149, "data": "500MB/day", "validity": "28 days", "benefits": "Basic Calls & SMS", "bestseller": true }
            ]
        }
    ]
};

//  Function to Render Plans (Filtered by Category & Search Query)
function renderPlans(categoryFilter = null, searchQuery = "") {
    const container = document.getElementById("plans-container");
    if (!container) return;
    
    container.innerHTML = "";
    let selectedPlans = [];

    //  Get plans from the selected category
    rechargePlans.recharge_plans.forEach(category => {
        if (!categoryFilter || category.category === categoryFilter) {
            selectedPlans = [...selectedPlans, ...category.plans];
        }
    });

    // Apply search filter
    if (searchQuery.trim() !== "") {
        selectedPlans = selectedPlans.filter(plan => 
            plan.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    //  Sort bestsellers first
    selectedPlans.sort((a, b) => b.bestseller - a.bestseller);

    selectedPlans.forEach(plan => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", plan.id);

        card.innerHTML = `
            ${plan.bestseller ? '<span class="bestseller-badge">Bestseller</span>' : ''}
            <h3>${plan.name}</h3>
            <p class="price">₹${plan.price}</p>
            <p><strong>Data:</strong> ${plan.data}</p>
            <p><strong>Validity:</strong> ${plan.validity}</p>
            <p><strong>Benefits:</strong> ${plan.benefits}</p>
            <a href="prepaid.html" class="btn" onclick="storeSelectedPlan(event, ${plan.id})">Recharge Now</a>
        `;

        container.appendChild(card);
    });

    highlightSelectedPlan();
}

// Function to Highlight the Selected Plan
function highlightSelectedPlan() {
    const selectedPlanId = localStorage.getItem("selectedPlan");

    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("highlight");
    });

    if (selectedPlanId) {
        const selectedCard = document.querySelector(`.card[data-id="${selectedPlanId}"]`);
        if (selectedCard) {
            selectedCard.classList.add("highlight");
        }
    }
}

// Function to Store Selected Plan ID in Local Storage
function storeSelectedPlan(event, planId) {
    event.preventDefault();
    localStorage.setItem("selectedPlan", planId);
    window.location.href = "./Payment.html";
}

//  Function to Filter Plans by Category
function filterPlans(category) {
    renderPlans(category);
    localStorage.removeItem("selectedPlan"); //  Clear selection on category change
}

// Function to Handle Search Input
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-bar");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            renderPlans(null, searchInput.value);
        });
    }
});

//  Show bestsellers on index.html, all plans (default) on prepaid.html
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("prepaid-plans-container")) {
        renderPlans(); // Default: show all categories on prepaid.html
    }
    if (document.getElementById("plans-container")) {
        renderPlans(); // Default: show all plans
    }
});

//  Menu Toggle Function (Fixes Click Navigation Issue)
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menuContainer = document.getElementById("menu-container");

    if (menuButton && menuContainer) {
        menuButton.addEventListener("click", () => {
            menuContainer.classList.toggle("active");
        });
    }

    //  Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (menuContainer && !menuButton.contains(event.target) && !menuContainer.contains(event.target)) {
            menuContainer.classList.remove("active");
        }
    });
});
