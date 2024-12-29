import Form from "./components/Form";

export default async function Home() {
  const templateReq = await fetch("http://localhost:3000/api/mailer");
  const listReq = await fetch("http://localhost:3000/api/recipient");

  const { mailingTemplates } = await templateReq.json();
  const { recipientLists } = await listReq.json();

  return (
    <div className="flex justify-between min-h-screen bg-gray-900 text-white p-4">
     <Form mailingTemplates={mailingTemplates} recipientLists={recipientLists} />
    </div>
  );
}
