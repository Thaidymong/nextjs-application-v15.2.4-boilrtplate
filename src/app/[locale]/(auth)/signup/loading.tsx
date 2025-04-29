import { MobileContainer } from '@/components/ui/mobile-container';

export default function Loading() {
  return (
    <MobileContainer>
      <div className="inset-0 flex min-h-screen items-center justify-center bg-white p-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-4xl leading-[1.2] font-bold">our website!</h1>
          </div>

          <div className="border-t-primary mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200" />

          <div className="mt-8">
            <p className="text-lg">សូមរង់ចាំ</p>
            <p className="text-muted-foreground text-sm">កំពុងដំណើរការ</p>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
