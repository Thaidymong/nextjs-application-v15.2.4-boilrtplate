'use client';

import React from 'react';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

export const LangButton: React.FC = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'kh' : 'en';
    changeLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLocale}
      className="relative flex h-9 w-20 items-center rounded-full bg-gray-300 p-1 transition-colors dark:bg-gray-700"
    >
      <span
        className={`absolute top-1 left-1 h-7 w-8 transform rounded-full bg-white shadow-md transition-transform duration-300 dark:bg-gray-900 ${
          locale === 'kh' ? 'translate-x-10' : ''
        }`}
      />
      <span className="z-10 w-1/2 text-center text-xs font-medium text-black dark:text-white">
        EN
      </span>
      <span className="z-10 w-1/2 text-center text-xs font-medium text-black dark:text-white">
        ខ្មែរ
      </span>
    </button>
  );
};
