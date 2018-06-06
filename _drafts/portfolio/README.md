Demo: http://sv-custom-themes.smvi.co/portfolio

1. Create a new SV site using the Feed theme
2. Add the `_sv_custom.css` and `_sv_custom.js` files to your new site folder
3. Add content
4. Name your files account


# Ordering
Because you probably want finer control over your layout, we recommend setting the sort order for your content to alphabetical instead of chronological:

`sort a-z` (or z-a)

## Naming your files
Naming your files will help you do two things:

1. Set the layout of your contents
2. Preserve your layouts by setting the order of your contents.

SV uses the names of yours files to add styles to them (you can read more about that [here]()). So, by using specific words in your filenames you can set the size and behavior of an individual block of content. For example, if you want an image to be half the width of the browser, you can add `half` to its filename. For example:

`half.jpg`

That will give it the class of `.half`, which you can add your own styles to in the `_sv_custom.css` file. (There’s a list of these below).

You probably also want to have control over the order your content appears in, so you could do something like:

`01a-half.jpg`
`01b-half.jpg`

You can also add anything else you want to that filename, as you would normally:

`01a-half-disobedient-playtpus.jpg`
`01b-half-enthusiasatic-walrus.jpg`

### File & Class names
All content is 100% wide on mobile devices, but on larger screens you can control the amount of space your content occupies:

`thumb`: 1/6 of the layout
`third`: 1/3 of the layout
`half`: 1/2 of the layout
`full`: 100% of the layout
`cover`: edge-to-edge
`ns`: remove space above/below content
`header`: 

## Bookmarks and Captions
Adding a `.txt` or `.webloc` file with the same name as your image or text file will create a caption or turn it into a link, respectively.

`01a-half-disobedient-playtpus.jpg`
`01b-half-enthusiasatic-walrus.jpg`
`01b-half-enthusiasatic-walrus.txt`
`01b-half-enthusiasatic-walrus.webloc`

This will add the contents of `01b-half-enthusiasatic-walrus.txt` as a caption below `01b-half-enthusiasatic-walrus.jpg`, and make the whole thing link to the URL contained in that `.webloc` file.

## Customizing
We’ve written a few classes to get you started with the basic layout, but you could also add your own classes and file naming conventions to extend this theme.