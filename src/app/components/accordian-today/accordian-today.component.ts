import { Component } from '@angular/core';
import { DataHandlerService } from 'src/app/services/dataHandler.service';

@Component({
  selector: 'app-accordian-today',
  templateUrl: './accordian-today.component.html',
  styleUrls: ['./accordian-today.component.css']
})
export class AccordianTodayComponent {
  sportData: any;
  expandedIndex = 0;

  TodayArr: any;
  soccerData:any;
  CricketData:any;
  tennisData:any;
  constructor(private dataServe: DataHandlerService) { }
  ngOnInit(): void {
    this.sportData = this.dataServe.sportData;
    console.log(this.sportData);
    
      this.TodayArr = this.sportData.data.filter((data: any) => {
        var date = new Date().toLocaleString();;
        console.log(date);
        // console.log(data.open_date);
        // console.log(data.open_date <= date_time);
        return data.open_date <= '09/29/2023 10:00:00 PM'
      })
      console.log(this.TodayArr);
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
