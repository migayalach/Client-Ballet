import "../stylesheet/page.css";

export default function Home() {
  return (
    <div className="container">
      <nav>
        <div className="nav_logo">
          <a href="#">
            <img src="#" alt="logo" />
            LOGO
          </a>
        </div>
        <ul className="nav-link">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Home</a>
          </li>
        </ul>
        <button className="btn-login">Login</button>
      </nav>

      <div className="container-body">
        <h1>Boddy</h1>
      </div>
      
      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
}
