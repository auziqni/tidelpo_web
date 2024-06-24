import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Status_tiang } from "@prisma/client";
const prisma = new PrismaClient();

type reqstate = {
  deviceCode: string;
  lat: number;
  lng: number;
  statusTiang: "aman" | "waspada" | "bahaya";
  sensSoil: number;
  sensPressure: number;
  sensTilt: number;
};

export async function POST(request: Request) {
  try {
    const body: reqstate = await request.json();

    try {
      const editlocation = await prisma.device.update({
        where: {
          deviceCode: body.deviceCode,
        },
        data: {
          lat: body.lat,
          lng: body.lng,
        },
      });

      if (editlocation) {
        const writestate = await prisma.sensor.create({
          data: {
            deviceCode: body.deviceCode,
            statusTiang: body.statusTiang as Status_tiang,
            sensSoil: body.sensSoil,
            sensPressure: body.sensPressure,
            sensTilt: body.sensTilt,
          },
        });
        return NextResponse.json(writestate);
      }
    } catch (error) {
      return NextResponse.json({ error: "device not found" }, { status: 404 });
    }
  } catch (error) {}
}
