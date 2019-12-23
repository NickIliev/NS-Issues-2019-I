<template>
    <Page>
        <ActionBar>
            <Label text="Home"></Label>
        </ActionBar>

        <GridLayout>
        <RadListView class="list-view" for="transaction in transactions">
          <v-template>
            <StackLayout class="list-view-item">
                <Label :text="message" margin="20"></Label>
            </StackLayout>
          </v-template>
        </RadListView>
        </GridLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        },
        data() {
            return {
                transactions: [1,1,2,3,5,8,13,21,34,1,1,2,3,5,8,13,21,34,1,1,2,3,5,8,13,21,34,1,1,2,3,5,8,13,21,34]
            };
        }
    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
