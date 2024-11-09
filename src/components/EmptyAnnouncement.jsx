import { Gameboy } from "iconsax-react";

export default function EmptyAnnouncement() {
  return (
    <div className="flex flex-col items-center justify-start pt-36 h-screen">
      <h1 className="text-4xl font-dmSans italic">No Announcement</h1>
      <Gameboy size="64" className="mt-4" />
    </div>
  );
}
