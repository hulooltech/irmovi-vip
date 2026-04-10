const DEVICES_SERVICES = {
    apple: {
        id: "apple-services",
        items: {
            // iPhones
            "iPhone 17 Pro Max": 210, 
            "iPhone 17 Pro": 200, 
            "iPhone 17 Air": 200, 
            "iPhone 17": 195,
            "iPhone 16 Pro Max": Y20, 
            "iPhone 16 Pro": 195, 
            "iPhone 16 Plus": 195, 
            "iPhone 16e": 195, 
            "iPhone 16": 190,
            "iPhone 15 Pro Max": 190, 
            "iPhone 15 Pro": 180, 
            "iPhone 15 Plus": 175, 
            "iPhone 15": 165,
            "iPhone 14 Pro Max": 175, 
            "iPhone 14 Pro": 165, 
            "iPhone 14 Plus": 160, 
            "iPhone 14": 160,
            "iPhone 13 Pro Max": 150, 
            "iPhone 13 Pro": 135, 
            "iPhone 13 mini": 120, 
            "iPhone 13": 115,
            "iPhone 12 Pro Max": 100, 
            "iPhone 12 Pro": 95, 
            "iPhone 12 mini": 90, 
            "iPhone 12": 90,
            "iPhone 11 Pro Max": 75, 
            "iPhone 11 Pro": 55, 
            "iPhone 11": 45,
            "iPhone XS Max": 45,
            "iPhone XS": 40, 
            "iPhone XR": 40, 
            "iPhone X": 35,
            "iPhone 8 Plus": 35, 
            "iPhone 8": 35, 
            "iPhone 7 Plus": 30, 
            "iPhone 7": 30,
            "iPhone SE": 30, 
            "iPhone 6s Plus": 25, 
            "iPhone 6s": 25, 
            "iPhone 6 Plus": 25, 
            "iPhone 6": 25,
            // iPads
            "iPad Pro 12.9 (1-6)": 150, 
            "iPad Pro 11 (1-4)": 140, 
            "iPad Pro 10.5": 140, 
            "iPad Pro 9.7": 140,
            "iPad Air 5": 85, 
            "iPad Air 4": 80, 
            "iPad 10": 65, 
            "iPad 9": 55, 
            "iPad 8": 50,
            // Apple Watch
            "Watch Ultra 3": 130, 
            "Watch Ultra 2": 130, 
            "Watch Ultra 1": 120,
            "Watch Series 10/11": 110, 
            "Watch Series 9": 100, 
            "Watch Series 8": 100,
            "Watch Series 7": 90, 
            "Watch Series 6": 70, 
            "Watch Series 5": 65, 
            "Watch Series 4": 60
        }
    },
    android: {
        id: "android-services",
        items: {
            "Samsung FRP Bypass": 15, 
            "Xiaomi Mi Account Remove": 25, 
            "Google Pixel Unlock": 40
        }
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

function openTab(evt, name) {
    let content = document.getElementsByClassName("tab-content");
    for (let i = 0; i < content.length; i++) content[i].style.display = "none";
    let links = document.getElementsByClassName("tab-link");
    for (let i = 0; i < links.length; i++) links[i].className = links[i].className.replace(" active", "");
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
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

function copyWallet() {
    const wallet = "bc1p3w4yfuyu52gdv296nqrs72mfaafkr5qu7u3xmamflrmql0sqvsmqvhazr9";
    navigator.clipboard.writeText(wallet);
    alert("Wallet Address Copied!");
}

function sendFinalOrder() {
    const activeTab = document.querySelector(".tab-link.active").innerText.toLowerCase().includes("apple") ? "apple" : "android";
    const service = document.getElementById(`${activeTab}-services`);
    const imei = document.getElementById("device-imei").value;
    if (!service.value || !imei) { alert("⚠️ Please complete all steps!"); return; }
    alert(`✅ Order Processed!\n\nService: ${service.options[service.selectedIndex].text}\nIMEI: ${imei}\nMethod: Official Apple OFF\nTime: 1-24 Hours`);
}

document.addEventListener("DOMContentLoaded", initializeApp);
