const { app } = require("../src/app");
const request = require("supertest");

describe("GET /api/films", () => {
  test("shoulb respond with a 200 status code", async () => {
    let response = await request(app).get("/api/films").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with a object", async () => {
    let response = await request(app).get("/api/films").send();
    expect(response.body).toBeInstanceOf(Object);
  });

  test("should respond with a 404 status code when id no exists", async () => {
    let response = await request(app).get("/api/films/10000").send();
    expect(response.statusCode).toBe(400);
  });

  test("should respond with a object", async () => {
    let response = await request(app).get("/api/films/1").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("GET /api/people", () => {
  test("shoulb respond with a 200 status code", async () => {
    let response = await request(app).get("/api/people").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with a object", async () => {
    let response = await request(app).get("/api/people").send();
    expect(response.body).toBeInstanceOf(Object);
  });

  test("should respond with a 404 status code when id no exists", async () => {
    let response = await request(app).get("/api/people/10000").send();
    expect(response.statusCode).toBe(400);
  });

  test("should respond with a object", async () => {
    let response = await request(app).get("/api/people/3").send();
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("GET /api/clients",   () => {
    test("[clients] should respond with a object", async () => {
       let response = await request(app).get("/api/clients/3").send();
       expect(response.body).toBeInstanceOf(Object);
    })
});


 