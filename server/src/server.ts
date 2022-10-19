import app from './app';
import { db } from "./database/db";

app.listen(process.env.SERVER_PORT, async () => {
  await db.sync();
  console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`);
});
