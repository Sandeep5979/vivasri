export const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Vivashri API",
    version: "1.0.0",
    description: "API Documentation with vivashri",
  },
  servers: [
    {
      url: "http://localhost:8080/api",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT", // just for UI clarity
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};
