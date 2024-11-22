"use client";
import axios from "axios";
import { useEffect, useState } from "react";


//DEFINE USERDATA RELATED TYPES
type UserData = {
  _id: string;
  email: string;
  name: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  _v: number;
};
const User: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);


  //GET ALL USERS IN DB
  useEffect(() => {
    const GetUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/Register/api");
        if (res.data && Array.isArray(res.data.getUser)) {
          setUsers(res.data.getUser);
        }
      } catch (error) {
        setUsers([]);
        console.error("Error fetching users:", error);
      }
    };
    GetUsers();
  }, []);

  return (
    <div className="mt-10 md:w-[1400px] mx-auto border font-mFont pb-8 bg-cyan-700 ">
      <div className="grid grid-cols-5 text-center border-b border-r border-l items-center p-2">
        <p className="text-xl font-semibold text-gray-50">No</p>
        <p className="text-xl font-semibold text-gray-50">Name</p>
        <p className="text-xl font-semibold text-gray-50">Email</p>
        <p className="text-xl font-semibold text-gray-50">Role</p>
        <p className="text-xl font-semibold text-gray-50">Photo</p>
      </div>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div
            key={user._id}
            className="grid grid-cols-5 text-center space-y-4 mt-4 items-center text-white text-[17px]"
          >
            <p>{index + 1}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>student</p>
            <div className="w-12 mx-auto">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="rounded-full"
              />
            </div>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default User;
