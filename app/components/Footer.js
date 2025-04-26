import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#ebedf1] py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* Left side */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/clutchclick-colorlogo.png"
              alt="ClutchClick Logo"
              width={180}
              height={36}
              className="mb-4"
            />
            <p className="text-gray-500 text-sm mt-2 text-center md:text-left">
              © Copyright 2025, All Rights Reserved by ClutchClick LLC
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-10 text-[#4A4F5C]">
              <Link href="/services" className="hover:text-black">Services</Link>
              <Link href="/why-us" className="hover:text-black">Why Us</Link>
              <Link href="/solution" className="hover:text-black">Solution</Link>
              <Link href="/pricing" className="hover:text-black">Pricing</Link>
              <Link href="/faq" className="hover:text-black">FAQ</Link>
            </div>
            <div className="flex gap-3">
              <Link href="https://twitter.com/clutchclick" target="_blank" className="hover:opacity-80">
                <Image
                  src="/xfooterlogo.svg"
                  alt="X (Twitter)"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="https://youtube.com/@clutchclick" target="_blank" className="hover:opacity-80">
                <Image
                  src="/youtubefooterlogo.svg"
                  alt="YouTube"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 