import supertest from "supertest";
import app from "../../../../shared/infra/http/app.js";

describe("No findOne post controller, ao executar função", () => {
   test("em caso de sucesso, deve retornar status 200", async () => {
      const response = await supertest(app)
         .get("/posts/1")
      expect(response.status).toBe(200);
   });
});