import Form from "./components/Form";
import TemplateDisplay from "./components/TemplateDisplay";

export default async function Home() {
  const templateReq = await fetch("http://localhost:3000/api/mailer");
  const listReq = await fetch("http://localhost:3000/api/recipient");

  const { mailingTemplates } = await templateReq.json();
  const { recipientLists } = await listReq.json();

  return (
    <div className="grid grid-cols-3 gap-4 min-h-screen bg-gray-900 text-white p-4">
     <Form mailingTemplates={mailingTemplates} recipientLists={recipientLists} />
     <TemplateDisplay />
    </div>
  );
}
