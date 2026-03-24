import { Cloud, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800/50 bg-black text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4">
        <a href="#home" className="flex items-center gap-2 group">
          <Cloud className="w-6 h-6 text-cyan-400" />
          </a>
    
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Vinicius Lemos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}