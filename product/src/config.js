require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3001,
  mongoURI: process.env.MONGODB_PRODUCT_URI || "mongodb://localhost/products",
  rabbitMQURI: process.env.RABBITMQ_URI || "amqp://localhost",
  // RabbitMQ connection
  rabbitMQ: {
    host: process.env.RABBITMQ_HOST || "localhost",
    port: process.env.RABBITMQ_PORT || 5672,
    user: process.env.RABBITMQ_USER || "guest",
    pass: process.env.RABBITMQ_PASS || "guest",
    uri: process.env.RABBITMQ_URI || `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`,
    exchangeName: "products",
    queueName: "products_queue",
  },
  // Test user (dùng cho CI/CD testing)
  testUser: {
    username: process.env.LOGIN_TEST_USER || "testuser",
    password: process.env.LOGIN_TEST_PASSWORD || "password",
  },
};

  