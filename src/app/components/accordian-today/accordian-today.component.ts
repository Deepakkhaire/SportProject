import { Component } from '@angular/core';
import { DataHandlerService } from 'src/app/services/dataHandler.service';

@Component({
  selector: 'app-accordian-today',
  templateUrl: './accordian-today.component.html',
  styleUrls: ['./accordian-today.component.css']
})
export class AccordianTodayComponent {
  expandedIndex = 0;
  TodayArr: any;
  soccerData:any;
  CricketData:any;
  tennisData:any;
  constructor(private dataServe: DataHandlerService) { }
  ngOnInit(): void {
    this.TodayArr = this.dataServe.todayArr;
      this.soccerData = this.TodayArr.filter((soccer : any)=>{
        return soccer.sportName === 'Soccer'
      })
      // console.log(this.soccerData);
      this.CricketData = this.TodayArr.filter((cricket : any)=>{
        return cricket.sportName =='Cricket'
      })
      // console.log(this.CricketData);
      this.tennisData = this.TodayArr.filter((tennis:any)=>{
        return tennis.sportName === 'Tennis'
      })
      // console.log(this.tennisData);
  }
}
