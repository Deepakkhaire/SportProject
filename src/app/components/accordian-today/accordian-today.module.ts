import { NgModule } from "@angular/core"
import { AccordianTodayComponent } from "./accordian-today.component"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { CdkAccordionModule } from "@angular/cdk/accordion"

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
        CdkAccordionModule,
        RouterModule.forChild(accoToday)
    ]
})

export class AccodianTodayModule{
    constructor(){
        console.log('accordian-today module');
    }
}