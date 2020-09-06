import { Component, Input } from '@angular/core';


@Component({
    selector: 'halo-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})

export class HaloTooltipComponent {

    @Input() message: string;

}
