import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to MyApp</h1>
        <p>Manage your users efficiently with a modern dashboard.</p>
        <div className="buttons">
          <a href="/login" className="btn login">Login</a>
          <a href="/register" className="btn register">Register</a>
        </div>
      </header>

      <section className="features">
        <h2>Why Choose MyApp?</h2>
        <p>
          Keep track of your users, add or remove them with ease, and experience a fast, intuitive, 
          and modern interface built for both desktop and mobile.
        </p>
      </section>
    </div>
  );
}
