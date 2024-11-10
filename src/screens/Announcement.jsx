import React, { useEffect, useState } from "react"
import { NotificationCircle } from "iconsax-react";
import axios from "axios";

import EmptyAnnouncement from "../components/EmptyAnnouncement";
import AnnouncementTabs from "../components/AnnouncementTabs"

export default function Locate() {
  const [announcements, setAnnouncements] = useState([0]);
  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const response = await axios.get("https://annapurna.arnabbhowmik019.workers.dev/v1/ngo/notifications");
        const data = response.data;
        setAnnouncements(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    }
    fetchAnnouncements();
    }, []);
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
