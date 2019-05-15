import { EventData } from "data/observable";
import { Button } from "ui/button";
import { Page } from "ui/page";

import { LoginViewModel } from "./login-view-model";

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new LoginViewModel();
}

function onLoginWithSocialProviderButtonTap() {
    /* ***********************************************************
    * For log in with social provider you can add your custom logic or
    * use NativeScript plugin for log in with Facebook
    * http://market.nativescript.org/plugins/nativescript-facebook
    *************************************************************/
}

export function onSignInButtonTap(args: EventData): void {
    const button = <Button>args.object;
    const bindingContext = <LoginViewModel>button.bindingContext;

    bindingContext.signIn();
}

export function onForgotPasswordTap(): void {
    /* ***********************************************************
    * Call your Forgot Password logic here.
    *************************************************************/
}
