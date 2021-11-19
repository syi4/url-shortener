import mongoose from "mongoose";
import config from "config";

const db = async () => {
  const dbUri = config.get("dbUri") as string;

  try {
    await mongoose.connect(dbUri).then(() => {
      console.log(`DB connect to ${dbUri}`);
    });
  } catch (e) {
    console.error(e);
  }
};

export default db;
