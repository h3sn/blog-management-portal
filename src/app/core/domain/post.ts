// type
// ------------------------------
export type List<T> = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
  support: {
    url: string;
    text: string;
  };
};
export type Post = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};
export type Posts = List<Post>;
export type PostRegister = {
  title: string;
  body: string;
  userId: number;
};
export type PostEdit = Post;

// メソッド
// ------------------------------
export const createPostRegisterData = (userId: PostRegister['userId']): PostRegister => {
  return {
    title: '',
    body: '',
    userId,
  };
};
