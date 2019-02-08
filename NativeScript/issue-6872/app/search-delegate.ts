export class SearchDelegateImpl extends NSObject implements UISearchBarDelegate{
    public static ObjCProtocols = [UISearchBarDelegate];

    searchBarTextDidBeginEditing(searchBar: UISearchBar){ 
        console.log("TestIOSFoCusedBegin");
    }
    searchBarTextDidEndEditing(searchBar: UISearchBar){ 
        console.log("TestIOSFoCusedEnd");
    }
    searchBarCancelButtonClicked(searchBar: UISearchBar){ 
        console.log("TestIOSFoCusedCancel");
    }
    searchBarSearchButtonClicked(searchBar: UISearchBar){ 
        console.log("TestIOSFoCusedOk");
    }
    
}