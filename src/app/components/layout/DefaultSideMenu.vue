<template>
  <el-menu :default-active="activeIndex" router>
    <el-menu-item :index="ROUTER.DASHBOARD.NAME" :route="{ name: ROUTER.DASHBOARD.NAME }">
      <el-icon><House /></el-icon><span>ダッシュボード</span>
    </el-menu-item>
    <el-menu-item :index="ROUTER.POST.LIST.NAME" :route="{ name: ROUTER.POST.LIST.NAME }">
      <el-icon><Document /></el-icon><span>投稿一覧</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
// library
import { useRouter } from 'vue-router';
// domain
import { ROUTER } from '@/app/core/domain/router';

// 初期表示
// ------------------------------
const router = useRouter();
const activeIndex = (router.currentRoute.value.name || '') as string;
</script>
