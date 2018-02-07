# Example workflows

Small Victories lets you host files on Dropbox, so you are free to use your normal development workflow.

Small Victories has some features to help you do this so we’ve outlined a sample workflow below to point those features out:

1. Start by creating a new site and choosing the HTML theme, or choose an existing theme
2. If you want to set up a staging site, there are two ways to do this:
	- Since making sites is free with SV, you can just create a duplicate of your site. You can leave it at the default *smvi.co* URL or you can set the CNAME to point at something like *dev.yoururl.com*
	- If you’re using a custom URL, you can also choose to manually publish your changes. This will allow you to preview any changes on the *smvi.co* URL before they’re live on your custom URL.
3. Set up the structure of your site as you would normally. Just make sure to keep your `_sv_settings.txt` file in the site folder. You can use flat HTML, a static site generator like Jekyll, or SV’s own Liquid templating interpreter.
4. If you want to speed up development and work locally, you can add some test content to your site and then download the site archive from the SV admin. This will give you the HTML (with referenced CSS and JS) to open locally.
5. Edit custom CSS and JS files.
6. Copy them to your site folder.