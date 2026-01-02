import { formRequestDt, formRequestLg } from "@/lib/formRequest";
import { useActionState, useEffect } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

const Lg = ({ isLg }: { isLg: boolean }) => {
  const [state, formAction, isPending] = !isLg
    ? useActionState(formRequestDt, {
        errors: {},
        error: "",
        success: false,
        value: "",
      })
    : useActionState(formRequestLg, {
        errors: {},
        error: "",
        success: false,
        value: "",
      });

  return (
    <div className="max-w-3xl mx-auto p-8 border rounded-xl shadow-sm bg-white my-10">
      <form action={formAction} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Diabetes Assessment Form</h2>
          <p className="text-gray-500 text-sm">
            Please provide your health data for analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              type="number"
              name="age"
              id="age"
              placeholder="e.g. 25"
              defaultValue={state.raw?.age}
            />
            {state.errors?.age && (
              <p className="text-red-500 text-xs">{state.errors?.age?.errors[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Gender</Label>
            <Select name="gender" defaultValue={state.raw?.gender}>
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                {["Female", "Male", "Other"].map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state.errors?.gender && (
              <p className="text-red-500 text-xs">
                {state.errors?.gender?.errors[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Ethnicity</Label>
            <Select name="ethnicity" defaultValue={state.raw?.ethnicity}>
              <SelectTrigger>
                <SelectValue placeholder="Select Ethnicity" />
              </SelectTrigger>
              <SelectContent>
                {["White", "Hispanic", "Black", "Asian", "Other"].map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state.errors?.ethnicity && (
              <p className="text-red-500 text-xs">
                {state.errors?.ethnicity?.errors[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Employment Status</Label>
            <Select
              name="employment_status"
              defaultValue={state.raw?.employment_status}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {["Employed", "Retired", "Unemployed", "Student"].map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state.errors?.employment_status && (
              <p className="text-red-500 text-xs">
                {state.errors?.employment_status?.errors[0]}
              </p>
            )}
          </div>
        </div>

        <h3 className="font-semibold text-lg">Vitals & Laboratory Data</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Systolic BP</Label>
            <Input
              type="number"
              name="systolic_bp"
              placeholder="e.g. 120"
              defaultValue={state.raw?.systolic_bp ?? ""}
            />
            {state.errors?.systolic_bp && (
              <p className="text-red-500 text-xs">
                {state.errors?.systolic_bp?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Diastolic BP</Label>
            <Input
              type="number"
              name="diastolic_bp"
              placeholder="e.g. 80"
              defaultValue={state.raw?.diastolic_bp ?? ""}
            />
            {state.errors?.diastolic_bp && (
              <p className="text-red-500 text-xs">
                {state.errors?.diastolic_bp?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Heart Rate</Label>
            <Input
              type="number"
              name="heart_rate"
              placeholder="e.g. 72"
              defaultValue={state.raw?.heart_rate ?? ""}
            />
            {state.errors?.heart_rate && (
              <p className="text-red-500 text-xs">
                {state.errors?.heart_rate?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>BMI</Label>
            <Input
              type="number"
              name="bmi"
              step="0.1"
              placeholder="e.g. 22.5"
              defaultValue={state.raw?.bmi ?? ""}
            />
            {state.errors?.bmi && (
              <p className="text-red-500 text-xs">{state.errors?.bmi?.errors[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Screen time/day</Label>
            <Input
              type="number"
              name="screen_time_hours_per_day"
              step="0.1"
              placeholder="e.g. 5"
              defaultValue={state.raw?.screen_time_hours_per_day ?? ""}
            />
            {state.errors?.screen_time_hours_per_day && (
              <p className="text-red-500 text-xs">
                {state.errors?.screen_time_hours_per_day?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Total Cholesterol</Label>
            <Input
              type="number"
              name="cholesterol_total"
              placeholder="e.g. 180"
              defaultValue={state.raw?.cholesterol_total ?? ""}
            />
            {state.errors?.cholesterol_total && (
              <p className="text-red-500 text-xs">
                {state.errors?.cholesterol_total?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>HDL Cholesterol</Label>
            <Input
              type="number"
              name="hdl_cholesterol"
              placeholder="e.g. 55"
              defaultValue={state.raw?.hdl_cholesterol ?? ""}
            />
            {state.errors?.hdl_cholesterol && (
              <p className="text-red-500 text-xs">
                {state.errors?.hdl_cholesterol?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Triglycerides</Label>
            <Input
              type="number"
              name="triglycerides"
              placeholder="e.g. 140"
              defaultValue={state.raw?.triglycerides ?? ""}
            />
            {state.errors?.triglycerides && (
              <p className="text-red-500 text-xs">
                {state.errors?.triglycerides?.errors[0]}
              </p>
            )}
          </div>
        </div>

        <h3 className="font-semibold text-lg">Lifestyle Factors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Alcohol/week (Units)</Label>
            <Input
              type="number"
              name="alcohol_consumption_per_week"
              placeholder="e.g. 2"
              defaultValue={state.raw?.alcohol_consumption_per_week ?? ""}
            />
            {state.errors?.alcohol_consumption_per_week && (
              <p className="text-red-500 text-xs">
                {state.errors?.alcohol_consumption_per_week?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Activity (min/week)</Label>
            <Input
              type="number"
              name="physical_activity_minutes_per_week"
              placeholder="e.g. 150"
              defaultValue={state.raw?.physical_activity_minutes_per_week ?? ""}
            />
            {state.errors?.physical_activity_minutes_per_week && (
              <p className="text-red-500 text-xs">
                {state.errors?.physical_activity_minutes_per_week?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Sleep Hours/day</Label>
            <Input
              type="number"
              name="sleep_hours_per_day"
              step="0.1"
              placeholder="e.g. 7.5"
              defaultValue={state.raw?.sleep_hours_per_day ?? ""}
            />
            {state.errors?.sleep_hours_per_day && (
              <p className="text-red-500 text-xs">
                {state.errors?.sleep_hours_per_day?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Diet Score (0-100)</Label>
            <Input
              type="number"
              name="diet_score"
              placeholder="e.g. 85"
              defaultValue={state.raw?.diet_score ?? ""}
            />
            {state.errors?.diet_score && (
              <p className="text-red-500 text-xs">
                {state.errors?.diet_score?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Smoking Status</Label>
            <Select
              name="smoking_status"
              defaultValue={state.raw?.smoking_status}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                {["Never", "Former", "Current"].map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state.errors?.smoking_status && (
              <p className="text-red-500 text-xs">
                {state.errors?.smoking_status?.errors[0]}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Education Level</Label>
            <Select
              name="education_level"
              defaultValue={state.raw?.education_level}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                {["Highschool", "Graduate", "Postgraduate", "No formal"].map(
                  (opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            {state.errors?.education_level && (
              <p className="text-red-500 text-xs">
                {state.errors?.education_level?.errors[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Income Level</Label>
            <Select name="income_level" defaultValue={state.raw?.income_level}>
              <SelectTrigger>
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                {["Low", "Lower-Middle", "Middle", "Upper-Middle", "High"].map(
                  (opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            {state.errors?.income_level && (
              <p className="text-red-500 text-xs">
                {state.errors?.income_level?.errors[0]}
              </p>
            )}
          </div>
        </div>

        <h3 className="font-semibold text-lg">Medical History</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Diabetes History", name: "family_history_diabetes" },
            { label: "Hypertension", name: "hypertension_history" },
            { label: "Cardiovascular", name: "cardiovascular_history" },
          ].map((item) => (
            <div key={item.name} className="space-y-2">
              <Label>{item.label}</Label>
              <Select
                name={item.name}
                defaultValue={
                  state.raw?.[
                    item.name as keyof typeof state.raw
                  ]?.toString() ?? ""
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Yes</SelectItem>
                  <SelectItem value="0">No</SelectItem>
                </SelectContent>
              </Select>
              {state.errors?.[item.name] && (
                <p className="text-red-500 text-xs">
                  {state.errors?.[item.name]?.errors[0]}
                </p>
              )}
            </div>
          ))}
        </div>

        {state.error && (
          <div className="p-3 bg-red-100 text-red-700 rounded text-sm">
            {state.error}
          </div>
        )}
        {state.success && (
          <div className="p-3 bg-green-100 text-green-700 rounded text-sm">
            {state.value}
          </div>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-12 text-lg"
        >
          {isPending ? "Validating..." : "Submit Health Data"}
        </Button>
      </form>
    </div>
  );
};

export default Lg;
