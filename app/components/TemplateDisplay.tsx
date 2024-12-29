"use client";
import { useStore } from "../store";

const TemplateDisplay = () => {
  const selectedTemplate = useStore((state) => state.selectedTemplate);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white max-w-2xl   w-full">
      <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">
        Template Details
      </h2>
      {selectedTemplate ? (
        <div>
          <h3 className="text-xl font-semibold text-white">
            {selectedTemplate.name}
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: selectedTemplate.content }}
            className="mt-4 bg-gray-700 p-4 rounded-lg border border-gray-600 overflow-hidden text-gray-300"
          />
        </div>
      ) : (
        <p className="text-gray-400 text-center">
          No template selected. Please select a template to view its details.
        </p>
      )}
    </div>
  );
};

export default TemplateDisplay;
