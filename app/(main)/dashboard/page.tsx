"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchOccupancy } from "@/actions/room";
import { fetchTotalUsers } from "@/actions/users";

import Card from "@/components/DashboardCard/DashboardCard";
import DashboardTable from "@/components/DashboardTable/DashboardTable";

import styles from "@/styles/Dashboard.module.css";

const Dashboard = () => {

  const occupancyQuery = useQuery({
    queryKey: ["occupancy"],
    queryFn: () => fetchOccupancy(),
    refetchInterval: 1000 * 60
  });

  const totalUsersQuery = useQuery({
    queryKey: ["totalUsers"],
    queryFn: () => fetchTotalUsers(),
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>

          {occupancyQuery.isLoading && (
            <>Loading...</>
          )}
          {occupancyQuery.isError && (
            <>
              <div>
                {occupancyQuery.error as unknown as string}
              </div>
            </>
          )}

          {!occupancyQuery.isLoading && !occupancyQuery.isError && (
            <Card
              title="Members in Room"
              number={occupancyQuery.data?.membersInRoom}
              details="Say hi!"
              positive={(occupancyQuery.data?.membersInRoom > 0) as unknown as string}
            />
          )}


          {totalUsersQuery.isLoading && (
            <>Loading...</>
          )}
          {totalUsersQuery.isError && (
            <>
              <div>
                {totalUsersQuery.error as unknown as string}
              </div>
            </>
          )}
          {!totalUsersQuery.isLoading && !totalUsersQuery.isError && (
            <Card
              title="Total Members"
              number={totalUsersQuery.data} 
              positive={"up 20%"}
              details="Great!"
            />
          )}

          {true && (
            <Card
              title="Active Projects"
              number={10}
              positive={"up 20%"}
              details="Lets get Working!"
            />
          )}

        </div>
        {/* Admin or not? */}
        <DashboardTable />
      </div>
    </div>
  );
};

export default Dashboard;

