import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function AddUserForm({ onUserAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users", { name, email });
      onUserAdded(res.data);
      toast.success("User added successfully!");
      setName("");
      setEmail("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add user");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-purple-600 mb-4">Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 mb-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
        required
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white p-3 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-600 transition"
      >
        Add User
      </button>
    </form>
  );
}
