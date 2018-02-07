# JavaScript

When you create a new site, you’ll see a `_sv_custom.js` file. Write your custom scripts here and it’ll automatically be injected into your site. Small Victories already has jQuery built in.

## Custom scripts with multi-page sites

If you have a Site with [subfolders/subpages](), these subpages will inherit the scripts in the top level `_sv_custom.js` file.

If a subpage has its own `_sv_custom.js` file, it will use these scripts instead and will not inherit any scripts from higher up the Site's folder structure.

Hint: It's usually simplest to keep all of a site’s scripts in one file at the top level. However, sometimes you might want to manually override inheritance by including a `_sv_custom.js` in a subfolder.