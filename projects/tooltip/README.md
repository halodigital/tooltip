# Tooltip by Halo-Digital

This package contains a tooltip with the following features:

- Delayed tooltip

- Various positions

- Text ellipsis for tooltip source text

Enjoy!


## Attributes

##### haloTooltip
<sub>Text inside the tooltip</sub>  
<sub>**Type:** string</sub>
<br />

##### tooltipDelay
<sub>How many milliseconds to wait before display the tooltip</sub>  
<sub>**Type:** number</sub>  
<sub>**Default:** 0</sub>
<br />

##### tooltipPosition
<sub>The tooltip position relative to the parent element</sub>  
<sub>**Type:** 'bottom-center' | 'bottom-left' | 'bottom-right' | 'middle-left' | 'middle-right' | 'top-center' | 'top-left' | 'top-right'</sub>  
<sub>**Default:** 'top-right'</sub>
<br />

##### enableEllipsis
<sub>Declare if the parent element text will be shrinked with ellipsis</sub>  
<sub>**Type:** boolean</sub>  
<sub>**Default:** false</sub>


## Example

```
<div haloTooltip="Tooltip text"
     tooltipDelay="1000"
     tooltipPosition="top-center"
     enableEllipsis="true">

     Parent text

</div>
```
