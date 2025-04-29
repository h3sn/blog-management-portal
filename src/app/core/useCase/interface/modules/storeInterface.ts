import type { Posts } from '@/app/core/domain/post';

export interface IPostStore {
  save: (posts: Posts) => void;
}
