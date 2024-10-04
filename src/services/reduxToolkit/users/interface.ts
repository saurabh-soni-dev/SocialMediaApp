export interface userInitialState {
  data: Array<userData>;
  isLogin: boolean;
  status: string;
  error: string;
}
interface userData {
  name?: string | undefined;
  email?: string | undefined;
  mobile?: string | undefined;
  address?: string | undefined;
  zipcode?: string | undefined;
  password?: string | undefined;
}
