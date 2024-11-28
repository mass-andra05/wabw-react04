import React from "react";

const LoginSiswa = () => {
  return (
    <div className="login-page" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f4f6f9" }}>
      <div className="login-box card p-4" style={{ maxWidth: "400px", width: "100%", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <h3 className="text-center mb-4">Login Siswa</h3>
        <form>
          {/* Email Address */}
          <div className="mb-3">
            <label htmlFor="nisn" className="form-label">
              NISN
            </label>
            <div className="input-group">
              <span className="input-group-text">
              <i class="fas fa-key"></i>
              </span>
              <input
                type="nisn"
                className="form-control"
                id="nisn"
                placeholder="NISN"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <a
            href="/siswa"
            type="submit"
            className="btn btn-primary btn-block"
            style={{ width: "100%", borderRadius: "5px" }}
          >
            LOGIN
          </a>
          {/* <a href="/">Dashboard Admin</a> */}
        </form>
      </div>
    </div>
  );
};

export default LoginSiswa;
