import { useEffect, useState } from "react";
import { listUsers } from "../services/user/ListUsers";

type User = {
  uuid: string;
  email: string | null;
  name: string | null;
  disabled: boolean;
};

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const usersData = await listUsers();
      setUsers(usersData);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.uuid}
              className="border-b hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <td className="p-3">{user.name || "—"}</td>
              <td className="p-3">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
