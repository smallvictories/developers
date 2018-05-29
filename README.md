# Small Victories Developer Resources

These are resources for customizing the functionality and appearance of a Small Victories website. They range from easy to more advanced – some are drag-and-drop and some require some coding. They’re all meant to extend the basic functionality of Small Victories to allow you to build customized, full-function websites for personal, enterprise, or client uses.

If you’re looking for help with basic Small Victories stuff like setting up a custom URL, ordering and naming files, adding captions to images, or using individual themes, check out the Small Victories [Getting Started Guide](http://docs.smallvictori.es).

###### Branches
`master` – production
`development` – in progress

## Introduction

There are three main ways to build custom Small Victories websites.

1. [Customizing a Default template using Drop-Ins](#customizing-a-default-template-using-drop-ins)
2. [Customizing a Default template with your own code](#customizing-a-default-template-with-your-own-code)
3. [Using a Custom theme](#using-a-custom-theme)
4. [Building your own theme](#building-your-own-theme)
4. [Hosting your own code](#hosting-your-own-code)

```
.
├── 01-drop-inx                      # code snippets
├── 02-default-templates             # Default SV templates
├── 03-custom-templates              # custom sites based on Default templates
└── 04-build-your-own                # build a theme from scratch
```

## Concepts

### Terminology

*Folder (Site)* – Each folder in your Small Victories folder is equivalent to a 'website', meaning it has its own URL. A site can be a single page, in which case it’s kind of like a template, or it can include multiple pages made up of different subfolders that each use their own template. For example:
```
.
├── Dropbox
│   ├── Small Victories
│   │   └── Folder (Site)                 # this is a SV website with its own URL
.   .
```
*Sub-Folder (Sub-Page)* – Each folder can have any number of sub-folders. Each folder has an equivalent URL path
```
.
├── Dropbox
│   ├── Small Victories
│   │   └── Folder (Site)                 # this is a SV Site with its own URL, e.g. smvi.mysite.co
│   │   │   └── Sub-Folder (Sub-page)     # this is a Sub-Page, e.g. smvi.mysite.co/sub-folder
.   .   .
```

*Template* – A template is the layout you’ve set in your `_sv_settings.txt` file. For a single-page site, Template and Site are basically the same thing for a single-page Site. In a multi-page site, you can have a subfolder/subpage that uses a different template than its parent Site or sibling Sub-Page(s).

### Multi-page sites
Multi-page websites are as easy to create as adding a Sub-Folder to your theme. A Sub-Folder needs its own `_sv_settings.txt` file with at minimum:

`title: `

`theme: `

A Sub-Page can use any theme. It can also have its own `_sv_custom.css` and `_sv_custom.js` files. If a Sub-Page has custom CSS or JS files, it will not inherit any scripts or styles from parent folders.


### Ignoring files
Folders and files prefixed with an underscore will be ignored by SV. They’ll exist in your Dropbox as normal and you can access their contents with normal filepaths, but they won’t be rendered in your site by SV.

`_example.html`

`/_example`

----

## Customizing a Default template using Small Victory *Drop-Ins*

*Drop-ins* are code snippets that perform specific functions in a Small Victories website. Each one has a `README` file with instructions on how to use it. You can use them with Default templates right out of the box or use them as a starting points for your own customization.

```
.
├── drop-ins
│   ├── add-opengraph
│   ├── filters-feed
│   └── filters-slideshow
.
```
----

## Customizing a Default template with your own code
Default themes are the standard themes built into Small Victories. You can customize theme however you please, from simple stuff like changing the fonts to completely reconfiguring the layout.

We’ve included two sets of files for you to reference:

#### `/default-files`
This is exactly how a new SV site appears in your Dropbox when it’s created, including default files. As with a real SV site, this doesn’t include the base HTML, CSS, or JS for the template. Use this when: you want to run a site locally and customize it using CSS and JS.

1. Create a new SV site
2. Follow the steps for running an SV site locally
3. Write styles and scripts in `_sv_custom.css` and `_sv_custom.js`, respectively
4. Refresh your browser running the site locally to see your changes
5. After your folder syncs, you’ll see the changes on your live site

#### `/source-files`
This is the source code – including HTML/CSS/JS – for a template. Use this when: you want to reference the page structure, specific class names, etc. This is just for reference purposes, since real SV sites don’t give direct access to the source HTML/CSS/JS.

For more info on individual default themes, go the Themes page.

```
.
├── themes-default                 # default SV themes
│   ├── default-files              # generated files when creating a new SV site
│      ├── blank
│      ├── blog
│      ├── campaign
│      ├── document
│      ├── ecommerce
│      ├── feed
│      ├── homepage
│      ├── html
│      ├── presentation
│      └── slideshow
│   └── source-files                # compiled theme HTML when exporting an SV site
│      ├── blank
│      ├── blog
│      ├── campaign
│      ├── document
│      ├── ecommerce
│      ├── feed
│      ├── homepage
│      ├── html
│      ├── presentation
│      └── slideshow
.
```

----

## Using a Custom theme
Custom themes are themes built by the SV community. By following the instructions included in the `README`, you can use these themes for your own SV sites. You can also add your own further modifications to a Custom theme.

```
.
├── themes-custom                  # custom themes
│   ├── jdh-photo-theme            # generated files when creating a new SV site
│   └── unstack                    # compiled theme HTML when exporting an SV site
.
```

----

## Building your own theme

To build your own themes, you’ll need some basic understanding of HTML/CSS/JS. SV uses the [Liquid templating language](http://shopify.github.io/liquid/), which lets you do stuff like include files, loop through folders, etc.

### Workflow
1. Create a new SV Site using the HTML template
2. Follow the steps for running an SV site locally
3. Write your code how you would normally. You can use Liquid for partials, displaying content, etc.
4. See your changes locally
5. Let your files sync via Dropbox to see them on your live site

### Getting Started
When you create a new Site using the HTML template, you’ll see a basic demo site. This covers the basic concepts as a starting point.

### Next steps
Check out our case study on building Le Fleuriste using the HTML template.

----

## Hosting your own code

If you just need to host your own HTML/CSS/JS, whether for simple sites or using your own static site generator, SV is perfect for that too.

1. Create a new site
2. Set the theme to HTML
3. Drop in your filesstatic

You can use HTML/CSS/JS files plus any assets you need. You can use relative filepaths just as you would normally.
