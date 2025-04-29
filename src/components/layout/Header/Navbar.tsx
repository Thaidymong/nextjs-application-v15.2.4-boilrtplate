'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileNavbar from './components/MobileNavbar';
import { LangButton } from '@/components/custom';
import { useScopedI18n } from '@/locales/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const t = useScopedI18n('navbar');

  return (
    <div className="bg-[#223240]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <header className="flex h-20 items-center justify-between px-4 md:px-6">
          <Link
            href="#"
            prefetch={false}
            className="flex items-center text-white"
          >
            <Image
              src="/car.svg"
              alt="Cambodia Map"
              width={110}
              height={110}
              className="opacity-80"
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-4 md:flex">
            <Link href="#" className="text-sm text-white hover:underline">
              {t('navbar.home')}
            </Link>
            <Link href="#" className="text-sm text-white hover:underline">
              {t('navbar.about')}
            </Link>
            <Link href="#" className="text-sm text-white hover:underline">
              {t('navbar.cars')}
            </Link>
            <Link href="#" className="text-sm text-white hover:underline">
              {t('navbar.contact')}
            </Link>
            <LangButton />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    sign up
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Login
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center md:hidden">
            <MobileNavbar />
          </div>
        </header>
      </div>
    </div>
  );
}
