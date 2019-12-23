<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <Label class="my-message" :text="msg" col="0" row="0"/>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class App extends Vue {
        msg: string = "Hello";

        constructor() {
            super();

            console.log("APP VUE Constructor")
        }
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
    .my-message {
        vertical-align: center;
        text-align: center;
        font-size: 40;
        font-weight: bold;
        color: red;
    }
</style>