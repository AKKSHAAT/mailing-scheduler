import { Suspense } from "react";
import Form from "./components/Form";
import TemplateDisplay from "./components/TemplateDisplay";
import SelectedList from "./components/SelectedList";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

// Fetch data on the server side
const fetchData = async () => {
  const templateReq = await fetch(`${API_BASE_URL}/api/mailer`);
  const listReq = await fetch(`${API_BASE_URL}/api/recipient`);

  const { mailingTemplates } = await templateReq.json();
  const { recipientLists } = await listReq.json();

  return { mailingTemplates, recipientLists };
};

// Export page with async fetch data
export default async function Home() {
  const { mailingTemplates, recipientLists } = await fetchData();

  return (
    <div className="grid grid-cols-3 gap-4 min-h-screen bg-gray-900 text-white p-4">
      <Form mailingTemplates={mailingTemplates} recipientLists={recipientLists} />
      <SelectedList />
      <TemplateDisplay />
    </div>
  );
}
