import "./Navbar.css";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="Topbar">
      <div className="Name">
        <a onClick={scrollToTop}>MANASI DEORE</a>
      </div>
      <div className="Logo">
        <p>PORTFOLIO</p>
      </div>
      <div className="leftbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
