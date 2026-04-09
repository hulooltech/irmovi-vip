const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🔗 ضع رابطك هنا
mongoose.connect("mongodb+srv://slm101albb_db_user:4NcbjmuV1cY4p2ys@gsmshtool.obajfg2.mongodb.net/irmove")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// 👤 Users
const User = mongoose.model("User", {
  username: String,
  password: String,
  balance: { type: Number, default: 0 }
});

// تسجيل
app.post("/api/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User created" });
});

// تسجيل دخول
app.post("/api/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.status(400).json({ message: "Invalid login" });
  res.json(user);
});

// IMEI Check
app.get("/api/check/:imei", (req, res) => {
  res.json({
    imei: req.params.imei,
    status: "Clean ✅",
    service: "iRmove VIP"
  });
});

app.listen(3000, () => console.log("🚀 Server Running"));
