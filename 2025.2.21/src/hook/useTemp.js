import { ref } from "vue";

export default function temp() {
    let name = ref('zhangsan');
    let age = ref(18);
    let sex = ref('male');

    function print() {
        console.log(name.value + '--' + age.value + '--' + sex.value);
    }

    return {
        name, age, sex, print
    }
}