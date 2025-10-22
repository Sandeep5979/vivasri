const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Matrimonial API",
      version: "1.0.0",
      description: "API documentation with Matrimonial",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./app/routes/*.js"],
};