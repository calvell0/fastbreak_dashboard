import DashboardClient from '@/components/dashboard/DashboardClient';
import LeaderboardWidget from '@/components/dashboard/LeaderboardWidget';
import ChartWidget from '@/components/dashboard/ChartWidget';

export default function Dashboard() {
  return (
    <>
      <DashboardClient />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeaderboardWidget />
        <ChartWidget />
      </div>
    </>
  );
} 