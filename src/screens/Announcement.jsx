import React, { useState } from "react"
import { NotificationCircle } from "iconsax-react";

import EmptyAnnouncement from "../components/EmptyAnnouncement";
import AnnouncementTabs from "../components/AnnouncementTabs"

export default function Locate() {
  const [announcements, setAnnouncements] = useState([0]);

  return (
    <div>
      <div className="flex items-center gap-3 mb-6 ml-3">
        <NotificationCircle
          size={28}
          variant="Bulk"
          className="text-[#6B8E23]"
        />
        <h1 className="text-2xl font-bold text-gray-800">
          Announcements
        </h1>
      </div>

      {announcements.length === 0 ? (
        <EmptyAnnouncement />
      ) : (
        <AnnouncementTabs />
      )}
    </div>
  );
}
