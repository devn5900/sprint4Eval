interface address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geo;
}
interface geo {
  lat: string;
  lng: string;
}
export interface users {
  id: 1;
  name: string;
  username: string;
  email: string;
  address: address;
}

export type userProps = {
  users: users[];
};

export interface staticPropT {
  params: { id: number };
}

export interface todosT {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
