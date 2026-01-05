import express from "express";

const app = express();
const PORT =  process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("🚀 Express server is running on Node 20");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
