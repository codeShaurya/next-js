import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about">
      <button>> Go the about page Button </button>
    </Link>
    <Link href="/about">
      <a style={{ fontSize: "30px" }}>Go to about Page Link</a>
    </Link>
    <p>Hello Next.js</p>
    <a href="/about">This is not the client routing</a>
  </div>
);

export default Index;
