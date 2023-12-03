'Use client';

import { Separator } from '../separator';

export function Footer() {
  return (
    <footer className="absolute bottom-0 flex flex-col items-center justify-center w-full h-16 border-t">
      <div className="flex items-center justify-center mt-2 space-x-2 text-sm">
        <span>© 2023 Terrarium Emporium</span>
        <Separator orientation="vertical" className="w-0.5 bg-black" />
        <a href="https://github.com/orenfackrell/nextjs-ecommerce">GitHub</a>
      </div>
    </footer>
  );
}
