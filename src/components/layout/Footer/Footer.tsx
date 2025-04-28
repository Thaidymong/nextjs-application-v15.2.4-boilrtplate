'use client';

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useScopedI18n } from '@/locales/client';

const Footer = () => {
  const t = useScopedI18n('footer');

  return (
    <footer className="hidden bg-[#223240] py-6 md:flex">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex justify-center space-x-6">
          <Link href="#" className="text-white">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-white">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-white">
            <Youtube className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-white">
            <Facebook className="h-6 w-6" />
          </Link>
        </div>

        <div className="text-center text-sm text-gray-200">
          <p>{t('footer.copyright')}</p>
          <div className="mt-2">
            <Link href="/terms">
              <h1 className="mx-2 text-white hover:text-gray-500">
                {t('footer.terms')}
              </h1>
            </Link>
            <Link href="/privacy">
              <h1 className="mx-2 text-white hover:text-gray-500">
                {t('footer.privacy')}
              </h1>
            </Link>
            <Link href="/legal">
              <h1 className="mx-2 text-white hover:text-gray-500">
                {t('footer.legal')}
              </h1>
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button className="text-sm text-white hover:text-gray-500">
            {t('footer.cookies')}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
