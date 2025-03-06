import { createServer } from "miragejs";

export function makeServer() {
  return createServer({
    seeds(server) {
      server.db.loadData({
        movies: [
          { title: "Interstellar" },
          { title: "Inception" },
          { title: "Dunkirk" },
        ],
      });
    },
    routes() {
      this.namespace = "api";

      this.get("/users", () => {
        const names = [
          "Matin",
          "John",
          "Sarah",
          "Aisha",
          "David",
          "Emily",
          "Daniel",
          "Sophia",
          "Liam",
          "Olivia",
        ];
        const cities = [
          "Eskilstuna",
          "New York",
          "Tokyo",
          "Singapore",
          "Berlin",
          "Sydney",
          "London",
          "Toronto",
          "Paris",
          "Dubai",
        ];

        const data = [];
        for (let i = 0; i < 10000; i++) {
          const record = {
            name: names[Math.floor(Math.random() * names.length)],
            age: Math.floor(Math.random() * 53) + 28, // Random age between 18 and 70
            city: cities[Math.floor(Math.random() * cities.length)],
          };
          data.push(record);
        }
        return {
          users: data,
        };
      });
    },
  });
}
