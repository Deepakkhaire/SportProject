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
  errMsg:string='';

  constructor(private dataServe: DataHandlerService) { }

  ngOnInit(): void {
    this.dataServe.getSportsData().subscribe((res: any) => {
      this.sportData = res;
      this.dataServe.getData(this.sportData)
      this.inPlay = this.sportData.data.filter((data: any) => {
        var time = new Date();
        time.setHours( time.getHours() + 4)
        return new Date(data.openDate) <= time;
      })
      // console.log(this.inPlay);
      this.cricketData = this.inPlay.filter((cricket : any)=>{
        return cricket.sportId === '4'
      })
      // console.log(this.cricketData);
      this.soccerData = this.inPlay.filter((soccer : any)=>{
        return soccer.sportId === '1'
      })
      this.tennisData = this.inPlay.filter((tennis : any)=>{
        this.tennisData = tennis.sportId === '2'
      })
    },
    (err)=>{
      console.log(err);
      this.errMsg = err.message
    })
  }

}
