import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"
import { AccordianComponent } from "./accordian.component";
import { RouterModule } from "@angular/router";
import { CdkAccordionModule } from "@angular/cdk/accordion";


const AccordRoutes = [{
    path: '', component: AccordianComponent
}]

@NgModule({
    declarations: [
        AccordianComponent
    ],
    imports: [
        CommonModule,
        CdkAccordionModule,
        RouterModule.forChild(AccordRoutes)
    ]
})

export class AccordianModule {
    constructor() {
        console.log('accordian module');
    }
}