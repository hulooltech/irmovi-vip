function renderProducts() {
  const iphoneDiv = document.getElementById("iphone-list");
  const ipadDiv = document.getElementById("ipad-list");

  products.forEach(p => {
    const item = `
      <div class="card">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <input type="text" placeholder="IMEI / Serial" id="serial-${p.name}">
        <button onclick="order('${p.name}', ${p.price})">Order</button>
      </div>
    `;

    if (p.category === "iphone") {
      iphoneDiv.innerHTML += item;
    } else {
      ipadDiv.innerHTML += item;
    }
  });
}

function order(name, price) {
  const serial = document.getElementById(`serial-${name}`).value;

  if (!serial) {
    alert("Enter IMEI / Serial");
    return;
  }

  alert(`Order Sent:
Device: ${name}
Price: $${price}
Serial: ${serial}`);
}

renderProducts();
