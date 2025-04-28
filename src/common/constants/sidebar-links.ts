import {
  LayoutDashboardIcon,
  PieChartIcon,
  QrCode,
  UserRoundCog,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type NavLink = {
  title: string;
  icon: LucideIcon;
  href: string;
  hrefAsIs?: boolean;
};

export type SidebarLinkItem = NavLink & {
  children?: Omit<NavLink, 'icon' | 'children'>[];
  type?: never;
};

export type SidebarLink =
  | SidebarLinkItem
  | {
      type: 'divider';
      title: string;
    };

export const sidebarLinks: SidebarLink[] = [
  {
    type: 'divider',
    title: 'ផ្ទាំងគ្រប់គ្រង',
  },
  {
    title: 'ផ្ទាំងគ្រប់គ្រង',
    icon: LayoutDashboardIcon,
    href: '/dashboard',
  },
  {
    type: 'divider',
    title: 'របាយការណ៍វត្តមាន',
  },
  {
    title: 'របាយការណ៍វត្តមានមន្រ្តី',
    icon: PieChartIcon,
    href: '/attendance-report',
  },
  {
    type: 'divider',
    title: 'ឃ្យូ.អ.កូដ',
  },
  {
    title: 'ការគ្រប់គ្រង់ ឃ្យូ.អ.កូដ',
    icon: QrCode,
    href: '/qrs-management',
    children: [
      {
        title: 'ឃ្យូ.អ.កូដ តាមអង្គភាព',
        href: '/department-qrs',
      },
      {
        title: 'ឃ្យូ.អ.កូដ កិច្ចប្រជុំ/សិក្ខាសាលា',
        href: '/event-qrs',
      },
    ],
  },
  {
    type: 'divider',
    title: 'ការកំណត់',
  },
  {
    title: 'ការគ្រប់គ្រងអ្នកប្រើប្រាស់',
    icon: UserRoundCog,
    href: '/users-management',
    children: [
      {
        title: 'បញ្ជីមន្រ្តីរាជការ',
        href: '/officers',
      },
      {
        title: 'បញ្ជីមន្រ្តីប្រើប្រាស់ប្រព័ន្ធ',
        href: '/users',
      },
      {
        title: 'បញ្ជីតួនាទី',
        href: '/roles',
      },
      {
        title: 'បញ្ជីអង្គភាព',
        href: '/departments',
      },
    ],
  },
];
