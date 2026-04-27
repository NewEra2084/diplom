"use client"
import { useAuthGuard } from "@/features/authMiddleware/useAuthGuard";

export default function Page() {
  useAuthGuard(["ROLE_EMPLOYEE", "ROLE_ADMIN", "ROLE_MANAGER"]);
  return (
    <div>Page</div>
  )
}