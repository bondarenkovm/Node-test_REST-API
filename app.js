const express = require("express");
const app = express();
// const contacts = require("./contacts.json");
// const moment = require("moment");
// const fs = require("fs/promises");
// const path = require("path");
// const contactsPath = path.join(__dirname, "public", "server.log");
const cors = require("cors");
// const corsMiddleware = cors();

const contactsRouter = require("./routes/api/contacts");

//----------------1--------------
// app.get("/", (reg, res) => {
//   res.send("<h1>Nome</h1>");
// });
// app.get("/contacts", (reg, res) => {
//   console.log(reg.url);
//   console.log(reg.method);
//   res.send("<h1>Contacts</h1>");
// });
//--------------------2-------------
// app.get("/contacts", (reg, res) => {
//   res.json(contacts);
// });

//------------------3---------------
// app.use(cors());
// app.use(async (reg, res, next) => {
//   const { url, method } = reg;
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   await fs.appendFile(contactsPath, `\n${method} ${url} ${date}`);
//   next();
// });
// app.get("/products", (reg, res) => {
//   res.json([]);
// });
// app.get("/contacts", (reg, res) => {
//   res.json(contacts);
// });
// app.use((reg, res) => {
//   res.status(404).json({
//     message: "Not found",
//   });
// });
//------------------4-----------------------------
app.use(cors());

// app.get("/api/contacts", (reg, res) => {
//   res.json(contacts);
// });
// app.get("/api/contacts/:id", (reg, res) => {
//   res.json(contacts[0]);
// });
// app.post("/api/contacts", (reg, res) => {
//   res.json(contacts[0]);
// });
// app.put("/api/contacts/:id", (reg, res) => {
//   res.json(contacts[0]);
// });
// app.delete("/api/contacts/:id", (reg, res) => {
//   res.json(contacts[0]);
// });
app.use("/api/contacts", contactsRouter);

app.listen(3000);
