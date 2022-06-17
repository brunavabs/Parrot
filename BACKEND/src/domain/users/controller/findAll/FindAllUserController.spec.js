import supertest from "supertest";
import app from "../../../../shared/infra/http/app.js";

describe("No findall user controller, ao executar função", () => {
   
   test("em caso de sucesso, deve retornar status 200", async () => {
      const response = await supertest(app).get("/users");
      expect(response.status).toBe(200);
   });

});
