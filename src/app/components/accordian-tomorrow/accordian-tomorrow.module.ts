import { NgModule } from "@angular/core"
import { AccordianTomorrowComponent } from "./accordian-tomorrow.component"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { CdkAccordionModule } from "@angular/cdk/accordion"

const accoTomorrow = [
    { path : '', component : AccordianTomorrowComponent }
]
@NgModule({
    declarations : [
        AccordianTomorrowComponent
    ],
    imports :[
        CommonModule,
        CdkAccordionModule,
        RouterModule.forChild(accoTomorrow)
    ]
})

export class AccodianTomorrowModule{
    constructor(){
        console.log('accordian-tomorrow module');
    }
}