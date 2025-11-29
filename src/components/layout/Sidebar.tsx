import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Cloud, Music, Menu } from 'lucide-react'; // Example icons

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 bg-dark-DEFAULT text-primary-DEFAULT flex flex-col items-center py-6 shadow-lg z-50">
      {/* Logo */}
      <div className="mb-10 transform -rotate-90">
        <Link href="/">
          <span className="text-xl font-bold tracking-wider text-primary-DEFAULT whitespace-nowrap">ArtistGo</span>
        </Link>
      </div>

      {/* Menu Toggle - Example from reference image */}
      <div className="mb-auto">
        <button className="p-2 rounded-full bg-dark-light hover:bg-neutral-700 transition-colors">
          <Menu className="h-6 w-6 text-primary-DEFAULT" />
        </button>
        <span className="sr-only">Menu</span>
      </div>

      {/* Social Links */}
      <nav className="flex flex-col space-y-4">
        <Link href="#" className="hover:text-accent-DEFAULT transition-colors">
          <Facebook className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:text-accent-DEFAULT transition-colors">
          <Twitter className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:text-accent-DEFAULT transition-colors">
          <Instagram className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:text-accent-DEFAULT transition-colors">
          <Cloud className="h-5 w-5" />
        </Link>
        <Link href="#" className="hover:text-accent-DEFAULT transition-colors">
          <Music className="h-5 w-5" />
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
