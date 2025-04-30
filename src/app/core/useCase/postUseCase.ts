// interface
import type { IPostRepository } from './interface/modules/repositoryInterface';
import type { IMassageService } from './interface/modules/serviceInterface';
// service
import { toastMassage } from '../service/messageService';
import { postRepository } from '../service/repository';
import { postStore } from '../service/store';
// domain
import type { Post, PostEdit, PostRegister, Posts } from '@/app/core/domain/post';

interface IDependence {
  repository: IPostRepository;
  message: IMassageService;
}

export interface IPostUseCase {
  getPostList: (dependence?: IDependence) => Promise<Posts | undefined>;
  registerPost: (payload: PostRegister, dependence?: IDependence) => Promise<Post | undefined>;
  editPost: (payload: PostEdit, dependence?: IDependence) => Promise<Post | undefined>;
}

/**
 * 投稿一覧を取得する
 * @param {IDependence} dependence
 * @returns {Promise<Posts | undefined>} Promise<Posts | undefined>
 */
export const getPostList: IPostUseCase['getPostList'] = async (
  dependence: IDependence = {
    repository: postRepository(postStore),
    message: toastMassage,
  }
) => {
  try {
    const response = await dependence.repository.getList();
    return response;
  } catch (error) {
    dependence.message.failure((error as Error).message);
  }
};

/**
 * 投稿を登録する
 * @param {IDependence} dependence
 * @returns {Promise<Post | undefined>} Promise<Post | undefined>
 */
export const registerPost: IPostUseCase['registerPost'] = async (
  payload: PostRegister,
  dependence: IDependence = {
    repository: postRepository(postStore),
    message: toastMassage,
  }
) => {
  try {
    const response = await dependence.repository.register(payload);
    return response;
  } catch (error) {
    dependence.message.failure((error as Error).message);
  }
};

/**
 * 投稿を編集する
 * @param {IDependence} dependence
 * @returns {Promise<Post | undefined>} Promise<Post | undefined>
 */
export const editPost: IPostUseCase['editPost'] = async (
  payload: PostEdit,
  dependence: IDependence = {
    repository: postRepository(postStore),
    message: toastMassage,
  }
) => {
  try {
    const response = await dependence.repository.edit(payload);
    return response;
  } catch (error) {
    dependence.message.failure((error as Error).message);
  }
};
