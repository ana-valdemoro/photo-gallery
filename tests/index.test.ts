import request from "supertest";
import app from "../src/app";

// VAmos a comprobar que existe una ruta GET /photos
describe("GET /api/photos", () => {
  test("Should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/photos").send();

    expect(response.statusCode).toBe(200);
  });

  test("Should respond with an array", async () => {
    const response = await request(app).get("/api/photos").send();

    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /api/photos", () => {
  test.only("Should respond with a 200 status code", async () => {
    const photo = {};

    const response = await request(app).post("/api/photos").send();
  });

  test.todo("Should have a content type: application/json in header");
});

// describe('GET /api/photos/:id')

// describe('DELETE /api/photos/:id')
