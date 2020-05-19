## My Implementation
 
Thanks for taking the time to review my submission. Would love to show you what I can do with a modern website architecture in the same amount of time!
 
### Dropdown
I built the drop down with radio buttons rather than a select as option tags not really styleable in the way the design asked for.
 
### Images
I pulled in an svg from font awesome (down chevron) as the drop down icon. I just downloaded the zip of the free images and pulled out the one image I needed rather than importing the whole library because I didn't need any of them.
 
Two of the images in the design had drop shadow around them (the browser views, and the interface mockup). I did not implement the drop shadows as the images had invisible backgrounds that caused the drop shadow to look off. I thought it looked worse with the off drop shadow then it did without it so I left it out.
 
I also noticed the background of the hero slot is different from the design which threw me off a little.
 
### Layout
To get the layout as close as possible I opened up the 'page-mockup' image in my browser and zoomed till it fit the window then tried to match that with my implementation. This meant I built the design for a 1920x1080 screen first so I have shrunk it when you hit a certain breakpoint with media tags so it will fit smaller devices.
 
Also for the lorem ipsum part, the text in the design broke in a different way. I left this as I assumed we didn't need to have it match perfectly. Fix would have been to split the text into different divs per line.
 
### Fonts
I noticed the fonts were huge for 960px so I shrunk them to half on smaller screens, looked good that way. Also think there were some fonts used in the design that were different from the ones supplied (ie the font for 'surge' in the hero slot text). I used the closest I had from the specified fonts.

### File structure
I broke the css down into, what I thought, were logical small chuncks to make the files more digestable.

Left the js file out of a folder as it was just a single file.

Pulled all the assets into the src folder to make the page load proerly when servering the page. (tested with `npm start`)
