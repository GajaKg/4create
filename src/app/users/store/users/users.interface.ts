export interface Session {
  // readonly token: string;
  // readonly user: UserDetails;
  readonly users: Users[]
}

// export interface UserDetails {
//   readonly firstname: string;
//   readonly lastname: string;
//   readonly age: string;
// }
export interface Users {
  readonly id: number;
  readonly name: string;
  readonly active: boolean;
}
