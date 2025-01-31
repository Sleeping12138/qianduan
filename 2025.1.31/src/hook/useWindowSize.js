import { ref, onMounted, onUnmounted } from 'vue';

export default function useWindowSize() {
    // 定义响应式变量
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);

    // 更新窗口大小的函数
    const updateSize = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    };

    // 组件挂载时监听窗口大小变化
    onMounted(() => {
        window.addEventListener('resize', updateSize);
    });

    // 组件卸载时移除监听
    onUnmounted(() => {
        window.removeEventListener('resize', updateSize);
    });

    // 返回窗口的宽度和高度
    return { width, height };
}

