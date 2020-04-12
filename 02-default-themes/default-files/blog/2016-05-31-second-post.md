# How it works

<p></p>

The Blog theme renders markdown, HTML and text files. Each  file you include will appear on the homepage and be rendered as its own post.

The posts are ordered by the `sort`  setting in your `_sv_settings.txt` file. 

By default they are ordered by filename. We found that using the date as you filename (format: yyyymmdd) is the best way to keep track of your files because it sorts nicely in your folder. If you post a lot you can append the time to the date (we use [military time](https://en.wikipedia.org/wiki/24-hour_clock), way more precise) separated by a dash. If you want to add a title to the filename put a space after the timestamp. Here are some sample filenames:
```
20160601.md
20160602-0845.md
20160602-1445.md
20160602 Filename-with-date.md
20160603-0845 File-with-timestamp.md
```

To have the newest post display at the top you should make it:

```
sort: date newest
```

You can add a featured image to a post by adding an image with the same file name. For example, if you have the post `my-first-post.md` you would name your image `my-first-post.jpg`.

The title of your post is taken from the top h1 line in your markdown file. The lead for your post is the paragraph directly after the h1. For example:

```
# My First Post

This is the lead for My First Post and will render on the homepage of my blog
```

If you don’t want to have a lead you need to add an empty paragraph after the h1 like so:

```
# My First Post
<p></p>
Since there are two space after the h1, this paragraph will not show up on the homepage.
```

If you’re using markdown, which we recommend you do, you can put more than just text in your files. Images and video can be used inline like so:
```
![document image](/images/document-image-01.png)
```