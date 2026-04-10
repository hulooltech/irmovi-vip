const DEVICES_SERVICES = {
    apple: {
        id: "apple-services",
        items: {
            "iPhone 17 Pro Max Unlock": 210,
            "iPhone 16 Pro Max Unlock": 205,
            "Check iCloud Clean/Lost": 3.30,
            "Carrier Simlock Check": 2.50
        }
    },
    android: {
        id: "android-services",
        items: {
            "Samsung FRP Bypass": 15,
            "Xiaomi Mi Account Remove": 25,
            "Samsung Knox Check": 3.00,
            "Android Network Unlock": 50
        }
    }
};

function initializeApp() {
    for (const category in DEVICES_SERVICES) {
        const selectId = DEVICES_SERVICES[category].id;
        const select = document.getElementById(selectId);
        if (!select) continue;

        select.innerHTML = `<option value="">-- Choose ${category.toUpperCase()} Service --</option>`;
        const items = DEVICES_SERVICES[category].items;
        for (const name in items) {
            const price = items[name];
            const option = document.createElement("option");
            option.value = price;
            option.textContent = `${name} (USD ${price.toFixed(2)})`;
            select.appendChild(option);
        }
    }
}

function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) { tabContent[i].style.display = "none"; }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) { tabLinks[i].className = tabLinks[i].className.replace(" active", ""); }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById("imei-container").style.display = "none";
}

function toggleImeiField(category) {
    const select = document.getElementById(`${category}-services`);
    const imeiContainer = document.getElementById("imei-container");
    const finalPriceSpan = document.getElementById("final-price");
    
    if (select.value) {
        imeiContainer.style.display = "block";
        finalPriceSpan.textContent = `- $${parseFloat(select.value).toFixed(2)}`;
    } else {
        imeiContainer.style.display = "none";
        finalPriceSpan.textContent = "";
    }
}

function sendFinalOrder() {
    const activeTab = document.querySelector(".tab-link.active").innerText.toLowerCase().includes("apple") ? "apple" : "android";
    const serviceSelect = document.getElementById(`${activeTab}-services`);
    const imei = document.getElementById("device-imei").value;

    if (!serviceSelect.value || !imei) {
        alert("⚠️ Please select a service and enter the IMEI number!");
        return;
    }

    alert(`✅ Request Sent!\n\nService: ${serviceSelect.options[serviceSelect.selectedIndex].text}\nIMEI: ${imei}\nStatus: Processing...`);
}

document.addEventListener("DOMContentLoaded", initializeApp);
