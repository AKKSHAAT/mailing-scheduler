"use client";

import { useEffect, useState } from "react";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSchedules = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/schedule");
      const data = await response.json();
      setSchedules(data.scheduleList || []);
    } catch (error) {
      console.error("Error fetching schedules:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch("/api/schedule", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const { data } = await response.json();
      if (response.ok) {
        alert("Schedule deleted successfully!");
        setSchedules(data.scheduleList || []);
      } else {
        alert(data.error || "Failed to delete schedule");
      }
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Scheduled Mailings
        </h1>
        {loading ? (
          <p className="text-center text-gray-300">Loading schedules...</p>
        ) : schedules.length === 0 ? (
          <p className="text-center text-gray-300">No schedules found.</p>
        ) : (
          <ul className="space-y-6">
            {schedules.map((schedule, index) => (
              <li
                key={index}
                className="bg-gray-700 p-5 rounded-lg flex flex-col sm:flex-row sm:justify-between items-start sm:items-center"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-lg text-blue-300">
                    Mailer: {schedule.mailer}
                  </p>
                  <p className="text-gray-300">List: {schedule.list}</p>
                  <p className="text-gray-400 text-sm">
                    Scheduled for: {schedule.schedule}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="mt-4 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ScheduleList;
