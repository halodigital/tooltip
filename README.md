##### Tooltip by Halo-Digital #####

This package contains a tooltip with the following features:

- Delayed tooltip

- Various positions

- Text ellipsis for tooltip source text

Enjoy!


### How to Use ###

# Attributes #

haloTooltip: string

tooltipDelay: number (milliseconds)

tooltipPosition: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'middle-left' | 'middle-right' | 'top-center' | 'top-left' | 'top-right'

enableEllipsis: boolean (Declare if the parent element text will be shrinked with ellipsis)


# Example #

<div haloTooltip="Tooltip text"
     tooltipDelay="1000"
     tooltipPosition="top-center"
     enableEllipsis="true">

     Parent text

</div>
