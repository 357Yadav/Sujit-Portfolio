import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2>Sujit Yadav</h2>

      <p>Java Full Stack Developer</p>

      <p>
        © {new Date().getFullYear()} All Rights Reserved
      </p>

    </footer>
  );
}

export default Footer;