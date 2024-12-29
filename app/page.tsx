import Form from "./components/Form";
import ScheduleList from "./schedule/page";
import TemplateDisplay from "./components/TemplateDisplay";
import SelectedList from "./components/SelectedList";

export default async function Home() {
  const templateReq = await fetch("http://localhost:3000/api/mailer");
  const listReq = await fetch("http://localhost:3000/api/recipient");

  const { mailingTemplates } = await templateReq.json();
  const { recipientLists } = await listReq.json();

  return (
    <div className="grid grid-cols-3 gap-4 min-h-screen bg-gray-900 text-white p-4">
     <Form mailingTemplates={mailingTemplates} recipientLists={recipientLists} />
     <SelectedList />
     <TemplateDisplay />
    </div>
  );
}
