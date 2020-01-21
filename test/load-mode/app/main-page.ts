

import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    const vm = fromObject({
        // Setting the listview binding source
        items: [
            { title: "The Da Vinci Code", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://c4.wallpaperflare.com/wallpaper/324/769/318/macro-plants-sunset-light-blur-background-wallpaper-preview.jpg" },
            { title: "The Alchemist", url: "http://images.unsplash.com/photo-1490192414631-db8a7e2568ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" },
            { title: "The Godfather", url: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3467704/910/606/m2/fpnw/wm1/wxiif5rzoqp5tsawu7vfvdclagiymaa4nb9jonzapnjgrttcc99yg8v7u9qqfd5l-.jpg?1508942290&s=3c324b1bd991d37d862acf116bfc9c48" },
            { title: "Goodnight Moon", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://c8.alamy.com/comp/R0FT4D/winter-snowy-pine-tree-christmas-scene-fir-branches-covered-with-frost-wonderland-calm-blurred-snow-flakes-winter-time-background-with-copy-space-R0FT4D.jpg" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://c4.wallpaperflare.com/wallpaper/324/769/318/macro-plants-sunset-light-blur-background-wallpaper-preview.jpg" },
            { title: "The Alchemist", url: "http://images.unsplash.com/photo-1490192414631-db8a7e2568ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" },
            { title: "The Godfather", url: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3467704/910/606/m2/fpnw/wm1/wxiif5rzoqp5tsawu7vfvdclagiymaa4nb9jonzapnjgrttcc99yg8v7u9qqfd5l-.jpg?1508942290&s=3c324b1bd991d37d862acf116bfc9c48" },
            { title: "Goodnight Moon", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://c8.alamy.com/comp/R0FT4D/winter-snowy-pine-tree-christmas-scene-fir-branches-covered-with-frost-wonderland-calm-blurred-snow-flakes-winter-time-background-with-copy-space-R0FT4D.jpg" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://c4.wallpaperflare.com/wallpaper/324/769/318/macro-plants-sunset-light-blur-background-wallpaper-preview.jpg" },
            { title: "The Alchemist", url: "http://images.unsplash.com/photo-1490192414631-db8a7e2568ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" },
            { title: "The Godfather", url: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3467704/910/606/m2/fpnw/wm1/wxiif5rzoqp5tsawu7vfvdclagiymaa4nb9jonzapnjgrttcc99yg8v7u9qqfd5l-.jpg?1508942290&s=3c324b1bd991d37d862acf116bfc9c48" },
            { title: "Goodnight Moon", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://c8.alamy.com/comp/R0FT4D/winter-snowy-pine-tree-christmas-scene-fir-branches-covered-with-frost-wonderland-calm-blurred-snow-flakes-winter-time-background-with-copy-space-R0FT4D.jpg" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://c4.wallpaperflare.com/wallpaper/324/769/318/macro-plants-sunset-light-blur-background-wallpaper-preview.jpg" },
            { title: "The Alchemist", url: "http://images.unsplash.com/photo-1490192414631-db8a7e2568ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" },
            { title: "The Godfather", url: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3467704/910/606/m2/fpnw/wm1/wxiif5rzoqp5tsawu7vfvdclagiymaa4nb9jonzapnjgrttcc99yg8v7u9qqfd5l-.jpg?1508942290&s=3c324b1bd991d37d862acf116bfc9c48" },
            { title: "Goodnight Moon", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://c8.alamy.com/comp/R0FT4D/winter-snowy-pine-tree-christmas-scene-fir-branches-covered-with-frost-wonderland-calm-blurred-snow-flakes-winter-time-background-with-copy-space-R0FT4D.jpg" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://c4.wallpaperflare.com/wallpaper/324/769/318/macro-plants-sunset-light-blur-background-wallpaper-preview.jpg" },
            { title: "The Alchemist", url: "http://images.unsplash.com/photo-1490192414631-db8a7e2568ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" },
            { title: "The Godfather", url: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3467704/910/606/m2/fpnw/wm1/wxiif5rzoqp5tsawu7vfvdclagiymaa4nb9jonzapnjgrttcc99yg8v7u9qqfd5l-.jpg?1508942290&s=3c324b1bd991d37d862acf116bfc9c48" },
            { title: "Goodnight Moon", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://c8.alamy.com/comp/R0FT4D/winter-snowy-pine-tree-christmas-scene-fir-branches-covered-with-frost-wonderland-calm-blurred-snow-flakes-winter-time-background-with-copy-space-R0FT4D.jpg" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://c4.wallpaperflare.com/wallpaper/324/769/318/macro-plants-sunset-light-blur-background-wallpaper-preview.jpg" },
            { title: "The Alchemist", url: "http://images.unsplash.com/photo-1490192414631-db8a7e2568ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" },
            { title: "The Godfather", url: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3467704/910/606/m2/fpnw/wm1/wxiif5rzoqp5tsawu7vfvdclagiymaa4nb9jonzapnjgrttcc99yg8v7u9qqfd5l-.jpg?1508942290&s=3c324b1bd991d37d862acf116bfc9c48" },
            { title: "Goodnight Moon", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://c8.alamy.com/comp/R0FT4D/winter-snowy-pine-tree-christmas-scene-fir-branches-covered-with-frost-wonderland-calm-blurred-snow-flakes-winter-time-background-with-copy-space-R0FT4D.jpg" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://c4.wallpaperflare.com/wallpaper/324/769/318/macro-plants-sunset-light-blur-background-wallpaper-preview.jpg" },
            { title: "The Alchemist", url: "http://images.unsplash.com/photo-1490192414631-db8a7e2568ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" },
            { title: "The Godfather", url: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3467704/910/606/m2/fpnw/wm1/wxiif5rzoqp5tsawu7vfvdclagiymaa4nb9jonzapnjgrttcc99yg8v7u9qqfd5l-.jpg?1508942290&s=3c324b1bd991d37d862acf116bfc9c48" },
            { title: "Goodnight Moon", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" },
            { title: "The Da Vinci Code", url: "https://c8.alamy.com/comp/R0FT4D/winter-snowy-pine-tree-christmas-scene-fir-branches-covered-with-frost-wonderland-calm-blurred-snow-flakes-winter-time-background-with-copy-space-R0FT4D.jpg" },
            { title: "Harry Potter and the Chamber of Secrets", url: "https://www.sample-videos.com/img/Sample-png-image-3mb.png" }
        ]
    });
    page.bindingContext = vm;
}
