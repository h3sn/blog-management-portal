<template>
  <el-container>
    <el-header><default-header></default-header></el-header>
    <el-container>
      <el-aside width="200px"><default-side-menu></default-side-menu></el-aside>
      <el-container>
        <el-main><RouterView /></el-main>
        <el-footer><default-footer></default-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-header {
  background-color: var(--color-primary);
}
.el-aside {
  border-right: 1px solid var(--color-primary);
}
.el-main {
  > *:not(last-child) {
    margin-bottom: 30px;
  }
}
.el-footer {
  border-top: 1px solid var(--color-primary);
}
</style>

<script lang="ts" setup>
// components
import DefaultFooter from '@/app/components/layout/DefaultFooter.vue';
import DefaultHeader from '@/app/components/layout/DefaultHeader.vue';
import DefaultSideMenu from '@/app/components/layout/DefaultSideMenu.vue';
</script>
