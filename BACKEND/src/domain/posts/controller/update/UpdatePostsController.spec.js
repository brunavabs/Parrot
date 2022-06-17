import supertest from "supertest";
import app from "../../../../shared/infra/http/app.js";

describe("No update post controller, ao executar função", () => {
   test("em caso de sucesso, deve retornar status 200", async () => {
      const response = await supertest(app)
         .put("/posts/2")
         .send({
            content: "texto alterado",
         })
         .set(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlPDrW5kaWNvIExpa2UgYSBCb3NzIiwiZW1haWwiOiJzaW5kaWNvQHNpbmRpY28uY29tIiwidXNlclR5cGUiOiJhZG0iLCJpYXQiOjE2NTU0NTgzOTN9.z9FLrHrERjSCw7F2vykFGiz6MhH03pW8j-BtG6BfnAw"
         );
      expect(response.status).toBe(200);
   });
   test("na falta de parâmetros, deve retornar status 400", async () => {
      const response = await supertest(app)
         .put("/posts/2")
         .send({
         })
         .set(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlPDrW5kaWNvIExpa2UgYSBCb3NzIiwiZW1haWwiOiJzaW5kaWNvQHNpbmRpY28uY29tIiwidXNlclR5cGUiOiJhZG0iLCJpYXQiOjE2NTU0NTgzOTN9.z9FLrHrERjSCw7F2vykFGiz6MhH03pW8j-BtG6BfnAw"
         );
      expect(response.status).toBe(400);
   });
});
