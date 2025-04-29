// domain
import type { Post, PostEdit, PostRegister, Posts } from '@/app/core/domain/post';

export interface IPostRepository {
  getList: () => Promise<Posts>;
  getById: (id: Post['id']) => Promise<Post>;
  register: (payload: PostRegister) => Promise<Post>;
  edit: (payload: PostEdit) => Promise<Post>;
  save: (posts: Posts) => void;
}
