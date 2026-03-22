const devices = [
["iPhone 11",45],
["iPhone 12",90],
["iPhone 13",115],
["iPhone 14",160],
["iPhone 15",165],
["iPhone 16",190]
];

let select = document.getElementById("deviceSelect");

devices.forEach(d=>{
    let opt = document.createElement("option");
    opt.value = d[1];
    opt.text = d[0] + " - $" + d[1];
    select.appendChild(opt);
});

async function order(){

    let user = auth.currentUser;

    if(!user){
        alert("سجل دخول");
        return;
    }

    let price = parseInt(select.value);
    let name = select.options[select.selectedIndex].text;
    let imei = document.getElementById("imeiInput").value;

    let userRef = db.collection("users").doc(user.uid);
    let doc = await userRef.get();

    let balance = doc.data().balance;

    if(balance < price){
        alert("رصيدك غير كافي");
        return;
    }

    await userRef.update({
        balance: balance - price
    });

    await db.collection("orders").add({
        user: user.uid,
        device: name,
        price: price,
        imei: imei,
        status: "pending",
        date: new Date()
    });

    alert("تم الطلب ✅");
}
