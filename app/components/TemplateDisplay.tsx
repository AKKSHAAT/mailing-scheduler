"use client"
import { useStore } from '../store';

const TemplateDisplay = () => {
    const selectedTemplate = useStore((state) => state.selectedTemplate);
  
    return (
      <div className="text-white max-w-sm">
        {selectedTemplate ? (
          <div>
            <p className='font-semibold text-xl'>{selectedTemplate.name}</p>
            <div
              dangerouslySetInnerHTML={{ __html: selectedTemplate.content }}
              className="mt-4 bg-gray-800 p-4  rounded-lg flex-col flex gap-3"
            />
          </div>
        ) : (
          <p>No template selected</p>
        )}
      </div>
    );
  };
  
export default TemplateDisplay;
