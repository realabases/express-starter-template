import { Router } from "express";
import sampleRouter1 from "./routeSample1.mjs";
import sampleRouter2 from "./routeSample2.mjs";

const router = Router();

router.use(sampleRouter1);
router.use(sampleRouter2);

export default router;
