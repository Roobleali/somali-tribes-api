import request from "supertest";
import express from "express";
import tribesRouter from "./tribes";

const app = express();
app.use("/api/abtirsi", tribesRouter);

describe("Tribes API", () => {
  it("should get all tribes", async () => {
    const res = await request(app).get("/api/abtirsi");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("Daarood");
  });

  it("should get a specific tribe", async () => {
    const res = await request(app).get("/api/abtirsi/Daarood");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("Laamood");
    expect(res.body).toHaveProperty("Gobollada");
  });

  it("should return 404 for non-existent tribe", async () => {
    const res = await request(app).get("/api/abtirsi/NonExistentTribe");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("fariin");
  });

  it("should get sub-clans of a tribe", async () => {
    const res = await request(app).get("/api/abtirsi/Daarood/laamood");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("Harti");
  });

  it("should get regions of a tribe", async () => {
    const res = await request(app).get("/api/abtirsi/Daarood/gobollada");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
