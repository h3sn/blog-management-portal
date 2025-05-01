// library
import { ElMessage } from 'element-plus';
// interface
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
    ElMessage({
      message,
      type: 'success',
      plain: true,
    });
  },

  /**
   * 失敗時メッセージ
   * @param {string} message
   */
  failure(message: string) {
    ElMessage({
      message,
      type: 'error',
      plain: true,
    });
  },
};
