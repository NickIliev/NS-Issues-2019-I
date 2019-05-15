import { Component } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from 'rxjs/operators'; 

import { request } from "tns-core-modules/http";

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

  
    coreModulesaReques() {

        let DATA = {
            data: [
                {
                    type: 'sports',
                    id: 1234
                }
            ]
        }

        request({
            url: "https://httpbin.org/delete",
            method: "DELETE",
            headers: { "Content-Type": "application/json", "Content-Length": DATA.data.length },
            content: JSON.stringify(DATA)
        }).then((response) => {
            const result = response.content.toJSON();
            console.log(result)
        }, (err) => {
            console.log(err)
        });
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
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: JSON.stringify(DATA)
        };

        return httpOptions;
    }
 }
