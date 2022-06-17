import supertest from "supertest";
import app from "../../../../shared/infra/http/app.js";

describe("No create post controller, ao executar função", () => {
   test("em caso de sucesso, deve retornar status 201", async () => {
      const response = await supertest(app)
         .post("/posts")
         .send({
            content: "testestestestestes",
         })
         .set(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlPDrW5kaWNvIExpa2UgYSBCb3NzIiwiZW1haWwiOiJzaW5kaWNvQHNpbmRpY28uY29tIiwidXNlclR5cGUiOiJhZG0iLCJpYXQiOjE2NTU0NTgzOTN9.z9FLrHrERjSCw7F2vykFGiz6MhH03pW8j-BtG6BfnAw"
         );
      expect(response.status).toBe(201);
   });
});
