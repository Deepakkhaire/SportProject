import { Component } from '@angular/core';
import { DataHandlerService } from 'src/app/services/dataHandler.service';

@Component({
  selector: 'app-accordian-tomorrow',
  templateUrl: './accordian-tomorrow.component.html',
  styleUrls: ['./accordian-tomorrow.component.css']
})
export class AccordianTomorrowComponent {
  sportData: any;
  cricketData: any;
  soccerData:any;
  tennisData:any;
  inPlay:any;
  constructor(private dataServe: DataHandlerService) { }
  ngOnInit(): void {
    this.dataServe.getSportsData().subscribe((res: any) => {
      this.sportData = res;
      console.log(this.sportData.data);
      this.inPlay = this.sportData.data.filter((data: any) => {
        return data.open_date >= '09/30/2023 10:00:00 PM' 
      })
      console.log(this.inPlay);
      this.cricketData = this.inPlay.filter((cricket : any)=>{
        return cricket.sport_id === '4'
      })
      console.log(this.cricketData);
      this.soccerData = this.inPlay.filter((soccer : any)=>{
        return soccer.sport_id === '1'
      })
      console.log(this.soccerData);
      this.tennisData = this.inPlay.filter((tennis : any)=>{
        this.tennisData = tennis.sport_id === '2'
      })
      console.log(this.tennisData);
    })
  }
}
