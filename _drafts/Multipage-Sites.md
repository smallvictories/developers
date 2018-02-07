# Multi-page Sites

Small Victories lets you make multi-page sites very easily. Imagine the model of a typical website: each page of a website has a different function and the layout serves that function. Small Victories operates in the same way.

When you create a new site with SV, this becomes the homepage. Any theme (or plain HTML) can be used for the homepage. Any subfolders can be turned into pages on your website, and you can set the title, description, and theme (as well as other settings, depending on the theme) in the Settings file.

When you create a subfolder, the corresponding subpage will also be created:

Finder:
```
bountiful piano
	└── subpage
		└── sub-subpage
	└── another-subpage
```

URL:
- *bountiful-piano.smvi.co*
- *bountiful-piano.smvi.co/subpage*
- *bountiful-piano.smvi.co/another-subpage*
- *bountiful-piano.smvi.co/sub-subpage*

To enable a subfolder as a subpage on your site, it must include a `_sv_settings.txt` file. You can set the settings as you would for any SV site. The only required field, though, is:

- `title:` - set this to whatever title you’d like
- `theme:` – set this to whatever theme you choose, or to `HTML`.

By not including the `_sv_settings.txt` file, subfolders will operate normally for organizing and referencing files but cannot be accessed through a browser.

## Case studies and examples
- jacobheftmann.com — [Case study](http://blog.smallvictori.es/multi-page-sites) and [example](http://www.jacobheftmann.com)