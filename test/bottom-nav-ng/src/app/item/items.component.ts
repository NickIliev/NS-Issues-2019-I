import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}

// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "tabs-component",
//   template: `
//   <Tabs id="bottomNav">
//     <TabStrip>
//       <TabStripItem title="First Tab 11" iconSource="res://icon">
//       </TabStripItem>
//       <TabStripItem>
//         <!-- <Image src="res://icon"></Image> -->
//         <Label text="News"></Label>
//       </TabStripItem>
//       <!--
//         <TabStripItem title="Favorites" iconSource="res://icon">
//         </TabStripItem>
//       -->
//       <TabStripItem>
//         <!-- <Image src="res://icon"></Image> -->
//         <Label text="Places"></Label>
//       </TabStripItem>
//       <!--
//         <TabStripItem title="Music" iconSource="res://icon">
//         </TabStripItem>
//       -->
//     </TabStrip>
//     <TabContentItem>
//       <StackLayout backgroundColor="blue">
//         <Label text="First View"></Label>
//         <Button tap="goToSecond" text="go to second"></Button>
//       </StackLayout>
//     </TabContentItem>
//     <TabContentItem>
//       <StackLayout backgroundColor="red">
//         <Label text="Second View"></Label>
//         <Button tap="goToFirst" text="go to first"></Button>
//       </StackLayout>
//     </TabContentItem>
//     <TabContentItem>
//       <StackLayout backgroundColor="green">
//         <Label text="First View"></Label>
//         <Button tap="goToSecond" text="go to second"></Button>
//       </StackLayout>
//     </TabContentItem>
//     <!--
//     <TabContentItem>
//       <StackLayout>
//         <Label text="Second View"></Label>
//         <Button tap="goToFirst" text="go to first"></Button>
//       </StackLayout>
//     </TabContentItem>
//     <TabContentItem>
//       <StackLayout>
//         <Label text="First View"></Label>
//         <Button tap="goToSecond" text="go to second"></Button>
//       </StackLayout>
//     </TabContentItem>
//     -->
//   </Tabs>
//   `,
// })

// export class ItemsComponent implements OnInit {
//   public ngOnInit(): void { }
// }