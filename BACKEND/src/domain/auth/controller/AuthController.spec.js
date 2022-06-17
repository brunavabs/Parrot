import supertest from "supertest";
import app from "../../../shared/infra/http/app.js";

describe("No auth controller, ao executar função", () => {
   test("em caso de sucesso, deve retornar status 200", async () => {
      const response = await supertest(app)
         .post("/login")
         .send({
            email: "sindico@sindico.com",
            password: "MeuRei123"
         })
      expect(response.status).toBe(200);
   });
   test("em caso de fracasso, deve retornar status 400", async () => {
      const response = await supertest(app)
         .post("/login")
         .send({
            email: "sindico@sindico.com",
            password: "esquiciasenha"
         })
      expect(response.status).toBe(400);
   });
});
