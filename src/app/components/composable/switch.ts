// library
import { ref } from 'vue';

/**
 * 任意のケースで利用可能なon/off切り替え用コンポーザブル
 * @returns { on: () => void; off: () => void; isOn: Ref<boolean, boolean>; }
 */
export const useSwitch = () => {
  const isOn = ref(false);

  /** isOnにtrueをセット */
  const on = () => {
    isOn.value = true;
  };

  /** isOnにfalseをセット */
  const off = () => {
    isOn.value = false;
  };

  return { on, off, isOn };
};
