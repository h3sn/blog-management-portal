import type { IMassageService } from '@/app/core/useCase/interface/modules/serviceInterface';

/**
 * トーストメッセージを表示する
 */
export const toastMassage: IMassageService = {
  /**
   * 成功時メッセージ
   * @param {string} message
   */
  success(message: string) {
    console.log(message);
  },
  /**
   * 失敗時メッセージ
   * @param {string} message
   */
  failure(message: string) {
    console.log(message);
  },
};
