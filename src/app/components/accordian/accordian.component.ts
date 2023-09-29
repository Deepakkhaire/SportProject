import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/services/dataHandler.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  expandedIndex = 0;
  sportData: any;
  cricketData: any;
  soccerData:any;
  tennisData:any;
  inPlay:any;
  constructor(private dataServe: DataHandlerService) { }
  ngOnInit(): void {
    this.dataServe.getSportsData().subscribe((res: any) => {
      this.sportData = res;
      this.dataServe.getData(this.sportData)
      this.inPlay = this.sportData.data.filter((data: any) => {
        var date_time = new Date("9/28/2023 10:00:00 pm").toLocaleString();
        console.log(date_time);
        // console.log(data.open_date);
        // console.log(data.open_date <= date_time);
        return data.open_date <= '09/29/2023 10:00:00 PM' 
      })
      console.log(this.inPlay);
      this.cricketData = this.inPlay.filter((cricket : any)=>{
        return cricket.sport_id === '4'
      })
      console.log(this.cricketData);
      this.soccerData = this.inPlay.filter((soccer : any)=>{
        return soccer.sport_id === '1'
      })
      this.tennisData = this.inPlay.filter((tennis : any)=>{
        this.tennisData = tennis.sport_id === '2'
      })
      console.log(this.tennisData);// no data
    })
  }

}
