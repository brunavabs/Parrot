import supertest from "supertest";
import app from "../../../../shared/infra/http/app.js";
import { faker } from '@faker-js/faker';

const fakeEmail = faker.internet.email();

describe("No create user controller, ao executar função", () => {
   test("em caso de sucesso, deve retornar status 201", async () => {
      const response = await supertest(app).post("/users").send({
         name: "teste",
         email: fakeEmail,
         apartament: 66,
         password: "teste123",
      });
      expect(response.status).toBe(201);
   });
   test("na falta de input, deve retornar status 400", async () => {
      const response = await supertest(app).post("/users").send({
         name: "teste",
         email: "teste@email.com",
         password: "teste123",
      });
      expect(response.status).toBe(400);
   });
   test("em caso de email já cadastrado, deve retornar status 400", async () => {
      const response = await supertest(app).post("/users").send({
         name: "teste",
         email: fakeEmail,
         apartament: 66,
         password: "teste123",
      });
      expect(response.status).toBe(400);
   });
});
