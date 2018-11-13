# README

Demo: http://sv-custom-themes.smvi.co/museum

1. Create a new Small Victory site using the Feed theme.
2. Copy the `_sv_custom.css` and `sv_custom.js` into your new site folder (you can overwrite the existing ones). You don’t need to copy `.txt` or `.jpg` files – they’re just demo content. (You don’t need to copy `demo.webloc`, `_README.md`, `_screenshot.png` into your folder either, though you can and it won’t hurt anything since SV ignores files starting with `_`.)
3. Add images and text files. There are some tips for naming your files below. See the demo for examples.
4. You can adjust the sizing of images, customize styles, or add your own scripts in the `_sv_custom` JS and SCSS files.

## Naming filters
- By naming a `.txt` file the same thing as an image file, it will become a caption. This is how you add text to your sections.
- You can also add a `.txt` file without an image and it will appear as its own section.
- You can use the following values in your filenames (e.g. `section-6 right full`):
    - `right` – right-align an image in the layout.
    - `half` – size an image to half the . Can be combined with `center` or `right`.
    - `center` – center an image in the layout.
    - `full` – force an image to 100% of layout (even if it has to upscale).
