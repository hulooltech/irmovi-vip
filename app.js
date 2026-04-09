const DEVICES_DATA = {
    iphone: {
        title: "iPhone",
        items: {
            "iPhone 17 Pro Max": 210, "iPhone 17 Pro": 200, "iPhone 16 Pro Max": 205,
            "iPhone 15 Pro Max": 190, "iPhone 11": 45
        }
    },
    ipad: {
        title: "iPad",
        items: {
            "iPad Pro 12.9": 150, "iPad Air 5": 85, "iPad 10": 65
        }
    },
    watch: {
        title: "Watch",
        items: {
            "Ultra 3": 120, "Series 10": 100, "Series 9": 90
        }
    }
};

function initializeApp() {
    for (const category in DEVICES_DATA) {
        const select = document.getElementById(category);
        if (!select) continue;

        select.innerHTML = `<option value="">Select ${DEVICES_DATA[category].title}</option>`;
        
        const items = DEVICES_DATA[category].items;
        for (const name in items) {
            const option = document.createElement("option");
            option.value = items[name];
            option.textContent = `${name} - $${items[name]}`;
            select.appendChild(option);
        }
    }
}

function sendOrder() {
    const iphone = document.getElementById("iphone").value;
    const payment = document.getElementById("payment").value;

    if (!iphone) {
        alert("⚠️ Please select at least one iPhone model.");
        return;
    }

    console.log("VIP Order Sent:", { devicePrice: iphone, method: payment });
    alert("🚀 VIP Order Received! We will process your request immediately.");
}

document.addEventListener("DOMContentLoaded", initializeApp);
