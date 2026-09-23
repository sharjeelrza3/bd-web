import {
  HeartPulse,
  Sparkles,
  Target,
  UtensilsCrossed,
} from "lucide-react";
import type { CaseStudyIcon } from "./data";

export const caseStudyIconMap = {
  restaurant: UtensilsCrossed,
  target: Target,
  medical: HeartPulse,
  sparkles: Sparkles,
} satisfies Record<CaseStudyIcon, typeof UtensilsCrossed>;
