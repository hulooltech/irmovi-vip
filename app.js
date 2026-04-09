const devices = [
["iPhone 15 Pro Max",190],
["iPhone 14 Pro Max",175],
["iPad Pro 12.9",150],
["Apple Watch Ultra 2",120]
];

let select = document.getElementById("device");

devices.forEach(d=>{
let o=document.createElement("option");
o.value=d[1];
o.text=d[0]+" - $"+d[1];
select.appendChild(o);
});

function order(){
let imei=document.getElementById("imei").value;
if(imei.length<10){alert("Invalid IMEI");return;}
alert("Order sent successfully ✅");
}
