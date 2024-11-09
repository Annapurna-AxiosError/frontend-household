import React, { useState } from "react";
import AnnouncementCard from "./AnnouncementCard";
import dummyAnnouncements from "./dummyAnnouncement"; // Import your dummy data

export default function AnnouncementTabs() {
  const [announcements, setAnnouncements] = useState(dummyAnnouncements);

  const toggleReadStatus = (id) => {
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.map((announcement) =>
        announcement.id === id
          ? { ...announcement, read: !announcement.read }
          : announcement
      )
    );
  };

  const unreadAnnouncements = announcements.filter((a) => !a.read);
  const readAnnouncements = announcements.filter((a) => a.read);

  return (
    <div>
      <h1>Unread Announcements</h1>
      {unreadAnnouncements.map((a) => (
        <AnnouncementCard
          key={a.id}
          {...a}
          onToggleReadStatus={toggleReadStatus}
        />
      ))}

      <h1>Read Announcements</h1>
      {readAnnouncements.map((a) => (
        <AnnouncementCard
          key={a.id}
          {...a}
          onToggleReadStatus={toggleReadStatus}
        />
      ))}
    </div>
  );
}
