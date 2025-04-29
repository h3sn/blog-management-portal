// interface
import type { IPostStore } from '@/app/core/useCase/interface/modules/storeInterface';
// domain
import type { Posts } from '@/app/core/domain/post';

export const postStore: IPostStore = {
  save(posts: Posts) {
    console.log(posts);
  },
};
