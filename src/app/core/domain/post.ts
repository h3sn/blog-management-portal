// type
// ------------------------------
export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
export type Posts = Post[];
export type PostRegister = {
  title: string;
  body: string;
  userId: number;
};
export type PostEdit = Post;
