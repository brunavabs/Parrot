import supertest from "supertest";
import app from "../../../../shared/infra/http/app.js";

describe("No findOne user controller, ao executar função", () => {
   
   test("em caso de sucesso, deve retornar status 200", async () => {
      const response = await supertest(app).get("/users/1");
      expect(response.status).toBe(200);
   });

});
