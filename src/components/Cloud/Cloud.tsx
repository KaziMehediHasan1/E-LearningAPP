"use client";

import { HiUserGroup } from "react-icons/hi";
import { RiBillLine, RiCalendar2Line } from "react-icons/ri";

const Cloud:React.FC = () => {
  return (
    <div className="lg:w-[1036px] mx-auto font-mFont mt-32">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold text-center">
          <span className="text-[#2F327D]">All-In-One</span>{" "}
          <span className="text-[#00CBBB]">Cloud Software.</span>
        </h1>
        <p className="lg:w-[550px] w-96 mx-auto text-gray-500">
          LWM is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>
        {/** Cards start **/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 space-y-10 md:space-y-0 pt-16">
          <div className="relative flex justify-center items-center">
            {/* Icon with Background Circle */}
            <div className="absolute -top-8 bg-[#5B72EE] rounded-full text-center w-16 h-16 flex items-center justify-center text-white shadow-md">
              <RiBillLine className="text-3xl" />
            </div>

            {/* Card Container */}
            <div className="w-80 h-56 p-6 pt-14 shadow-lg rounded-lg border bg-white">
              {/* Title */}
              <h1 className="text-xl text-[#2F327D] font-semibold text-center">
                Online Billing, Invoicing, & Contracts
              </h1>

              {/* Description */}
              <p className="mt-2 text-sm text-[#696984] text-center">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {/* Icon with Background Circle */}
            <div className="absolute -top-8 bg-[#00CBBB] rounded-full text-center w-16 h-16 flex items-center justify-center text-white shadow-md">
              <RiCalendar2Line className="text-3xl" />
            </div>

            {/* Card Container */}
            <div className="w-80 h-56 p-6 pt-14 shadow-lg rounded-lg border bg-white">
              {/* Title */}
              <h1 className="text-xl text-[#2F327D] font-semibold text-center">
                Easy Scheduling & Attendance Tracking
              </h1>

              {/* Description */}
              <p className="mt-2 text-sm text-[#696984] text-center">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance
              </p>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            {/* Icon with Background Circle */}
            <div className="absolute -top-8 bg-[#29B9E7] rounded-full text-center w-16 h-16 flex items-center justify-center text-white shadow-md">
            <HiUserGroup className="text-3xl" />
            </div>

            {/* Card Container */}
            <div className="w-80 h-56 p-6 pt-14 shadow-lg rounded-lg border bg-white">
              {/* Title */}
              <h1 className="text-xl text-[#2F327D] font-semibold text-center">
                Online Billing, Invoicing, & Contracts
              </h1>

              {/* Description */}
              <p className="mt-2 text-sm text-[#696984] text-center">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
