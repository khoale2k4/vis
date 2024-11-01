"use client";

import AddNotification from "@/views/addNotifications";
import TableExample from "@/views/tableExample";

export default function Home() {

  return (
    <div className="flex justify-center place-items-center w-full gap-8 md:gap-2 px-2 flex-col md:flex-row z-0 md:h-full">
      <AddNotification />
      <div className="w-full md:flex-1 flex justify-center place-items-center h-screen md:h-full">
        <TableExample />
      </div>
    </div>
  );
};