import { lgRules } from "@/Schemas/old/logisticRegression";
import * as z from "zod";

const backendUrl = process.env.BACKEND_URL;
export const predictLg = async (body: z.infer<typeof lgRules>) => {
  try {
    const res = await fetch(`${backendUrl}/diabeto/logistic`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const contentType = res.headers.get("Content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData);
      } else {
        const errorText = await res.text();
        throw new Error(errorText || `Server Error: ${res.status}`);
      }
    }
    console.log("RES");
    console.log(res);
    console.log(res.json().then((val) => val.prediction));
    return res.json();
  } catch (e) {
    console.log("Prediction Error");
    throw Error;
  }
};

export const predictDt = async (body: z.infer<typeof lgRules>) => {
  try {
    const res = await fetch(`${backendUrl}/diabeto/tree`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const contentType = res.headers.get("Content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData);
      } else {
        const errorText = await res.text();
        throw new Error(errorText || `Server Error: ${res.status}`);
      }
    }
    console.log("RES");
    console.log(res);
    console.log(res.json().then((val) => val.prediction));
    return res.json();
  } catch (e) {
    console.log("Prediction Error");
    throw Error;
  }
};
