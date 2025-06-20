import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
  {
    name: "Boiled Egg",
    price: 20,
    text: "A simple and healthy option, perfect for a quick breakfast or protein boost.",
    image: "/images/egg.png",
    type: "breakfast",
  },
  {
    name: "RAMEN",
    price: 120,
    text: "A warm bowl of flavorful noodles with rich broth and toppings to satisfy your hunger.",
    image: "/images/ramen.png",
    type: "lunch",
  },
  {
    name: "GRILLED CHICKEN",
    price: 220,
    text: "Juicy grilled chicken, seasoned to perfection, ideal for a hearty dinner.",
    image: "/images/chicken.png",
    type: "dinner",
  },
  {
    name: "CAKE",
    price: 80,
    text: "A soft and delicious slice of cake, great with tea or as a sweet breakfast treat.",
    image: "/images/cake.png",
    type: "breakfast",
  },
  {
    name: "BURGER",
    price: 150,
    text: "A classic burger with fresh ingredients and savory flavors, perfect for lunch.",
    image: "/images/burger.png",
    type: "lunch",
  },
  {
    name: "PANCAKE",
    price: 110,
    text: "Fluffy pancakes served with syrup, a delightful and comforting evening meal.",
    image: "/images/pancake.png",
    type: "dinner",
  },
];


  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
