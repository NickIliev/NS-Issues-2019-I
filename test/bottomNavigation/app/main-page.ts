import { EventData } from "tns-core-modules/data/observable";
import { BottomNavigation, TabStrip, TabStripItem, TabContentItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/bottom-navigation";
import { Label} from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Color } from "tns-core-modules/color/color";


export function onBNLoaded(args: EventData) {
    const bottomNav = args.object as BottomNavigation;

    /* 
        - Creating an array of TabContentItems via code-behind 
        - Assigning the array as items for the BottomNavigation component
    */
    let tabContentItemsArray: Array<TabContentItem> = [];
    for (let index = 0; index < 3; index++) {
        let item: TabContentItem = new TabContentItem();
        
        // The createContent is a custom method that returns a StackLayoutwith a Label
        item.view = createContent(index); 
        tabContentItemsArray.push(item);
    }

    /*
        Creating TabStrip
    */
    const tabStrip: TabStrip = new TabStrip();
    tabStrip.iosIconRenderingMode = "automatic"; // iOS only (automatic us tge default value)
    let tabStripItems: Array<TabStripItem> = [];
    for (let index = 0; index < 3; index++) {
        let item: TabStripItem = new TabStripItem();
        item.title = `Tab ${index}`;
        item.iconSource = "res://icon";
        tabStripItems.push(item);
    }
    tabStrip.items = tabStripItems;

    /*
        Assiging the created content and the tab strip to the BottomNavigation component
    */
    bottomNav.items = tabContentItemsArray;
    bottomNav.tabStrip = tabStrip;

    bottomNav.on("selectedIndexChanged", (data: SelectedIndexChangedEventData) => {
        console.log("eventName: ", data.eventName);
        console.log("object: ", data.object);
        console.log("oldIndex: ", data.oldIndex);
        console.log("newIndex: ", data.newIndex);
    })

    console.log("selectedIndex: ", bottomNav.selectedIndex);
}


function createContent(contentIndex: number) {
    const label = new Label();
    label.text = `Item ${contentIndex}`;
    label.className = "h2 text-center";
    label.color = new Color("red");

    const stack = new StackLayout();
    stack.addChild(label);

    return stack;
}