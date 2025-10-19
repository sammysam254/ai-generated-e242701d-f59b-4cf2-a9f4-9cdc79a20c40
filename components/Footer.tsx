import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-4">
      <div className="container mx-auto">
        <p>&copy; 2023 SaaS Landing Page</p>
        <ul>
          <li>
            <Link href="/terms">
              <a>Terms</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a>Privacy</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}