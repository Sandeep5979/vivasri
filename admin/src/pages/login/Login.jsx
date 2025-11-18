
import React, { useState } from "react";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const API_URL = process.env.REACT_APP_BASE_URL_API || "";
  
  // Submit handler
  const onSubmit = async (data) => {
    setLoading(true);
    setApiError("");

    try {
      const response = await fetch(`${API_URL}/api/front/admin-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.username,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // ✅ Save token or redirect to dashboard
        localStorage.setItem("adminToken", result.token);
        localStorage.setItem("lastActivity", Date.now());

        window.location.href = "/admin/dashboard";
      } else {
        setApiError(result.message || "Invalid username or password.");
      }
    } catch (err) {
      setApiError("Server error, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login_wrapper">
      <div className="animate form login_form">
        <section className="login_content logincont">
          <LoginHeader />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                className={`form-control ${errors.username ? "is-invalid" : ""}`}
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
            </div>
            <div>
              <input
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>
             {apiError && <p className="text-danger mb-3">{apiError}</p>}
            <div>
              <button
                className="btn btn-default submit loginbtn"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
          </form>
          <LoginFooter />
        </section>
      </div>
    </div>
  );
}