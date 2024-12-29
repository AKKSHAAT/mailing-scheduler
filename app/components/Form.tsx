"use client";
import { useState } from "react";
import { useStore } from "../store";
import Link from "next/link";

interface Template {
  id: number;
  name: string;
  content: string;
}

interface RecipientList {
  id: number;
  name: string;
  users: {
    id: number;
    email: string;
    firstName: string;
    category: string;
  }[];
}
interface FormProps {
  mailingTemplates: Template[];
  recipientLists: RecipientList[];
}


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";


const Form: React.FC<FormProps> = ({ mailingTemplates, recipientLists }) => {
  const setSelectedTemplate = useStore((state) => state.setSelectedTemplate);
  const setSelectedList = useStore((state) => state.setSelectedList);
  const [schedule, setSchedule] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mailerElement = (e.target as any).mailer;
    const listElement = (e.target as any).list;

    const newSchedule = {
      mailer: mailerElement.value,
      list: listElement.value,
      schedule,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/schedule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSchedule),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Schedule added successfully!");
        console.log("Updated Schedule List:", data.scheduleList);
      } else {
        alert(data.error || "Failed to add schedule");
      }
    } catch (error) {
      console.error("Error submitting schedule:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-lg shadow-lg w-full  max-w-md space-y-6"
    >
      <h1 className="text-2xl font-bold text-center text-blue-400">
        Schedule Mailing ✉️
      </h1>

      <div>
        <select
          id="mailer"
          name="mailer"
          className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setSelectedTemplate(
              mailingTemplates.find(
                (template: Template) => template.id === Number(e.target.value)
              ) ?? null
            )
          }
        >
          <option value="">-- Select Mailer --</option>
          {mailingTemplates.map((template: Template) => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          id="list"
          name="list"
          className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setSelectedList(
              recipientLists.find(
                (recipient: RecipientList) =>
                  recipient.id === Number(e.target.value)
              ) ?? null
            )
          }
        >
          <option value="">-- Select List --</option>
          {recipientLists.map((list: RecipientList) => (
            <option key={list.id} value={list.id}>
              {list.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="schedule" className="block text-md font-medium mb-2">
          When?
        </label>
        <input
          id="schedule"
          name="schedule"
          type="datetime-local"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
      >
        Schedule
      </button>
      <div className="mt-2">
        <Link className="text-blue-500" href={"/schedule"}>
          Your Schedules
        </Link>
      </div>
    </form>
  );
};

export default Form;
