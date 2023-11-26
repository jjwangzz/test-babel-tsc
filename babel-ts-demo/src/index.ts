interface User {
  id: string;
  name: string;
}

export const userToString = (u: User) => `${u.id}/${u.wname}`;
