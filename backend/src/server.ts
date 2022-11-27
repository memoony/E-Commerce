import express, { response } from "express";

//? Frontend kısmı default port olarak localhost:4200 üzerinden çalıştığı için backend'i farklı port üzerinde çalıştırmak adına (ör: 5000) "cors" kullanılmaktadır.
import cors from "cors";

import { sample_categories, sample_products, sample_users } from "./data";

//* JSON Web Token
import jwt from "jsonwebtoken";

//ToDo: app değişkenini kullanarak tüm API'larımızı tanımlayacağız.
const app = express();

app.use(express.json()); //* express default olarak JSON formatını desteklemediği için; burada enable edilmiştir.

//? express, cors kullan ve 4200 portunun sunucuda bir isteği olsun; aynı zamanda credentials (kimlik bilgileri) true olmalı.
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});

//* Tüm ürünleri getiren metot.
app.get("/api/products", (request, response) => {
  response.send(sample_products);
});

//* Arama terimine göre ürünleri getiren metot.
app.get("/api/products/search/:searchTerm", (request, response) => {
  const searchTerm = request.params.searchTerm;

  const products = sample_products.filter((product) =>
    product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  response.send(products);
});

//* Tüm kategorileri getiren metot.
app.get("/api/products/categories", (request, response) => {
  response.send(sample_categories);
});

//* Kategoriye göre ürünleri getiren metot.
app.get("/api/products/category/:categoryName", (request, response) => {
  const categoryName = request.params.categoryName;

  const products = sample_products.filter((product) =>
    product.categories?.includes(categoryName)
  );

  response.send(products);
});

//* Ürün ID'sine göre ilgili ürünü getiren metot.
app.get("/api/products/:productId", (request, response) => {
  const productId = request.params.productId;

  const product = sample_products.find((product) => product.id == productId);

  response.send(product);
});

//* Login metodu.
app.post("/api/users/login", (request, response) => {
  const { email, password } = request.body; //* Destructuring Assignment

  const user = sample_users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    //* Eğer belirtilen şartlara uygun bir kullanıcı var ise, bu kullanıcı bilgisi token oluşturan metoda gönderiliyor.
    response.send(generateTokenResponse(user));
  } else {
    response.status(400).send("E-posta adresi veya şifre geçerli değil!");
  }
});

//* JSON Web Server ile token oluşturan metot.
const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );

  user.token = token;
  return user;
};
