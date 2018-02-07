# CSS and Sass

When you make a new Site, a `_sv_custom.css` file will be created for you. You can write your own styles here.

You can use these styles to create your own designs, or override any of the current theme's default styles.

Some themes already have a few styles added (but commented out) to `_sv_custom.css` to get you started with some common changes.

## Targeting dynamic content objects

Theme elements have classes attached to them. Since the theme's HTML doesn't appear in your sites folder, you can use your browsers inspector to see what they are.

Content you add to a site will have classes added based on the file's name.

For more information, refer to the section on [Classes and IDs]().

## Custom styles with multi-page sites

If you have a Site with [subfolders/subpages](), these subpages will inherit the styles in the top level `_sv_custom.css` file.

If a subpage has its own `_sv_custom.css` file, it will use this stylesheet instead and will not inherit any styles from higher up the Site's folder structure.

Hint: It's usually simplest to keep all of a site's styles in one stylesheet at the top level. However, sometimes you might want to manually override inheritance by including a `_sv_custom.css` in a subfolder.

## SASS/SCSS

Small Victories will also automatically compile both flavors of [Sass]() for you.

Simply change your `_sv_custom.css` file to `_sv_custom.scss` or `_sv_custom.css` and SV will do the rest.

Note: SV will not recognize `@import` so make sure to write all your styles in one file.