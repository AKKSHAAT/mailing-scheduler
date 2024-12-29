"use client";
import { useStore } from "../store";

const Form = ({ mailingTemplates, recipientLists }) => {
  const setSelectedTemplate = useStore((state) => state.setSelectedTemplate);
  return (
    <form className="bg-gray-800 p-8  rounded-lg shadow-lg w-full max-w-xs space-y-6">
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
                (template: any) => template.id === Number(e.target.value)
              )
            )
          }
        >
          <option value="">-- Select Mailer --</option>
          {mailingTemplates.map((template: any) => (
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
        >
          <option value="">-- Select List --</option>
          {recipientLists.map((list: any) => (
            <option key={list.id} value={list.id}>
              {list.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="schedule" className="block text-md font-medium mb-2">
          When ?
        </label>
        <input
          id="schedule"
          name="schedule"
          type="datetime-local"
          className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
      >
        Schedule
      </button>
    </form>
  );
};

export default Form;
