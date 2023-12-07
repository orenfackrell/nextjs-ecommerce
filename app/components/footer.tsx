'Use client';

import { Separator } from './ui/separator';

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-16 border-t mt-4 min-h-fit">
      <div className="flex items-center justify-center mt-2 space-x-2 text-sm">
        <span className="my-2">© 2023 Terrarium Emporium</span>
        <Separator orientation="vertical" className="w-0.5" />
        <a href="https://github.com/orenfackrell/nextjs-ecommerce">GitHub</a>
      </div>
    </footer>
  );
}
