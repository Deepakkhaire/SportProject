import { NgModule } from "@angular/core"
import { AccordianTodayComponent } from "./accordian-today.component"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

const accoToday = [
    {
        path : '', component : AccordianTodayComponent
    }
]

@NgModule({
    declarations : [
        AccordianTodayComponent
    ],
    imports : [
        CommonModule,
        RouterModule.forChild(accoToday)
    ]
})

export class AccodianTodayModule{
    constructor(){
        console.log('accordian-today module');
    }
}