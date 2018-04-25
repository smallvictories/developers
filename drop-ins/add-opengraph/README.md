# Add OpenGraph data to your Small Victories site

1. Copy the code in `sv-opengraph.js` into your site’s `_sv_custom.js` file
2. Fill in the OpenGraph information for your website (see below)
3. Save, watch it sync, and share!

```
addOpenGraph({
  ogTitle: 'Title',                                // The title of your website
  ogDescription: 'This is the description',        // A one to two sentence description of your website
  ogType: 'website',                               // The type of website, e.g. article, blog (default set to 'website')
  ogURL: 'http://www.yourwebsiteurl.com',          // The URL for your website (where all your shares will be directed)
  ogImage: '/path/to/images.jpg'                   // The image you want to be featured in social posts. This can be an image you’re already using in your site, or you can make a special image and put it in your site folder
});
```

More info: http://ogp.me/
