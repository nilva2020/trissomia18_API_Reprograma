const app = require("./src/app.js");
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send({ message: "API Trissomia 18"})
})


app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
