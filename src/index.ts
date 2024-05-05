import express, { Request, Response } from "express";
import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import { Category } from "./entities/category.entity";
import { categoryRoute } from "./routes/categoryRoute";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/category", categoryRoute);

const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "sumbe@!123",
  database: "test",
  // entities: [__dirname + '/entities/*'],
  entities: [User, Category],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
    throw new Error("Unable to connect to db");
  });

app.listen(8081, () => {
  console.log(`server running........8081`);
});
