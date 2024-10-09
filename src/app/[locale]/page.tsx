import AddNotification from "@/components/addNotifications";
import Notifications from "@/components/notifications";

export default function Home() {

  return (
    <div className="flex justify-center place-items-center">
      <AddNotification />
      <Notifications />
    </div>
  );
}
