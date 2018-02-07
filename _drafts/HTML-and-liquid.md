# HTML and Liquid

Small Victories is intended to let you add content to a website without worrying too much about formatting, layouts, or styling.

However, there are two ways to use Small Victories for projects that require more customization:

1. HTML hosting
2. Liquid templating

# HTML hosting

Small Victories can be used to host HTML much like a regular server.

1. Create a new Site and set the theme to HTML.
2. Put your HTML files, linked files such as JavaScripts and Stylesheets, and assets into your Site folder.

# Creating templates with Liquid
Small Victories can also be used with the [Liquid](https://github.com/Shopify/liquid/wiki/liquid-for-designers) templating language to create totally custom sites with a folder-based CMS.

For example, let's say you wanted to create a portfolio website:
+ You would start by writing your sites pages in HTML.
+ All of the content for your website (text, images, etc.) can be put in subfolders (e.g. `/content`) organized however you please. By using Liquid tags, you can insert this content into your website’s layouts.
+ Add styles and scripts as normal

Image objects have the following attributes:
+ `name`
+ `path`
+ `src`

HTML, markdown and text files have the following attributes:
+ `name`
+ `path`
+ `contents`

You can then iterate through your files. For example:

```
{% for image in images %}
  <img src="{{ image.src }}" alt="{{ image.name }}">
{% endfor %}
```

[See the HTML demo](http://demo.smallvictori.es/html-theme)

You can also access the current file with the tag `current_file`.

For more information, refer to the [Liquid documentation]().