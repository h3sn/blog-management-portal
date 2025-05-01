<template>
  <header class="main-header">
    <!-- TODO: コンポーネント化する -->
    <div class="main-header__title">PostList</div>
    <router-link :to="{ path: ROUTER.POST.REGISTER.PATH }"><el-button>新規投稿</el-button></router-link>
  </header>
  <el-table :data="posts">
    <el-table-column prop="id" label="Id" width="80" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column label="color">
      <template #default="scope"
        ><el-tag :color="scope.row.color" effect="dark" type="info">{{ scope.row.color }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.color-dot {
  width: 10px;
  height: 10px;
}
.main-header {
  margin-bottom: 30px;
  &__title {
    margin-bottom: 10px;
  }
}
</style>

<script lang="ts" setup>
// controller
import { useGetPostListController } from '@/app/components/pages/post/PostController';
// domain
import { ROUTER } from '@/app/core/domain/router';

// 投稿一覧を取得する
// ------------------------------
const { getPostListController, posts } = useGetPostListController();

// ロード処理
// ------------------------------
const load = () => {
  getPostListController();
};
load();
</script>
