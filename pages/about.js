import Link from "next/link";

export default () => (
  <div>
    <Link href="/">
      <button>> Go the Home page Button </button>
    </Link>
    <Link href="/">
      <a style={{ fontSize: "30px" }}>Go to Home Page Link</a>
    </Link>
    <p>This is the about page</p>
    <a href="/">This is not the client routing</a>
  </div>
);
