export type UserProps = {
    name: string;
    email: string;
    password: string;
  };

  
  class User {
    name: string;
    email: string;
    password: string;
  
    constructor(props: UserProps) {
      this.name = props.name;
      this.email = props.email;
      this.password = props.password;
    }
  }
  
  export default User;