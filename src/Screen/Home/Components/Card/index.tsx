'use client';

import { BadgeCent, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

// Example notification data
const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
];

// Define the type for the vehicle prop
type Vehicle = {
  id: number;
  name: string;
  year: string;
  price: string;
  description: string;
};

type CardDemoProps = React.ComponentProps<typeof Card> & {
  vehicle: Vehicle; // Adding vehicle prop type here
};

export function CardDemo({ className, vehicle, ...props }: CardDemoProps) {
  return (
    <Card className={cn('w-auto', className)} {...props}>
      <CardHeader>
        <CardTitle>{vehicle.name}</CardTitle>
        <Image
          src="/ford.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <CardDescription>{vehicle.description}</CardDescription>
        <CardDescription className="text-lg font-medium">
          Model {vehicle.year}
        </CardDescription>
        <div className="flex items-center space-x-2">
          <BadgeCent className="text-yellow-600" />{' '}
          {/* Optional: Added color for visual clarity */}
          <CardDescription className="text-lg font-medium">
            {vehicle.price}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm leading-none font-medium">
                  {notification.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
