import DashboardBar from "@/components/DashboardBar/DashboardBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <div className="h-screen flex font-mFont">
        {/* LEFT */}
        <DashboardBar />
        {/* RIGHT */}
        <div className="bg-blue-50 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll">
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
