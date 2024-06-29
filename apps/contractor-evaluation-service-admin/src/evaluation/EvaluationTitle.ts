import { Evaluation as TEvaluation } from "../api/evaluation/Evaluation";

export const EVALUATION_TITLE_FIELD = "id";

export const EvaluationTitle = (record: TEvaluation): string => {
  return record.id?.toString() || String(record.id);
};
