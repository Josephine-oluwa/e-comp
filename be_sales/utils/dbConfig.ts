import mongoose from "mongoose";

// const URL: string = "mongodb://127.0.0.1:27017/saleQTYDB";
const URL: string = "mongodb+srv://josephine:josephine@cluster0.v1d2dga.mongodb.net/e-sales?retryWrites=true&w=majority";

export const mainConnection = async () => {
  await mongoose.connect(URL).then(() => {
    console.log("db connected...");
  });
};
