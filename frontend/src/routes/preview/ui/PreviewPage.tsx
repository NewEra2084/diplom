"use client";
import { getTemplate } from "@/shared/api/client";
import { useEffect } from "react";

export default function PreviewPage() {
  useEffect(() => {
    (async () => {
      const a = await getTemplate("/employee/get_employee_data");
      console.log(a);
      
    })();
  });
  return <div>PreviewPage</div>;
}
