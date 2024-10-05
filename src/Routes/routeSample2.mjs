import { Router } from "express";

const router = Router();
router.get("/api/sample2", (req, res) => {
  res.status(200).send("sample2");
});

export default router;
