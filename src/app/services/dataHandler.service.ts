import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataHandlerService {
    baseUrl = `https://centre.7wickets.net:4000/api/v1-custom/getLiveMatches`;
    sportData: any;
    

    constructor(private http: HttpClient) {

    }

    getSportsData(): Observable<any> {
        return this.http.get<any>(this.baseUrl);
    }
    getData(data:any){
        this.sportData = data;
        console.log(this.sportData);
    }
}