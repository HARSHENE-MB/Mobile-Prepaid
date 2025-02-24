document.addEventListener("DOMContentLoaded", function() {
    const userData = {
        mobileNumber: "9876543210",
        accountType: "Prepaid",
        status: "Active",
        plans: ["1GB/day - 28 days", "Unlimited Calls - 56 days"],
        history: ["Logged in on Feb 16", "Changed SIM on Jan 10"],
        transactions: ["Recharge - 120", "Payment - 120"]
    };

    document.getElementById("mobile-number").textContent = userData.mobileNumber;
    document.getElementById("account-type").textContent = userData.accountType;
    document.getElementById("status").textContent = userData.status;

    function populateList(elementId, items) {
        const list = document.getElementById(elementId);
        items.forEach(item => {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = item;
            list.appendChild(li);
        });
    }

    populateList("plans-list", userData.plans);
    populateList("history-list", userData.history);
    populateList("transactions-list", userData.transactions);
});
