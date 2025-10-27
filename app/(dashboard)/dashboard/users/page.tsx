import Link from "next/link";

const Users = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>

      <Link href="/dashboard/users/1">User 1</Link>
      <br />
      <Link href="/dashboard/users/2">User 2</Link>
      <br />
      <Link href="/dashboard/users/3">User 3</Link>
      <br />
    </div>
  );
};

export default Users;
