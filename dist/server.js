"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tribes_1 = __importDefault(require("./routes/tribes"));
const app = (0, express_1.default)();
// Middleware with CORS configuration
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express_1.default.json());
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        fariin: "Khalad ayaa dhacay",
        xal: "Fadlan dib u isku day",
    });
});
// Routes
app.use("/api/abtirsi", tribes_1.default);
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
const PORT = parseInt(process.env.PORT || "3001", 10);
// Start server with error handling
const server = app
    .listen(PORT, "0.0.0.0", () => {
    console.log(`Server-ka wuxuu socdaa port-ka ${PORT}`);
})
    .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error(`Port-ka ${PORT} waa la isticmaalayaa. Fadlan dooro port kale`);
        process.exit(1);
    }
    else {
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
