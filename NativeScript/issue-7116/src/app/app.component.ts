import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    private server = "https://httpbin.org/"
    private method = "delete";

    constructor(private http: HttpClient) { }

    deleteD() {
        this.deleteDataViaDeleteMethod().subscribe(res => {
            console.log(">>>>> data deleted via delete method");
            console.log(res);
        })
    }

    deleteDataViaDeleteMethod() {
        let options = this.createOptions();
        return this.http.delete(`${this.server}${this.method}`, options);
    }

    private createOptions() {
        const DATA = {
            data: [
                {
                    type: 'sports',
                    id: 1234
                }
            ]
        };

        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: DATA
        };

        return httpOptions;
    }
 }
