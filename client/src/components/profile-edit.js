import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileEdit() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = () => {
    // Implement save logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full p-4 bg-white shadow-md rounded-lg">
        <div className="relative">
          <img src="/img/landscape.jpg" alt="img" className="rounded-lg h-40 w-full object-cover" />
          <div className="absolute bottom-0 left-0 aspect-square">
            <div className="h-24 w-24 border-4 border-sky-500 rounded-full">
              <img src="/img/square.jpg" alt="Profile" className="h-full w-full rounded-full" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div>
              <input
                type="text"
                placeholder="Name here"
                className="text-base font-bold text-gray-800 border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
                value={localStorage.getItem("name")}
                onChange={(e) => setName(e.target.value)}
              />
              <p className=" text-xs text-gray-500 mb-1">{`@${name}`}</p>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-gray-700 mr-2" />
                <input
                  type="text"
                  placeholder="Location"
                  className="text-sm bg-gray-100 px-3 py-2 rounded-md flex-1 border border-gray-300"
                  value={localStorage.getItem("location")}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-gray-700 mr-2" />
            <input
              type="text"
              placeholder="Phone"
              className="text-sm bg-gray-100 px-3 py-2 rounded-md flex-1 border border-gray-300"
              value={localStorage.getItem("phone")}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-gray-700 mr-2" />
            <input
              type="text"
              placeholder="Email"
              className="text-sm bg-gray-100 px-3 py-2 rounded-md flex-1 border border-gray-300"
              value={localStorage.getItem("email")}
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold text-violet-950">Emergency Contacts</p>
          <p className="text-xs font-bold text-gray-500">
            Your emergency contacts would be notified in case of an emergency
          </p>
          <div className="flex items-center mt-2 bg-gray-200 p-2 rounded-md max-w-sm">
            <div className="h-8 w-8 border border-gray-300 rounded-full overflow-hidden mr-2 flex items-center justify-center bg-blue-500 text-white font-bold">
              1
            </div>
            <p className="text-sm text-gray-700 font-bold">Abhideep Kumar</p>
          </div>
          <div className="flex items-center mt-2 bg-gray-200 p-2 rounded-md max-w-sm">
            <div className="h-8 w-8 border border-gray-300 rounded-full overflow-hidden mr-2 flex items-center justify-center bg-blue-500 text-white font-bold">
              2
            </div>
            <p className="text-sm text-gray-700 font-bold">Rohan</p>
          </div>
          <p className="text-xs text-sky-500 mt-2">(You can add up to two emergency contacts)</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
