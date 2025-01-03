<template>
    <div>
        <h1>{{ text }}</h1>
        <school></school>
        <student></student>
    </div>
</template>

<script>
    import student from './Student.vue';
    import school from './School.vue';
    export default {
        data() {
            return {
                text:'hello world',
            }
        },
        components:{
            student,
            school
        }
    }
</script>
