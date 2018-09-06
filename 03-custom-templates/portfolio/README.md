# Portfolio custom theme for Small Victories

Demo: http://sv-custom-themes.smvi.co/portfolio

## Set-up

1. Create a new SV site using the Feed theme
2. Add the `_sv_custom.css` and `_sv_custom.js` files to your new site folder
3. Add content
4. Name your files account

## Ordering images
If you want finer control over your layout, we recommend setting the sort order for your content to alphabetical instead of chronological:

`sort a-z` (or z-a)

## Naming your files
Naming your files will help you do two things:

1. Set the order of your content
2. Set the layout of your content

SV uses the names of yours files to add styles to them (you can read more about that [here](http://docs.smallvictori.es/advanced#naming-files)). So, by using specific words in your filenames you can set the size and behavior of an individual block of content. For example, if you want an image to be half the width of the browser, you can add `half` to its filename. For example:

`half.jpg`

That will give the image container the class of `class="half"`. Then, in your `_sv_custom.css` file, you can add your own styles for that class:

```
.half {
  ...
}
```

You probably also want to have control over the order your content appears in, so you could do something like:

`01a-half.jpg`
`01b-half.jpg`

You can also add anything else you want to that filename, as you would normally:

`01a-half-disobedient-playtpus.jpg`
`01b-half-enthusiastic-walrus.jpg`

### File & Class names
We’ve set up some classes for you to achieve the Portfolio layout like in the [demo](http://sv-custom-themes.smvi.co/portfolio). All content is 100% wide on mobile devices, but on larger screens you can control the amount of space your content occupies:

`thumb`: 1/6 of the layout
`third`: 1/3 of the layout
`half`: 1/2 of the layout
`full`: 100% of the layout
`cover`: remove left/right margin
`ns`: remove top/bottom margin
`header`: set on a text file to increase the text size

You can also other types of content besides images and the sizing will work the same way. For example, you can add either `.txt` or `.md` files into your layout if you want to include text.

## Bookmarks and Captions
Adding a `.txt` file with the same name as your image will create a caption after the image.

Adding a `.webloc` (this is a browser bookmark) file with the same name as your image will make the image a link.

`01b-half-enthusiasatic-walrus.jpg`
`01b-half-enthusiasatic-walrus.txt`
`01b-half-enthusiasatic-walrus.webloc`

This will add the contents of `01b-half-enthusiasatic-walrus.txt` as a caption below `01b-half-enthusiasatic-walrus.jpg`, and make the whole thing link to the URL contained in that `.webloc` file.

## Customizing
We’ve written a few classes to get you started with the basic layout, but you could also add your own classes and file naming conventions to extend this theme.


## Creating multi-page sites

In our demo, we’ve combined some of the above examples/concepts to set up a site with multiple pages. We’ve simply added folders, each with their own content. The names of these folders become the site’s URLs. It has the following structure:

```
.
├── /portfolio
│   ├── /project-1
│   ├── /project-2
```

By adding bookmark files for each project page we set up, we can make the images on our index page into links.

## Theme Roadmap
+ [ ] Add `.ns` class for removing margin above/below images
+ [ ] Add in `.sizer` class for making text blocks the same height as adjacent blocks
+ [ ] Convert to `flex-box` for easier alignment
