import { Card, CardContent } from "@/components/ui/card";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <div className="">
   
       <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold">📊 Analytics</h2>
          <p className="text-gray-500 mt-2">Track your app performance here.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold">👥 Users</h2>
          <p className="text-gray-500 mt-2">Manage your users and roles.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold">⚙️ Settings</h2>
          <p className="text-gray-500 mt-2">Configure your dashboard.</p>
        </CardContent>
      </Card>
    </div>
    </div>
   
  );
}
