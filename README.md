# Tooltip by Halo-Digital #

This package contains a tooltip with the following features:

- Delayed tooltip

- Various positions

- Text ellipsis for tooltip source text

Enjoy!


## Attributes ##

**haloTooltip:** string
_Text inside the tooltip_

**tooltipDelay:** number
_**Default:** 0_
_How many milliseconds to wait before display the tooltip_

**tooltipPosition:** 'bottom-center' | 'bottom-left' | 'bottom-right' | 'middle-left' | 'middle-right' | 'top-center' | 'top-left' | 'top-right'
_**Default:** 'top-right'_
_The tooltip position relative to the parent element_

**enableEllipsis:** boolean
_**Default:** false_
_Declare if the parent element text will be shrinked with ellipsis_


## Example ##

`<div haloTooltip="Tooltip text"
     tooltipDelay="1000"
     tooltipPosition="top-center"
     enableEllipsis="true">
     Parent text
</div>`
