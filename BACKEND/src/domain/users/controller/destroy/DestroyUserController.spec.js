import supertest from "supertest";
import app from "../../../../shared/infra/http/app.js";

describe("No destroy user controller, ao executar função", () => {
   test("em caso do id não existir, deve retornar status 400", async () => {
      const response = await supertest(app)
         .delete("/users/99999")
         .set(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6InRlc3RlMSIsImVtYWlsIjoidGVzdGUxQHRlc3RlZS5jb20iLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NTU0NTYwMjB9.0IdJjRXb6mnjWm376eEGynFSW-NReLx7CTrbFg-EEnI"
         );
      expect(response.status).toBe(400);
   });
   test("em caso de sucesso, deve retornar status 204", async () => {
      const response = await supertest(app)
         .delete("/users/2")
         .set(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6InRlc3RlMSIsImVtYWlsIjoidGVzdGUxQHRlc3RlZS5jb20iLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NTU0NTYwMjB9.0IdJjRXb6mnjWm376eEGynFSW-NReLx7CTrbFg-EEnI"
         );
      expect(response.status).toBe(204);
   });
});
