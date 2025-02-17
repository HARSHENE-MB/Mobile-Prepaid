// ✅ JSON Data (Can be fetched from API)
const rechargePlans = {
    "recharge_plans": [
        {
            "category": "Family Plan",
            "plans": [
                {
                    "id": 101,
                    "name": "Family Pack - 4 Users",
                    "price": 599,
                    "data": "2GB/day per user",
                    "validity": "28 days",
                    "benefits": "Unlimited Calls, 100 SMS/day, OTT Subscription"
                }
            ]
        },
        {
            "category": "Data Validity Plan",
            "plans": [
                {
                    "id": 201,
                    "name": "Long-Term Data Plan",
                    "price": 499,
                    "data": "50GB total",
                    "validity": "90 days",
                    "benefits": "Unlimited Calls, 100 SMS/day"
                }
            ]
        },
        {
            "category": "Study Plan",
            "plans": [
                {
                    "id": 301,
                    "name": "Student Internet Pack",
                    "price": 299,
                    "data": "3GB/day",
                    "validity": "30 days",
                    "benefits": "Free access to educational apps, Unlimited Calls"
                }
            ]
        },
        {
            "category": "More Plans",
            "plans": [
                {
                    "id": 401,
                    "name": "Super Saver Pack",
                    "price": 199,
                    "data": "1GB/day",
                    "validity": "28 days",
                    "benefits": "Unlimited Calls, 100 SMS/day"
                }
            ]
        }
    ]
};

// ✅ Function to Render Plans
function renderPlans() {
    const container = document.getElementById("plans-container");
    container.innerHTML = ""; // Clear existing content

    rechargePlans.recharge_plans.forEach(category => {
        category.plans.forEach(plan => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("data-category", category.category);

            card.innerHTML = `
                <h3>${plan.name}</h3>
                <p class="price">₹${plan.price}</p>
                <p><strong>Data:</strong> ${plan.data}</p>
                <p><strong>Validity:</strong> ${plan.validity}</p>
                <p><strong>Benefits:</strong> ${plan.benefits}</p>
                <a href="#" class="btn">Recharge Now</a>
            `;

            container.appendChild(card);
        });
    });
}

// ✅ Function to Filter Plans
function filterPlans(category) {
    const allCards = document.querySelectorAll(".card");

    allCards.forEach(card => {
        if (card.getAttribute("data-category") === category) {
            card.style.display = "block"; // Show matching plans
        } else {
            card.style.display = "none"; // Hide others
        }
    });
}

// ✅ Render plans on page load
document.addEventListener("DOMContentLoaded", renderPlans);
