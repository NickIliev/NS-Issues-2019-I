import { EventData, Observable } from "tns-core-modules/data/observable";
import { SearchBar } from "tns-core-modules/ui/search-bar";

import { SearchDelegateImpl } from "./search-delegate";

export class HelloWorldModel extends Observable {

    constructor() {
        super();

    }

    onSearchLoaded(args: EventData) {
        let searchBar = args.object as SearchBar;
        let iosSearch = searchBar.ios as UISearchBar;

        iosSearch.delegate = SearchDelegateImpl.new();
    }

    onClear(args: EventData) {

    }

    onSubmit(args: EventData) {

    }
}
