import Map from "@/components/dashboard/map";
import React from "react";
import datamock from "@/lib/mock/alatMock.json";

export default function Dashboard() {
  return (
    <div className="relative">
      <Map dataTiang={datamock} />
      {/* <div className="h-full w-full bg-red-200"></div> */}
    </div>
  );
}
