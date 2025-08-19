import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import dashboard_users from "../../assets/images/dashbord_users.png";
import dashboard_admin from "../../assets/images/admin.png";
import dashboard_revenue from "../../assets/images/revenue.png";
import dashboard_pending from "../../assets/images/pending.png";

function Dashboard() {
  return (
    <>
      <div className="main main_page bg-[#FFFEF6] font-Montserrat space-y-4">
        {/* ---------title page */}
        <PageTitle title={"Dashboard"} />
        {/* ---------card box */}
        <div className="mt-4">
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
        </div>
      </div>
    </>
  );
}

export default Dashboard;
