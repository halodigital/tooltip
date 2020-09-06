import { NgModule } from '@angular/core';
import { HaloTooltipComponent } from './tooltip.component';
import { HaloTooltipDirective } from './tooltip.directive';


@NgModule({
    declarations: [
        HaloTooltipComponent,
        HaloTooltipDirective
    ],
    exports: [
        HaloTooltipComponent,
        HaloTooltipDirective
    ]
})

export class HaloTooltipModule {}
