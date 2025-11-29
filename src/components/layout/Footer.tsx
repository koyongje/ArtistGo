import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 mt-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-neutral-500 sm:text-center dark:text-neutral-400">
          © {new Date().getFullYear()} <Link href="/" className="hover:underline">ARTIST NAME</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-neutral-500 dark:text-neutral-400 sm:mt-0">
          <li>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white me-4 md:me-6">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a href="mailto:contact@example.com" className="hover:text-neutral-900 dark:hover:text-white">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
