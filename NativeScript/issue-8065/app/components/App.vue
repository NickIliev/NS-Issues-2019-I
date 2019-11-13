<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0"/>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    @Component
    export default class App extends Vue {
        msg: string = "Hello";
    }
    // export default {
    //     data() {
    //         return {
    //             msg: 'Hello World!'
    //         }
    //     }
    // }
</script>

<style scoped>
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 28;
        color: green;
    }
</style>