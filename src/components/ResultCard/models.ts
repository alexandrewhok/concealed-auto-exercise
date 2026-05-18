import type { CostBreakdown } from "../../utils/costs";
import type { MatchResult } from "../../utils/matching";

export type ResultCardProps = {
  match: MatchResult;
  costs: CostBreakdown;
};
