# Classes and IDs

Small Victories automatically adds classes to objects based on a  file’s name, filetype and theme. For example, if you have a site using the Feed theme and one of the files included in the site is called `example-image_large.jpg`, you will see the following block of code in your site’s HTML:

```
<div class="sv-feed-item sv-feed-item-0  example-image large jpg" id=“exampleimagelargejpg”>
    <div class="sv-feed-item-photo">
          <img alt=“example image large” class="lazyload lazy-loaded" src="example-image_large.jpg">
    </div>
</div>
```

Notice that hyphens and underscores are treated differently. A hyphen will keep words together, while an underscore will break them apart into separate words. For example, `example_image` will add the classes `.example` and `.image`. However, `example-image` will add the class `example-image`.

## Useful Classes and IDs
In addition to the dynamic classes added to content containers, themes layouts objects also have their own Classes and IDs. You may want to target these with CSS or JS to customize an existing theme.

### All themes

`body` will be given classes based on the theme, site name, and site ID.
`#index` will be added to the `body` of the top-level page. Sub-folders will have an ID matching the name of the folder.

### Specific themes
Check the theme page for theme-specific classes that you can use with JS and CSS.