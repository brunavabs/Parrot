import supertest from "supertest";
import app from "../../../shared/infra/http/app.js";

describe("No findAll user posts controller, ao executar função", () => {
   test("em caso de sucesso, deve retornar status 200", async () => {
      const response = await supertest(app)
         .get("/userposts/1")
      expect(response.status).toBe(200);
   });
   test("Pro caso de um parâmetro errado, deve retornar status 400", async () => {
      const response = await supertest(app)
         .get("/userposts/s")
      expect(response.status).toBe(400);
   });
});