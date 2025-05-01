<template>
  <div>PostRegister</div>
  <el-form :model="form" label-width="auto">
    <el-form-item label="タイトル">
      <el-input v-model="form.title" />
    </el-form-item>
    <el-form-item label="本文">
      <el-input v-model="form.body" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-row :gutter="10">
        <el-col :span="11">
          <confirm-dialog v-model:isOpen="isOn" label="保存" :handleSubmit="handleSubmit" :handleConfirm="handleConfirm"></confirm-dialog>
        </el-col>
        <el-col :span="13">
          <el-button @click="cancel">Cancel</el-button>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
// library
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// composable
import { useSwitch } from '@/app/components/composable/switch';
// controller
import { useRegisterPostController } from '@/app/components/pages/post/PostController';
// domain
import type { PostRegister } from '@/app/core/domain/post';
import { createPostRegisterData } from '@/app/core/domain/post';
import { ROUTER } from '@/app/core/domain/router';
// component
import ConfirmDialog from '@/app/components/parts/ConfirmDialog.vue';

// router
// ------------------------------
const router = useRouter();

// form data
// ------------------------------
const userId = 1;
const form = ref<PostRegister>(createPostRegisterData(userId));

// 登録確認
// ------------------------------
const { on, off, isOn } = useSwitch();
const handleConfirm = () => {
  // TODO: validation
  on();
};

// 登録
// ------------------------------
const { registerPostController } = useRegisterPostController();
const handleSubmit = () => {
  registerPostController(form.value);
  off();
};

// キャンセル
// ------------------------------
const cancel = () => {
  router.push({ name: ROUTER.POST.LIST.NAME });
};
</script>
