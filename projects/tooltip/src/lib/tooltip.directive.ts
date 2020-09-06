import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HaloTooltipPosition } from './tooltip';
import { HaloTooltipComponent } from './tooltip.component';


@Directive({
    selector: '[haloTooltip]'
})

export class HaloTooltipDirective {

    private tooltipComponent: ComponentRef<HaloTooltipComponent>;
    private tooltipElement: HTMLElement;
    private timeout: any;

    private _message: string;
    private _tooltipDelay: number;
    private _tooltipPosition: HaloTooltipPosition;
    private _enableEllipsis: boolean;

    @HostListener('mouseenter')
    onMouseEnter(): void {

        if (this.allowTooltip) {

            clearTimeout(this.timeout);

            this.timeout = setTimeout(this.show.bind(this), this.tooltipDelay);

        }

    }

    @HostListener('mouseleave')
    onMouseLeave(): void {

        clearTimeout(this.timeout);

        this.hide();

    }

    @Input('haloTooltip')
    get message(): string {

        return this._message || '';

    }
    set message(message: string) {

        this._message = message;

    }

    @Input()
    get tooltipDelay(): number {

        return this._tooltipDelay <= 0 ? 0 : this._tooltipDelay;

    }
    set tooltipDelay(tooltipDelay: number) {

        this._tooltipDelay = +tooltipDelay;

    }

    @Input()
    get tooltipPosition(): HaloTooltipPosition {

        return this._tooltipPosition || HaloTooltipPosition.TopRight;

    }
    set tooltipPosition(tooltipPosition: HaloTooltipPosition) {

        this._tooltipPosition = tooltipPosition;

    }

    @Input()
    get enableEllipsis(): boolean {

        return this._enableEllipsis;

    }
    set enableEllipsis(enableEllipsis: boolean) {

        if (enableEllipsis) {

            this.host.nativeElement.style.textOverflow = 'ellipsis';
            this.host.nativeElement.style.overflow = 'hidden';
            this.host.nativeElement.style.whiteSpace = 'nowrap';

        }

        this._enableEllipsis = enableEllipsis;

    }

    get allowTooltip(): boolean {

        return !this.enableEllipsis ||
            this.host.nativeElement.offsetWidth < this.host.nativeElement.scrollWidth;

    }

    constructor(private appRef: ApplicationRef,
                private componentFactoryResolver: ComponentFactoryResolver,
                private host: ElementRef,
                private injector: Injector,
                private router: Router) {

        this.router.events.subscribe(event => {

            if (event instanceof NavigationEnd) {
                this.hide();
            }

        });

    }

    show(): void {

        if (this.message) {

            const factory = this.componentFactoryResolver.resolveComponentFactory(HaloTooltipComponent);

            this.tooltipComponent = factory.create(this.injector);

            this.tooltipElement = (this.tooltipComponent.hostView as EmbeddedViewRef<any>).rootNodes[0];

            this.tooltipComponent.instance.message = this.message;

            setTimeout(() => {
                this.setCSSClass();
                this.setPosition();
            }, 100);

            this.appRef.attachView(this.tooltipComponent.hostView);

            document.body.appendChild(this.tooltipElement);

        }

    }

    hide(): void {

        this.tooltipComponent?.destroy();

    }

    private setCSSClass(): void {

        this.tooltipElement.classList.remove('halo-tooltip-middle-left');
        this.tooltipElement.classList.remove('halo-tooltip-middle-right');
        this.tooltipElement.classList.remove('halo-tooltip-bottom-center');
        this.tooltipElement.classList.remove('halo-tooltip-bottom-left');
        this.tooltipElement.classList.remove('halo-tooltip-bottom-right');
        this.tooltipElement.classList.remove('halo-tooltip-top-center');
        this.tooltipElement.classList.remove('halo-tooltip-top-left');
        this.tooltipElement.classList.remove('halo-tooltip-top-right');

        this.tooltipElement.classList.add('halo-tooltip-' + this.tooltipPosition);

    }

    private setPosition(loops: number = 0): void {

        let tooltipTop: number;
        let tooltipLeft: number;

        const hostDimensions = this.host.nativeElement.getBoundingClientRect() as DOMRect;

        const tooltipDimensionsBeforePosition = {
            width: this.tooltipElement.offsetWidth,
            height: this.tooltipElement.offsetHeight
        };

        const padding = {
            top: 8,
            bottom: 8,
            side: 14,
            middleSide: 10
        };

        if (this.tooltipElement.offsetWidth < this.tooltipElement.scrollWidth) {

            this.tooltipElement.style.wordBreak = 'break-word';

        } else {

            this.tooltipElement.style.wordBreak = 'unset';

        }

        switch (this.tooltipPosition) {

            case HaloTooltipPosition.TopLeft:

                tooltipTop = hostDimensions.top - this.tooltipElement.offsetHeight - padding.top;
                tooltipLeft = hostDimensions.left - this.tooltipElement.offsetWidth + padding.side;

                break;
            case HaloTooltipPosition.TopCenter:

                tooltipTop = hostDimensions.top - this.tooltipElement.offsetHeight - padding.top;
                tooltipLeft = hostDimensions.left + ((hostDimensions.width - this.tooltipElement.offsetWidth) / 2);

                break;
            case HaloTooltipPosition.BottomLeft:

                tooltipTop = hostDimensions.top + hostDimensions.height + padding.bottom;
                tooltipLeft = hostDimensions.left - this.tooltipElement.offsetWidth + padding.side;

                break;
            case HaloTooltipPosition.BottomRight:

                tooltipTop = hostDimensions.top + hostDimensions.height + padding.bottom;
                tooltipLeft = hostDimensions.left + hostDimensions.width - padding.side;

                break;
            case HaloTooltipPosition.BottomCenter:

                tooltipTop = hostDimensions.top + hostDimensions.height + padding.bottom;
                tooltipLeft = hostDimensions.left + ((hostDimensions.width - this.tooltipElement.offsetWidth) / 2);

                break;
            case HaloTooltipPosition.MiddleLeft:

                tooltipTop = hostDimensions.top + ((hostDimensions.height - this.tooltipElement.offsetHeight) / 2);
                tooltipLeft = hostDimensions.left - this.tooltipElement.offsetWidth - padding.middleSide;

                break;
            case HaloTooltipPosition.MiddleRight:

                tooltipTop = hostDimensions.top + ((hostDimensions.height - this.tooltipElement.offsetHeight) / 2);
                tooltipLeft = hostDimensions.left + hostDimensions.width + padding.middleSide;

                break;
            default: // HaloTooltipPosition.TopRight

                tooltipTop = hostDimensions.top - this.tooltipElement.offsetHeight - padding.top;
                tooltipLeft = hostDimensions.left + hostDimensions.width - padding.side;

                break;

        }

        this.tooltipElement.style.top = tooltipTop + 'px';
        this.tooltipElement.style.left = tooltipLeft + 'px';

        if ((tooltipDimensionsBeforePosition.height !== this.tooltipElement.offsetHeight ||
            tooltipDimensionsBeforePosition.width !== this.tooltipElement.offsetWidth) &&
            loops < 10) {

            this.setPosition(++loops);

        }

    }

}
