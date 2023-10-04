import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataHandlerService {
    baseUrl = `https://centre.7wickets.net:4000/api/v1-custom/getLiveMatches`;
    sportData: any;
    todayArr : any;
    tomorrowArr : any;
    errMsg :any

    constructor(private http: HttpClient) {}

    getSportsData(): Observable<any> {
        return this.http.get(this.baseUrl);
    }
    getData(data:any){
        this.sportData = data;
        // console.log(this.sportData);
        
        this.todayArr = data.data.filter((todayData : any)=>{
            return new Date(todayData.openDate).getDate() <= new Date().getDate()

        })
        // console.log(this.todayArr);
        this.tomorrowArr = data.data.filter((tomorrData : any)=>{
            return new Date(tomorrData.openDate) > new Date() && new Date(tomorrData.openDate).getDate() !== new Date().getDate()
        })
        // console.log(this.tomorrowArr);
    }
  
}