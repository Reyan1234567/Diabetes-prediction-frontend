import * as z from "zod";
import { dt, lg } from "./fetchRequest";
import { rules, stateForm } from "@/Schemas/form.schema";

export const formRequestLg = async (_: stateForm, form: FormData) => {
  const formData = Object.fromEntries(form.entries());
  const validatedData = rules.safeParse(formData);

  if (!validatedData.success) {
    return {
      errors: z.treeifyError(validatedData.error).properties,
      raw: formData,
      error: "Please fix the highlighted fields and try again.",
    };
  }

  try {
    const result = await lg(validatedData.data as stateForm);
    return {
      value: result["prediction"],
      raw: formData,
      success: true,
    };
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : "Somethig went wrong",
      raw: formData,
      success: false,
    };
  }
};

export const formRequestDt = async (_: stateForm, form: FormData) => {
  const formData = Object.fromEntries(form.entries());
  const validatedData = rules.safeParse(formData);

  if (!validatedData.success) {
    return {
      errors: z.treeifyError(validatedData.error).properties,
      raw: formData,
      error: "Please fix the highlighted fields and try again.",
    };
  }

  try {
    const result = await dt(validatedData.data as stateForm);
    return {
      value: result["prediction"],
      success: true,
      raw: formData,
    };
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : "Somethig went wrong",
      success: false,
      raw: formData,
    };
  }
};
