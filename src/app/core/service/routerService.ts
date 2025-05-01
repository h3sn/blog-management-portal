// library
import { router as vueRouter } from '@/router';
// interface
import type { IRouterService } from '@/app/core/useCase/interface/modules/serviceInterface';

/**
 * ルーティングする
 */
export const router: IRouterService = {
  /**
   * 通常ルーティング
   * @param {string} path
   */
  push(path: string) {
    vueRouter.push(path);
  },

  /**
   * ヒストリーを残さないルーティング
   * @param {string} path
   */
  replace(path: string) {
    vueRouter.replace(path);
  },
};
