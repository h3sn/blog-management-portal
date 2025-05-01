// library
import { computed, ref } from 'vue';
// useCase
import type { IPostUseCase } from '@/app/core/useCase/postUseCase';
import { getPostList, registerPost } from '@/app/core/useCase/postUseCase';
// domain
import type { Post, PostRegister, Posts } from '@/app/core/domain/post';

/**
 * 投稿一覧取得コントローラー
 * @param {IPostUseCase['getPostList']} useCase
 * @returns - { getPostListController, response, posts }
 */
export const useGetPostListController = (useCase: IPostUseCase['getPostList'] = getPostList) => {
  const response = ref<Posts>();
  const posts = computed(() => response.value?.data || []);
  const getPostListController = async () => {
    response.value = await useCase();
  };
  return { getPostListController, response, posts };
};

/**
 * 投稿登録コントローラー
 * @param {IPostUseCase['registerPost']} useCase
 * @returns - { registerPostController, response }
 */
export const useRegisterPostController = (useCase: IPostUseCase['registerPost'] = registerPost) => {
  const response = ref<Post>();
  const registerPostController = async (payload: PostRegister) => {
    response.value = await useCase(payload);
  };
  return { registerPostController, response };
};
