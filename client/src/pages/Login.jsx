import './Auth.css';

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}
