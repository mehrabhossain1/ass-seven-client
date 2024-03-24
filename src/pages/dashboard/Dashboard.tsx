import { Outlet } from "react-router-dom";
import { Pie, PieChart } from "recharts";
import { useDonationsQuery } from "../../redux/features/donations/donationsApi";

const Dashboard = () => {
  const { data } = useDonationsQuery("");
  console.log(data?.donations);

  return (
    <div className="">
      <PieChart width={700} height={700}>
        <Pie
          data={data?.donations}
          label={(data) => data.title}
          dataKey="amount"
          outerRadius={250}
          fill="green"
        />
      </PieChart>

      <Outlet />
    </div>
  );
};

export default Dashboard;
