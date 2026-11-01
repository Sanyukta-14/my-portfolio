import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed & Built with 💜 by <span>Sanyukta</span>
      </p>
      <p>© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;