import { ref } from "vue";

export default function usePrint() {
    let temp = ref('hello world')

    function print() {
        console.log('hello world');
    }

    return {
        temp, print
    }
}