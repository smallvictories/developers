# Small Victories Developer Resources

These are resources for customizing the functionality and appearance of a Small Victories website. They range from easy to more advanced – some are drag-and-drop and some require some coding. They’re all meant to extend the basic functionality of Small Victories to allow you to build customized, full-function websites for personal, enterprise, or client uses.

If you’re looking for help with basic Small Victories stuff like setting up a custom URL, ordering and naming files, adding captions to images, or using individual themes, check out the Small Victories [Getting Started Guide](http://docs.smallvictori.es).

## Introduction

There are three main ways to build custom Small Victories websites.

1. [Customize a Default theme](#customizing-a-default-theme)
2. [Use a Custom theme](#using-a-custom-theme)
3. [Build your own theme](#building-your-own-theme)
4. [Host your own code](#hosting-your-own-code)

```
.
├── themes-default-styled          # default SV themes with custom CSS/JS 
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
│      ├── slideshow
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
│      ├── slideshow
├── snippets                        # code snippets
│   ├── example-filtering-feed  
│   └── example-filtering-slideshow
└── themes-custom                   # custom themes
```

----

## Drop-ins

Drop-ins are code snippets that perform specific functions in a Small Victories website. Each one has a `README` file with instructions on how to use it.

```
.
├── drop-ins
│   ├── add-opengraph
│   ├── filters-feed
│   └── filters-slideshow
.
```
----

## Customizing a Default theme
Default themes are the standard themes built into Small Victories. For more info on the default themes, go the Themes page.

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
Custom themes are themes built by the SV community. By following the instructions included in the `README`, you can use the theme in your own SV sites. You can also add your own further modifications to a Custom theme.

```
.
├── themes-custom                  # custom themes
│   ├── djh-photo-theme            # generated files when creating a new SV site
│   └── unstack                    # compiled theme HTML when exporting an SV site
.
```

----

## Building your own theme

----

## Hosting your own code

