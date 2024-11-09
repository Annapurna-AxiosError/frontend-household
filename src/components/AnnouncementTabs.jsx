import React, { useState } from "react";
import { announcements } from "../constants/dummyAnnouncement";
import AnnouncementCard from "../components/AnnouncementCards";
import { Notification, NotificationCircle } from "iconsax-react";

const AnnouncementTabs = () => {
  const [activeTab, setActiveTab] = useState("unread");

  const unreadAnnouncements = announcements.filter(a => !a.read);
  const readAnnouncements = announcements.filter(a => a.read);

  return (
    <div className="p-4">
      {/* Tabs container */}
      <div className="relative flex mb-4">
        {/* Tab buttons with overlapping effect */}
        <button
          className={`relative z-10 px-6 py-2 rounded-t-lg border-t border-x 
            flex items-center gap-2
            ${activeTab === "unread"
              ? "bg-white -mb-px border-gray-200"
              : "bg-gray-100 border-transparent"
            } mr-1 transition-colors duration-200`}
          onClick={() => setActiveTab("unread")}
        >
          <Notification
            size={20}
            variant={activeTab === "unread" ? "Bold" : "Linear"}
            className={activeTab === "unread" ? "text-[#6B8E23]" : "text-gray-600"}
          />
          <span className={activeTab === "unread" ? "text-[#6B8E23] font-medium" : "text-gray-600"}>
            Unread ({unreadAnnouncements.length})
          </span>
        </button>
        <button
          className={`relative z-10 px-6 py-2 rounded-t-lg border-t border-x
            flex items-center gap-2
            ${activeTab === "read"
              ? "bg-white -mb-px border-gray-200"
              : "bg-gray-100 border-transparent"
            } transition-colors duration-200`}
          onClick={() => setActiveTab("read")}
        >
          <Notification
            size={20}
            variant={activeTab === "read" ? "Bold" : "Linear"}
            className={activeTab === "read" ? "text-[#6B8E23]" : "text-gray-600"}
          />
          <span className={activeTab === "read" ? "text-[#6B8E23] font-medium" : "text-gray-600"}>
            Read ({readAnnouncements.length})
          </span>
        </button>
      </div>

      {/* Content panel with border to connect with active tab */}
      <div className="border border-gray-200 rounded-lg rounded-tl-none bg-white p-4">
        {activeTab === "unread" && (
          <div>
            {unreadAnnouncements.map(a => (
              <AnnouncementCard
                key={a.id}
                title={a.title}
                content={a.content}
              />
            ))}
            {unreadAnnouncements.length === 0 && (
              <div className="text-gray-500 text-center py-8 flex flex-col items-center gap-3">
                <Notification size={32} variant="Bulk" className="text-gray-400" />
                <p>No unread announcements</p>
              </div>
            )}
          </div>
        )}
        {activeTab === "read" && (
          <div>
            {readAnnouncements.map(a => (
              <AnnouncementCard
                key={a.id}
                title={a.title}
                content={a.content}
              />
            ))}
            {readAnnouncements.length === 0 && (
              <div className="text-gray-500 text-center py-8 flex flex-col items-center gap-3">
                <Notification size={32} variant="Bulk" className="text-gray-400" />
                <p>No read announcements</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementTabs;
