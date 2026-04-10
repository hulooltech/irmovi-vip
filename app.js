const DEVICES_SERVICES = {
    apple: {
        id: "apple-services",
        items: {
            "iPhone 17 Pro Max": 210, "iPhone 17 Pro": 200, "iPhone 17 Air": 200, "iPhone 17": 195,
            "iPhone 16 Pro Max": 205, "iPhone 16 Pro": 195, "iPhone 16 Plus": 195, "iPhone 16": 190,
            "iPhone 15 Pro Max": 190, "iPhone 15 Pro": 180, "iPhone 15 Plus": 175, "iPhone 15": 165,
            "iPhone 14 Pro Max": 175, "iPhone 14 Pro": 165, "iPhone 14 Plus": 160, "iPhone 14": 160,
            "iPhone 13 Pro Max": 150, "iPhone 13 Pro": 135, "iPhone 13 mini": 120, "iPhone 13": 115,
            "iPhone 12 Pro Max": 100, "iPhone 12 Pro": 95, "iPhone 12 mini": 90, "iPhone 12": 90,
            "iPhone 11 Pro Max": 75, "iPhone 11 Pro": 55, "iPhone 11": 45,
            "iPhone XS Max": 45, "iPhone XS": 40, "iPhone XR": 40, "iPhone X": 35,
            "iPhone 8 Plus": 35, "iPhone 8": 35, "iPhone 7 Plus": 30, "iPhone 7": 30,
            "iPhone SE": 30, "iPhone 6s Plus": 25, "iPhone 6s": 25, "iPhone 6 Plus": 25, "iPhone 6": 25,
            "iPad Pro 12.9 (1-6)": 150, "iPad Pro 11 (1-4)": 140, "iPad Air 5": 85, "iPad 10": 65,
            "Watch Ultra 2": 130, "Watch Series 10/11": 110, "Watch Series 9": 100
        }
    },
    android: {
        id: "android-services",
        items: { "Samsung FRP Bypass": 15, "Xiaomi Account Remove": 25 }
    }
};

function initializeApp() {
    for (const category in DEVICES_SERVICES) {
        const select = document.getElementById(DEVICES_SERVICES[category].id);
        if (!select) continue;
        select.innerHTML = `<option value="">-- Select Model --</option>`;
        const items = DEVICES_SERVICES[category].items;
        for (const name in items) {
            const option = document.createElement("option");
            option.value = items[name];
            option.textContent = `${name} ($${items[name]})`;
            select.appendChild(option);
        }
    }
}

function toggleImeiField(category) {
    const select = document.getElementById(`${category}-services`);
    const container = document.getElementById("imei-container");
    const priceSpan = document.getElementById("final-price");
    if (select.value) {
        container.style.display = "block";
        priceSpan.textContent = `- $${select.value}`;
    } else {
        container.style.display = "none";
        priceSpan.textContent = "";
    }
}

function openTab(evt, name) {
    let content = document.getElementsByClassName("tab-content");
    for (let i = 0; i < content.length; i++) content[i].style.display = "none";
    let links = document.getElementsByClassName("tab-link");
    for (let i = 0; i < links.length; i++) links[i].className = links[i].className.replace(" active", "");
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

function sendFinalOrder() {
    const activeTab = document.querySelector(".tab-link.active").innerText.toLowerCase().includes("apple") ? "apple" : "android";
    const service = document.getElementById(`${activeTab}-services`);
    const imei = document.getElementById("device-imei").value;
    if (!service.value || !imei) { alert("Please complete steps!"); return; }

    const orderID = "VIP-" + Math.floor(10000 + Math.random() * 90000);
    document.getElementById("display-order-id").innerText = orderID;
    document.getElementById("display-service").innerText = service.options[service.selectedIndex].text;
    document.getElementById("orderModal").style.display = "flex";
}

function closeModal() { document.getElementById("orderModal").style.display = "none"; }

function copyWallet() {
    navigator.clipboard.writeText("bc1p3w4yfuyu52gdv296nqrs72mfaafkr5qu7u3xmamflrmql0sqvsmqvhazr9");
    alert("BTC Address Copied!");
}

function trackOrder() {
    const id = document.getElementById("track-input").value;
    if(!id) return;
    alert(`🔍 Tracking: ${id}\nStatus: Processing (1-24h)\nMethod: Official Apple OFF`);
}

document.addEventListener("DOMContentLoaded", initializeApp);
