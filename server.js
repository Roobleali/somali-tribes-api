require("dotenv").config();
const express = require("express");
const cors = require("cors");
const abtirsiRoutes = require("./routes/tribes");

const app = express();

// Middleware with CORS configuration
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    fariin: "Khalad ayaa dhacay",
    xal: "Fadlan dib u isku day",
  });
});

// Routes
app.use("/api/abtirsi", abtirsiRoutes);

// Basic route
app.get("/", (req, res) => {
  res.json({
    fariin: "Ku soo dhawoow API-ga Abtirsi Soomaaliyeed",
    xog: "API-gan waxaad ka heli kartaa xogta dhammaan qabaa'ilka Soomaaliyeed",
    endpoints: {
      dhammaan: "/api/abtirsi",
      gaar: "/api/abtirsi/:qabiil",
      laamood: "/api/abtirsi/:qabiil/laamood",
      gobollada: "/api/abtirsi/:qabiil/gobollada",
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    fariin: "Bogga aad raadinaysid lama helin",
    xal: "Fadlan hubi URL-ka aad isticmaalayso",
  });
});

// Use Railway's PORT environment variable
const PORT = process.env.PORT || 3001;

// Start server with error handling
const server = app
  .listen(PORT, "0.0.0.0", () => {
    console.log(`Server-ka wuxuu socdaa port-ka ${PORT}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `Port-ka ${PORT} waa la isticmaalayaa. Fadlan dooro port kale`
      );
      process.exit(1);
    } else {
      console.error("Khalad ayaa dhacay markii la bilaabayay server-ka:", err);
      process.exit(1);
    }
  });

// Handle graceful shutdown
process.on("SIGTERM", () => {
  console.log("Server-ka waa la xidhay");
  server.close(() => {
    process.exit(0);
  });
});
