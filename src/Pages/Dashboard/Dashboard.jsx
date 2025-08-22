import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import dashboard_users from "../../assets/images/dashbord_users.png";
import dashboard_admin from "../../assets/images/admin.png";
import dashboard_revenue from "../../assets/images/revenue.png";
import dashboard_pending from "../../assets/images/pending.png";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const feedbackData = [
  { name: "Mon", feedbacks: 120 },
  { name: "Tue", feedbacks: 200 },
  { name: "Wed", feedbacks: 150 },
  { name: "Thu", feedbacks: 80 },
  { name: "Fri", feedbacks: 250 },
];

const usersData = [
  { name: "Jan", active: 400, new: 200 },
  { name: "Feb", active: 600, new: 300 },
  { name: "Mar", active: 500, new: 280 },
];

const ratingData = [
  { name: "Dish A", value: 4.5 },
  { name: "Dish B", value: 3.8 },
  { name: "Dish C", value: 4.2 },
];

function Dashboard() {
  const navigate = useNavigate();

  const widgets = [
    {
      title: "Total Feedbacks",
      value: "1,245",
      filter: "Today / Week / Month",
      route: "/reports/feedbacks",
    },
    {
      title: "Active Users",
      value: "534",
      filter: "Daily / Monthly",
      route: "/reports/users",
    },
    {
      title: "New Registrations",
      value: "98",
      route: "/reports/registrations",
    },
    { title: "Flagged Users", value: "12", route: "/reports/flagged" },
    {
      title: "Pending Feedbacks",
      value: "7",
      route: "/reports/pending-feedbacks",
    },
    {
      title: "Total Check-ins",
      value: "3,410",
      filter: "Today / Week / Month",
      route: "/reports/checkins",
    },
  ];
  return (
    <>
      <div className="main main_page  font-Montserrat space-y-4">
        {/* ---------title page */}
        <PageTitle title={"Dashboard"} />
        {/* ---------card box */}
        {/* <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3 bg-[#ffe0cc] rounded-xl flex space-x-3 h-[100px]   justify-between">
              <div className="space-y-3">
                <h4 className="text-[14px] text-[#78797a] font-[500]">
                  Total User
                </h4>
                <p className="text-[22px] font-bold">40,689</p>
              </div>
              <div className="">
                <div className="w-15 h-15 bg-[#e5e4ff]  rounded-3xl flex justify-center  items-center">
                  <img src={dashboard_users} alt="dashboard_users" />
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#ffe0cc] rounded-xl flex space-x-3 h-[100px]   justify-between">
              <div className="space-y-3">
                <h4 className="text-[14px] text-[#78797a] font-[500]">
                  Total Admin
                </h4>
                <p className="text-[22px] font-bold">40</p>
              </div>
              <div className="">
                <div className="w-15 h-15 bg-[#fff3d6] rounded-3xl flex justify-center  items-center">
                  <img src={dashboard_admin} alt="dashboard_users" />
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#ffe0cc] rounded-xl flex space-x-3 h-[100px]   justify-between">
              <div className="space-y-3">
                <h4 className="text-[14px] text-[#78797a]  font-[500]">
                  Total Revenue
                </h4>
                <p className="text-[22px] font-bold">40,689</p>
              </div>
              <div className="">
                <div className="w-15 h-15 bg-[#d9f7e8] rounded-3xl flex justify-center  items-center">
                  <img src={dashboard_revenue} alt="dashboard_users" />
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#ffe0cc] rounded-xl flex space-x-3 h-[100px]   justify-between">
              <div className="space-y-3">
                <h4 className="text-[14px] text-[#78797a] font-[500]">
                  Total Service Providers
                </h4>
                <p className="text-[22px] font-bold">40,689</p>
              </div>
              <div className="">
                <div className="w-15 h-15 bg-[#ffded1] rounded-3xl flex justify-center  items-center">
                  <img src={dashboard_pending} alt="dashboard_users" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {widgets.map((w, i) => (
            <div
              key={i}
              onClick={() => navigate(w.route)}
              className="cursor-pointer rounded-2xl shadow-md p-6 bg-white  hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-600 ">
                {w.title}
              </h2>
              <p className="text-3xl font-bold mt-2 text-gray-900 ">
                {w.value}
              </p>
              {w.filter && (
                <p className="text-sm text-gray-500  mt-1">{w.filter}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {/* Line Chart - Feedback Trends */}
          <div className="bg-white  p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Feedback Trends</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={feedbackData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="feedbacks" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart - Active vs New Users */}
          <div className="bg-white  p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Users Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={usersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="active" fill="#82ca9d" />
                <Bar dataKey="new" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Ratings by Dish */}
          <div className="bg-white  p-4 rounded-xl shadow col-span-1 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Avg. Ratings by Dish</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ratingData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  label
                >
                  {ratingData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={["#82ca9d", "#8884d8", "#ffc658"][index % 3]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
