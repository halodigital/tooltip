# Tooltip by Halo-Digital #

This package contains a tooltip with the following features:

- Delayed tooltip

- Various positions

- Text ellipsis for tooltip source text

Enjoy!


## Attributes ##

**haloTooltip:** string  
<sub>Text inside the tooltip</sub>  
  
**tooltipDelay:** number  
<sub>Default: 0</sub>  
<sub>How many milliseconds to wait before display the tooltip</sub>  
  
**tooltipPosition:** 'bottom-center' | 'bottom-left' | 'bottom-right' | 'middle-left' | 'middle-right' | 'top-center' | 'top-left' | 'top-right'  
<sub>Default: 'top-right'</sub>  
<sub>The tooltip position relative to the parent element</sub>  
  
**enableEllipsis:** boolean  
<sub>Default: false</sub>  
<sub>Declare if the parent element text will be shrinked with ellipsis</sub>


## Example ##

`<div haloTooltip="Tooltip text"
     tooltipDelay="1000"
     tooltipPosition="top-center"
     enableEllipsis="true">
     Parent text
</div>`
