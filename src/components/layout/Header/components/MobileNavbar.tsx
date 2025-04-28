import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/cars', label: 'Cars' },
];

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  const renderNavLink = ({ href, label }: { href: string; label: string }) => (
    <div
      key={href}
      onClick={() => handleLinkClick(href)}
      className="hover:bg-accent cursor-pointer rounded-md py-2 transition-all duration-300 hover:px-2 hover:font-semibold"
    >
      <span className="w-full text-sm">{label}</span>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="text-white">
          <Menu className="h-6 w-6" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Accordion type="single" collapsible className="w-full">
            {NAV_LINKS.map(renderNavLink)}

            <AccordionItem value="contact" className="border-none text-lg">
              <AccordionTrigger className="hover:bg-accent cursor-pointer rounded-md py-2 transition-all duration-300 hover:px-2 hover:font-semibold">
                <div>Contact</div>
              </AccordionTrigger>
              <AccordionContent>
                <nav className="flex flex-col space-y-2">
                  <Link
                    href="/contact/individual"
                    className="hover:bg-accent cursor-pointer rounded-md px-4 py-2 text-base transition-all duration-300 hover:px-5 hover:font-semibold"
                    onClick={() => handleLinkClick('/contact/individual')}
                  >
                    Individual
                  </Link>
                  <Link
                    href="/contact/company"
                    className="hover:bg-accent cursor-pointer rounded-md px-4 py-2 text-base transition-all duration-300 hover:px-5 hover:font-semibold"
                    onClick={() => handleLinkClick('/contact/company')}
                  >
                    Company
                  </Link>
                </nav>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
