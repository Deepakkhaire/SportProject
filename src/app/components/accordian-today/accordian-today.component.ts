import { Component } from '@angular/core';
import { DataHandlerService } from 'src/app/services/dataHandler.service';

@Component({
  selector: 'app-accordian-today',
  templateUrl: './accordian-today.component.html',
  styleUrls: ['./accordian-today.component.css']
})
export class AccordianTodayComponent {
  TodayArr: any;
  soccerData:any;
  CricketData:any;
  tennisData:any;
  constructor(private dataServe: DataHandlerService) { }
  ngOnInit(): void {
    this.TodayArr = this.dataServe.todayArr;
      this.soccerData = this.TodayArr.filter((soccer : any)=>{
        return soccer.sport_name === 'Soccer'
      })
      console.log(this.soccerData);
      this.CricketData = this.TodayArr.filter((cricket : any)=>{
        return cricket.sport_name =='Cricket'
      })
      console.log(this.CricketData);
      this.tennisData = this.TodayArr.filter((tennis:any)=>{
        return tennis.sport_name === 'Tennis'
      })
      console.log(this.tennisData);
  }
}
