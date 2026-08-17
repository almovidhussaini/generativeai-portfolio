export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-content">

        <p>
          © {new Date().getFullYear()} Shah Almoveed Hussaini
        </p>

        <p>
          Built with React + Vite
        </p>

      </div>

    </footer>
  );
}