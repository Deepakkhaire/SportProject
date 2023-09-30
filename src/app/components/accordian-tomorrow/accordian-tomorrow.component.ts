import { Component } from '@angular/core';
import { DataHandlerService } from 'src/app/services/dataHandler.service';

@Component({
  selector: 'app-accordian-tomorrow',
  templateUrl: './accordian-tomorrow.component.html',
  styleUrls: ['./accordian-tomorrow.component.css']
})
export class AccordianTomorrowComponent {
  tomorrowArr:any;
  cricketData: any;
  soccerData:any;
  tennisData:any;
  constructor(private dataServe: DataHandlerService) { }
  ngOnInit(): void {
    this.tomorrowArr = this.dataServe.tomorrowArr;
      console.log(this.tomorrowArr);
      this.cricketData = this.tomorrowArr.filter((cricket : any)=>{
        return cricket.sport_id === '4'
      })
      console.log(this.cricketData);
      this.soccerData = this.tomorrowArr.filter((soccer : any)=>{
        return soccer.sport_id === '1'
      })
      console.log(this.soccerData);
      this.tennisData = this.tomorrowArr.filter((tennis : any)=>{
        this.tennisData = tennis.sport_id === '2'
      })
      console.log(this.tennisData);
   
  }
}
