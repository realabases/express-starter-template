import { Router } from "express";

const router = Router();

router.get("/api/sample1", (req, res) => {
  res.status(200).send("sample1");
});

export default router;
