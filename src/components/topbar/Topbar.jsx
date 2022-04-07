import "./Topbar.scss";
export default function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            NATE W.
          </a>
          <div className="itemContainer">
            <p className="icon">
              <i class="fa-solid fa-user"></i>
            </p>
            <span>(425) 422-2001</span>
          </div>
          <div className="itemContainer">
            <p className="icon">
              <i class="fa-solid fa-envelope"></i>
            </p>
            <span>natewalchenbach24@gmail.com</span>
          </div>
          <a
            href="../../assets/Resume.pdf"
            target="_blank"
            className="itemContainer"
          >
            <p className="icon">
              <i class="fa-solid fa-file-code"></i>
            </p>
            <span>Resume (Click to download)</span>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
