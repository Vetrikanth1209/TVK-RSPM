import { openDB } from "idb";

const DB_NAME = "RasipuramCitizenConnect";
const STORE_NAME = "grievances";

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true
        });
      }
    }
  });
};

export const saveGrievance = async (data) => {
  const db = await initDB();

  return db.add(STORE_NAME, {
    ...data,
    createdAt: new Date().toISOString()
  });
};

export const getAllGrievances = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};