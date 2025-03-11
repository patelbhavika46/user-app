import React, { useState, ChangeEvent } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "./queries";
import UserCard from "./UserCard";

interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

interface UserEdge {
  node: User;
}

interface UsersResponse {
    users: {
      edges: UserEdge[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string | null;
      };
    };
  }

const UserList: React.FC = () => {
  const { loading, error, data } = useQuery<UsersResponse>(GET_USERS);
  const [search, setSearch] = useState<string>("");

  if (loading) return <p className="text-gray-600">Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  // Ensure safe access and extract users from GraphQL response
  const users: User[] = data?.users?.edges.map(({ node }) => node) ?? [];

  // Filter users by search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Search users..."
        className="p-2 border rounded mb-4 w-full"
        value={search}
        onChange={handleSearchChange}
      />
      <div className="grid gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
