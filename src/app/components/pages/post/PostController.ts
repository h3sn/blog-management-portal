// library
import { computed, ref } from 'vue';
// useCase
import type { IPostUseCase } from '@/app/core/useCase/postUseCase';
import { getPostList } from '@/app/core/useCase/postUseCase';
// domain
import type { Posts } from '@/app/core/domain/post';

/**
 * 投稿一覧取得コントローラー
 * @param {IPostUseCase['getPostList']} useCase
 * @returns
 */
export const useGetPostListController = (useCase: IPostUseCase['getPostList'] = getPostList) => {
  const response = ref<Posts>();
  const posts = computed(() => response.value?.data || []);
  const getPostListController = async () => {
    response.value = await useCase();
  };
  return { getPostListController, response, posts };
};
