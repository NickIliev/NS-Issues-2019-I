// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

import { AppOptions } from "nativescript-angular/platform-common";
// Optional - attach to livesync hooks and perfrom navigation
import "./livesync-navigation";

platformNativeScriptDynamic().bootstrapModule(AppModule);
