import { Copyright } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="z-20 m-auto flex w-full items-center justify-between border-t border-t-gray-400 px-8 py-4 text-gray-400 backdrop-blur-md">
      <div className="flex items-center gap-2 font-mono text-sm">
        <Copyright size={14} /> 2025
      </div>
      <div>
        <Link
          href="https://github.com/vinimagaa/cybersecurity-guide"
          target="_blank"
        >
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
}
