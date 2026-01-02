import { stateForm } from "@/Schemas/form.schema";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const lg = async (body: stateForm) => {
  console.log(body);
  try {
    const res = await fetch(`${BASE_URL}/diabeto/logistic`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const response = await res.json();
    if (!res.ok) {
      const detail = Array.isArray(response?.detail)
        ? response.detail[0]?.msg ?? "Prediction failed"
        : response?.detail ?? "Prediction failed";
      throw new Error(detail);
    }
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const dt = async (body: stateForm) => {
  try {
    const res = await fetch(`${BASE_URL}/diabeto/tree`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const response = await res.json();
    if (!res.ok) {
      const detail = Array.isArray(response?.detail)
        ? response.detail[0]?.msg ?? "Prediction failed"
        : response?.detail ?? "Prediction failed";
      throw new Error(detail);
    }
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
