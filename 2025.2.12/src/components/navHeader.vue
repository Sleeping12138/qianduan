<template>
  <div class="header-container">
    <div class="header-left flex-box">
      <el-icon class="icon" size="20" @click="changeCollapse">
        <Fold />
      </el-icon>
      <ul class="flex-box">
        <li v-for="(item, index) of menuStore.selectMenu" :key="item.path"
          :class="{ selected: route.path === item.path }" class="tab flex-box">
          <el-icon size="12">
            <component :is="item.icon"></component>
          </el-icon>
          <router-link class="text flex-box" :to="{ path: item.path }">
            {{ item.name }}
          </router-link>
          <el-icon size="12" class="close" @click="deleteMenu(item, index)">
            <Close />
          </el-icon>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <el-dropdown @command="handleClick">
        <div class="flex-box">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <p class="user-name">admin</p>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="out">退出</el-dropdown-item>

          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts" name="navHeader">
import { useRouter } from "vue-router";
import useMenuStore from "../store/menu";
import { useRoute } from "vue-router";
const menuStore = useMenuStore();
const route = useRoute();
const router = useRouter();
const changeCollapse = () => {
  menuStore.isCollapse = !menuStore.isCollapse;
};
const deleteMenu = (item, index: number) => {
  menuStore.deleteMenu(item);
  if (route.path != item.path) {
    return;
  } else {
    if (index === menuStore.selectMenu.length) {
      if (index === 0) {
        router.push({
          path: "/",
        });
      } else {
        router.push({
          path: menuStore.selectMenu[index - 1].path,
        });
      }
    } else {
      router.push({
        path: menuStore.selectMenu[index].path,
      });
    }
  }
};

let handleClick = (command) => {
  if (command === 'out') {
    localStorage.removeItem('pz_token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('menu');
    window.location.href = window.location.origin
  }
}

</script>

<style lang="less" scoped>
.flex-box {
  display: flex;
  align-items: center;
  height: 100%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #fff;
  padding-right: 25px;

  .header-left {
    .icon {
      width: 45px;
      height: 100%;
    }

    .icon:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }

    .tab {
      padding: 0 10px;
      height: 100%;

      .text {
        margin: 0 5px;
      }

      .close {
        visibility: hidden;
      }

      &.selected {
        a {
          color: #409eff;
        }

        i {
          color: #409eff;
        }

        background-color: #f5f5f5;
      }
    }

    .tab:hover {
      background-color: #f5f5f5;

      .close {
        visibility: inherit;
        color: #000;
        cursor: pointer;
      }
    }
  }

  .header-left {
    height: 100%;
  }

  .header-right {
    .user-name {
      margin-left: 10px;
    }
  }

  a {
    height: 100%;
    color: #333;
    font-size: 15px;
  }
}
</style>