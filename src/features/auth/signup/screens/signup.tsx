'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye } from 'lucide-react';

export const SignupScreen = () => {
  return (
    <div className="bg-background relative flex min-h-screen flex-col px-4 md:px-6">
      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[400px] space-y-6">
          {/* Title and Description */}
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold md:text-3xl">Welcome</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Gawin website
            </p>
          </div>

          {/* Signup Form */}
          <form className="space-y-4">
            {/* Full Name Field */}
            <div className="space-y-2">
              <Input type="text" placeholder="ឈ្មោះពេញ" className="h-12" />
            </div>

            {/* Full Name (English) Field */}
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="ឈ្មោះពេញ (អង់គ្លេស)"
                className="h-12"
              />
            </div>
            {/* Username Field */}
            <div className="space-y-2">
              <Input type="text" placeholder="ឈ្មោះគណនី" className="h-12" />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type="password"
                  placeholder="ពាក្យសម្ងាត់"
                  className="h-12 pr-12"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2"
                >
                  <Eye className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Profile Field */}
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="ប្រភេទប្រវត្តិរូប"
                className="h-12"
              />
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <Input type="text" placeholder="លេខទូរស័ព្ទ" className="h-12" />
            </div>

            {/* Gender Field */}
            <div className="space-y-2">
              <Input type="text" placeholder="ភេទ" className="h-12" />
            </div>

            {/* Nationality Field */}
            <div className="space-y-2">
              <Input type="text" placeholder="ជាតិ" className="h-12" />
            </div>

            {/* National ID Field */}
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="លេខសម្គាល់មូលដ្ឋាន"
                className="h-12"
              />
            </div>

            {/* Position Level Field */}
            <div className="space-y-2">
              <Input type="text" placeholder="តំរូវការតំណែង" className="h-12" />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="h-12 w-full text-base font-medium text-white"
            >
              ចូលប្រព័ន្ធ
            </Button>
          </form>
        </div>
      </main>

      <footer className="text-muted-foreground p-4 text-center text-sm">
        &copy; 2025 all right reserved Dymong
      </footer>
    </div>
  );
};
