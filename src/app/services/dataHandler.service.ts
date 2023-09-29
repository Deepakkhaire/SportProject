import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class DataHandlerService{
    baseUrl = `https://centre.7wickets.net:4000/api/v1-custom/getLiveMatches`;

    constructor(private http : HttpClient){

    }

    getSportsData(){
        return this.http.get(this.baseUrl)
        // .pipe(map((rawData :any)=>{
        //     let arr = [];
        //     for(let data in rawData){
        //         arr.push({...rawData[data]})
        //     }
        //     arr.splice(0, 1)
        //     return arr
        // }))
    }
}