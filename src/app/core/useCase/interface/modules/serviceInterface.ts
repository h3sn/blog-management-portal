/**
 * メッセージ
 */
export interface IMassageService {
  success: (message: string) => void;
  failure: (message: string) => void;
}

/**
 * ルーティング
 */
export interface IRouterService {
  push: (path: string) => void;
  replace: (path: string) => void;
}
