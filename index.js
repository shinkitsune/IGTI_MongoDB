import express from "express";
import mongoose from "mongoose";



(async () => {
  try {
    await mongoose.connect(url, {
      // await mongoose.connect('mongodb+srv://adminbootcamp:acessdbbootcamp@cluster0.rua7b.mongodb.net/account_bank?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Conectado com sucesso ao banco de dados!");
  } catch (error) {
    console.log("Erro ao conectar com o banco de dados: ", error);
  }
})();

const app = express();
app.use(express.json());

app.use(accountRouter);
app.listen(3000, () => console.log("API iniciada com sucesso!"));