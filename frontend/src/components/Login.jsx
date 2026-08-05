import { useState } from "react";

export default function LoginPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save JWT token
      localStorage.setItem("token", data.access_token);

      alert("Login Successful!");

      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={styles.loginBtn}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    width: "400px",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    position: "relative",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  closeBtn: {
    position: "absolute",
    right: "15px",
    top: "15px",
    border: "none",
    background: "transparent",
    fontSize: "20px",
    cursor: "pointer",
  },
  formGroup: {
    marginBottom: "18px",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginTop: "6px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  loginBtn: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
};