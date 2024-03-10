import { deleteUser } from "@app/actions";
import { getUsers } from "@app/services/user";
import { ListItem } from "../listItem/ListItem";

export const UserList = async () => {
  const users = await getUsers();

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <ListItem
          key={user.username}
          img={user?.img ?? "/noAvatar.png"}
          title={`${user.username} ${user.isAdmin ? "/ Admin" : ""}`}
          action={deleteUser}
          filedName="id"
          filedValue={user.id}
        />
      ))}
    </div>
  );
};
