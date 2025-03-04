import { createServer } from "miragejs";

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = "api";

      this.get("/users", () => {
        return {
          users: [
            { name: "Matin", age: 34, city: "Eskilstuna" },
            { name: "Jhon", age: 31, city: "Eskilstuna" },
            { name: "Lary", age: 24, city: "Eskilstuna" },
            { name: "Happy", age: 44, city: "Eskilstuna" },
          ],
        };
      });
    },
  });
}
