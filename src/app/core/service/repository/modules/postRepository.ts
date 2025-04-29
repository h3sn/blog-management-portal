// interface
import type { IPostRepository } from '@/app/core/useCase/interface/modules/repositoryInterface';
import type { IPostStore } from '@/app/core/useCase/interface/modules/storeInterface';
// domain
import type { Post, PostEdit, PostRegister, Posts } from '@/app/core/domain/post';
// configs
import { apiPath, headers } from '@/configs/api';

/**
 * 投稿リポジトリファクトリ
 * @returns {IPostRepository} IPostRepository
 */
export const postRepository = (store: IPostStore): IPostRepository => {
  const path = `${apiPath}/posts`;
  return {
    getList: async () => {
      const response = await fetch(`${path}`).then<Posts>((response) => response.json());
      return response;
    },
    getById: async (id: Post['id']) => {
      const response = await fetch(`${path}/${id}`).then<Post>((response) => response.json());
      return response;
    },
    register: async (payload: PostRegister) => {
      const response = await fetch(`${path}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers,
      }).then<Post>((response) => response.json());
      return response;
    },
    edit: async (payload: PostEdit) => {
      const response = await fetch(`${path}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers,
      }).then<PostEdit>((response) => response.json());
      return response;
    },
    save: (posts: Posts) => {
      store.save(posts);
    },
  };
};
