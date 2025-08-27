import { Copyright } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="m-auto flex w-[calc(100%-10vw)] items-center justify-between border-t px-2 py-4 opacity-50">
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
