"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Compare with env variable
    if (password === process.env.NEXT_PUBLIC_LOGIN_PASSWORD) {
      // Set a cookie that middleware will check
      document.cookie = "auth=valid; path=/";
      router.push("/community/secure");
    }
  }

  return (
    <div className="container pt-4 pb-5">
      <h1 className="fw-bold text-primary mb-4">Protected Access</h1>

      <p className="fs-5 mb-3">
        This section contains protected materials. Please enter the password to continue.
      </p>

      <form onSubmit={handleSubmit} className="col-md-4">
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Enter
        </button>
      </form>
    </div>
  );
}
