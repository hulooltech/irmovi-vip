/**
 * Apple Device Management System - Premium Edition
 * Updated: 2026 - Including iPhone 17 & Watch Ultra 3
 */

const DEVICES_DATA = {
    iphone: {
        title: "iPhone Models",
        items: {
            "iPhone 17 Pro Max": { price: 210, status: "New Arrival", color: "Titanium" },
            "iPhone 17 Pro": { price: 200, status: "New Arrival", color: "Titanium" },
            "iPhone 17 Air": { price: 200, status: "Slim Edition", color: "Silver" },
            "iPhone 16 Pro Max": { price: 205, status: "Flagship", color: "Black" },
            "iPhone 15 Pro Max": { price: 190, status: "Pre-owned", color: "Blue" },
            "iPhone 11": { price: 45, status: "Budget", color: "Various" }
        }
    },
    ipad: {
        title: "iPad Tablets",
        items: {
            "iPad Pro 12.9": { price: 150, status: "Professional", screen: "XDR" },
            "iPad Air 5": { price: 85, status: "Mid-range", chip: "M1" },
            "iPad 10": { price: 65, status: "Education", chip: "A14" }
        }
    },
    watch: {
        title: "Apple Watch",
        items: {
            "Ultra 3": { price: 120, status: "Sports", durability: "Military Grade" },
            "Series 10": { price: 100, status: "Latest", design: "Thin" },
            "Series 9": { price: 90, status: "Classic", design: "Original" }
        }
    }
};

/**
 * Initializes the dropdowns with a premium look
 */
function initializeApp() {
    for (const category in DEVICES_DATA) {
        const selectElement = document.getElementById(category);
        if (!selectElement) continue;

        // Add default "Select Device" option
        selectElement.innerHTML = `<option value="">-- Choose from ${DEVICES_DATA[category].title} --</option>`;

        const items = DEVICES_DATA[category].items;
        
        for (const [name, details] of Object.entries(items)) {
            const option = document.createElement("option");
            option.value = details.price;
            
            // Premium text formatting: (Name | Price | Status)
            option.textContent = `${name} | $${details.price} (${details.status})`;
            selectElement.appendChild(option);
        }
    }
}

/**
 * Handles order submission with validation
 */
function sendOrder() {
    const iphoneSelect = document.getElementById("iphone");
    const selectedIphonePrice = iphoneSelect?.value;
    const selectedIphoneName = iphoneSelect?.options[iphoneSelect.selectedIndex]?.text;
    
    if (!selectedIphonePrice) {
        showNotification("Please select a device first!", "error");
        return;
    }

    // Processing simulation
    console.log(`Order Received: ${selectedIphoneName}`);
    showNotification("Order placed successfully! We will contact you soon. ✅", "success");
}

/**
 * Modern notification system
 */
function showNotification(message, type) {
    const bgColor = type === "success" ? "#2ecc71" : "#e74c3c";
    
    // Fancy console logging
    console.log(`%c [SYSTEM]: ${message}`, `color: white; background: ${bgColor}; padding: 8px; border-radius: 4px;`);
    
    // Standard alert (Replace with SweetAlert2 for even better luxury)
    alert(message);
}

// Boot up the application
document.addEventListener("DOMContentLoaded", initializeApp);
