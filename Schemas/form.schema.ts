import * as z from "zod";

const number = z.preprocess(
  (val) => (val === "" ? undefined : Number(val)),
  z.number("Field must be a number")
);
const binary = z.preprocess(
  (val) => (val === "" ? "undefined" : val),
  z.coerce.number().pipe(z.union([z.literal(0), z.literal(1)]))
);

export const rules = z.object({
  age: number,
  alcohol_consumption_per_week: number,
  physical_activity_minutes_per_week: number,
  diet_score: number,
  sleep_hours_per_day: number,
  bmi: number,
  systolic_bp: number,
  diastolic_bp: number,
  heart_rate: number,
  cholesterol_total: number,
  hdl_cholesterol: number,
  screen_time_hours_per_day: number,
  triglycerides: number,
  gender: z.enum(["Female", "Male", "Other"], {
    error: () => ({ message: "Please select a gender" }),
  }),
  ethnicity: z.enum(["White", "Hispanic", "Black", "Asian", "Other"], {
    error: () => ({ message: "Please select an ethnicity" }),
  }),
  education_level: z.enum(
    ["Highschool", "Graduate", "Postgraduate", "No formal"],
    {
      error: () => ({ message: "Select your education level" }),
    }
  ),
  income_level: z.enum(
    ["Middle", "Lower-Middle", "Upper-Middle", "Low", "High"],
    {
      error: () => ({ message: "Select your income level" }),
    }
  ),
  smoking_status: z.enum(["Never", "Former", "Current"], {
    error: () => ({ message: "Smoking status is required" }),
  }),
  employment_status: z.enum(["Employed", "Retired", "Unemployed", "Student"], {
    error: () => ({ message: "Employment status is required" }),
  }),
  family_history_diabetes: binary,
  hypertension_history: binary,
  cardiovascular_history: binary,
});

export type stateForm = z.infer<typeof rules>;

export type state = {
  errors: Partial<Record<keyof stateForm, string[]>>;
  error: string;
  success: boolean;
  raw?: Partial<stateForm>;
};
