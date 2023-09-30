import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataHandlerService {
    baseUrl = `https://centre.7wickets.net:4000/api/v1-custom/getLiveMatches`;
    sportData: any;
    inPlay : any;
    todayArr : any;
    tomorrowArr : any;

    constructor(private http: HttpClient) {

    }

    getSportsData(): Observable<any> {
        return this.http.get(this.baseUrl);
    }
    getData(data:any){
        this.sportData = data;
        console.log(this.sportData);
        this.inPlay = data.data.filter((currentData : any)=>{
            return new Date(currentData.open_date) <= new Date('09/30/2023 01:00:00 PM')
        })
        console.log(this.inPlay);
        this.todayArr = data.data.filter((todayData : any)=>{
            return new Date(todayData.open_date) <= new Date()
        })
        console.log(this.todayArr);
        this.tomorrowArr = data.data.filter((tomorrData : any)=>{
            return new Date(tomorrData.open_date) > new Date() && new Date(tomorrData.open_date).getDate() !== new Date().getDate()
        })
        console.log(this.tomorrowArr);
    }
}