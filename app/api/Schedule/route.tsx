import { NextResponse } from "next/server";
import { scheduleList } from "@/app/db";

export async function GET() {
  return NextResponse.json({ scheduleList });
}

export async function POST(req: Request) {
  try {
    const newSchedule = await req.json();

    if (!newSchedule.mailer || !newSchedule.list || !newSchedule.schedule) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    scheduleList.push(newSchedule);

    return NextResponse.json(
      { message: "Schedule added successfully", scheduleList },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding schedule:", error);
    return NextResponse.json(
      { error: "Failed to add schedule" },
      { status: 500 }
    );
  }
}


export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    if (typeof id === "undefined") {
      return NextResponse.json(
        { error: "Schedule ID is required" },
        { status: 400 }
      );
    }
    const index = scheduleList.findIndex((_, idx) => idx === id);
    if (index === -1) {
      return NextResponse.json(
        { error: "Schedule not found" },
        { status: 404 }
      );
    }
    scheduleList.splice(index, 1);
    return NextResponse.json(
      { message: "Schedule deleted successfully", scheduleList },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete schedule" },
      { status: 500 }
    );
  }
}