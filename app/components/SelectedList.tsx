"use client";

import { useStore } from "../store";

const SelectedList = () => {
  const selectedList = useStore((state) => state.selectedList);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col max-w-xs gap-4">
      <h2 className="text-xl font-bold text-blue-400 text-center">
        Selected List
      </h2>
      {selectedList ? (
        <div>
          <h3 className="text-lg font-semibold text-gray-300">
            {selectedList.name}
          </h3>
          <ul className="mt-4 space-y-4">
            {selectedList.users.map((user) => (
              <li
                key={user.id}
                className="flex justify-between bg-gray-700 p-3 rounded-lg"
              >
                <div>
                  <p className="font-semibold text-white">{user.firstName}</p>
                  <p className="text-gray-400">{user.email}</p>
                  <p className="text-gray-500 text-sm">{user.category}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center text-gray-400">No list selected.</p>
      )}
    </div>
  );
};

export default SelectedList;
