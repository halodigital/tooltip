<h1>Tooltip by Halo-Digital</h1>

This package contains a tooltip with the following features:

- Delayed tooltip

- Various positions

- Text ellipsis for tooltip source text

Enjoy!


<h2>Attributes</h2>

<b>haloTooltip:</b> string
<br />
<small>Text inside the tooltip</small>

<b>tooltipDelay:</b> number
<br />
<small><b>Default:</b> 0<small>
<br />
<small>How many milliseconds to wait before display the tooltip</small>

<b>tooltipPosition:</b> 'bottom-center' | 'bottom-left' | 'bottom-right' | 'middle-left' | 'middle-right' | 'top-center' | 'top-left' | 'top-right'
<br />
<small><b>Default:</b> 'top-right'<small>
<br />
<small>The tooltip position relative to the parent element</small>

<b>enableEllipsis:</b> boolean
<br />
<small><b>Default:</b> false<small>
<br />
<small>Declare if the parent element text will be shrinked with ellipsis</small>


<h2>Example</h2>

<code>
     <div haloTooltip="Tooltip text"
          tooltipDelay="1000"
          tooltipPosition="top-center"
          enableEllipsis="true">
          Parent text
     </div>
</code>
