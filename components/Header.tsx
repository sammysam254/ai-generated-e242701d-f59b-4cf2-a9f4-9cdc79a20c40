import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto p-4">
        <Link href="/">
          <a>
            <h1 className="text-2xl font-bold">SaaS Landing Page</h1>
          </a>
        </Link>
        <ul className="flex justify-end">
          <li>
            <Link href="/features">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/testimonials">
              <a>Testimonials</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}