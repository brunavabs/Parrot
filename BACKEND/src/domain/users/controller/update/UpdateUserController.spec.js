import supertest from "supertest";
import app from "../../../../shared/infra/http/app.js";

describe("No update user controller, ao executar função", () => {
   test("Id informado não existe, deve retornar status 400", async () => {
      const response = await supertest(app).put("/users/9999").send({
         name: "teste",
         email: "teste@email.com",
         password: "teste123",
      }).set(
         "Authorization",
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6InRlc3RlMiIsImVtYWlsIjoidGVzdGUyQHRlc3RlZS5jb20iLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NTU0NTY2MzR9._UNWoJvemKA0fpYRtNfAk5k8Kvrh1qPHusMq4jv9KSM"
      );
      expect(response.status).toBe(400);
   });
   test("na falta de input, deve retornar status 400", async () => {
      const response = await supertest(app).put("/users/3").send({
         name: "teste",
         apartament: 66,
         password: "teste123",
      }).set(
         "Authorization",
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6InRlc3RlMiIsImVtYWlsIjoidGVzdGUyQHRlc3RlZS5jb20iLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NTU0NTY2MzR9._UNWoJvemKA0fpYRtNfAk5k8Kvrh1qPHusMq4jv9KSM"
      );
      expect(response.status).toBe(400);
   });
   test("em caso de sucesso, deve retornar status 200", async () => {
      const response = await supertest(app).put("/users/3").send({
         name: "teste alterado",
         email: "teste2@testee.com",
         apartament: 66,
         password: "MeuRei123",
      }).set(
         "Authorization",
         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6InRlc3RlMiIsImVtYWlsIjoidGVzdGUyQHRlc3RlZS5jb20iLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NTU0NTY2MzR9._UNWoJvemKA0fpYRtNfAk5k8Kvrh1qPHusMq4jv9KSM"
      );
      expect(response.status).toBe(200);
   });
});
