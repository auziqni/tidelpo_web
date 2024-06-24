import TableSensor from "@/components/dashboard/tableSensor";
import { dataSensor } from "@/lib/mock/mockSensor";

export default function Page({ params }: { params: { code: string } }) {
  //   const data = dataSensor;
  const data = dataSensor.filter((sensor) => sensor.deviceCode === params.code);
  return (
    <div className="  w-full  p-5">
      <TableSensor data={data} />
    </div>
  );
}
