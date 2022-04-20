# Aurorahosts docs

Welcome! If you're interested in contributing to the docs then you'll want to read the information below.

# Get started:

[Formating](#Formating)

[Quick guide to markdown syntax](#Markdown syxtax)

[Contributing](#Contribute)



# Formating

At the start of every guide you'll need to have the following:
```markdown
---
id: Welcome
title: Welcome to my page!
custom_edit_url: null
image: https://aurorahosts.com/img/logo/Primary-logo-blue.svg
```
Confused? Everything is explained here:

#### ID tag -

The `id:` tag allows us to set the URL of the page. For example if the id is `id: Welcome` then the link would be `https://url.ca/Welcome`

#### Title tag -

The `title:` tag allows you to set the title of the page which is displayed as an H1 header when the page is opened. For example if the title tag is `title: Welcome visitor` then when someone opens the page they'll see a h1 header that says
`Welcome visitor`

#### custom_edit_url tag -

The `custom_edit_url` tag allows us to set the URL that people will be directed to when they click `Edit this page` the value of the tag is set to `null` because we do not want a `Edit this page` button at the bottom of the page. You should not modify the value of this tag, **always keep it as `null`**

#### Sidebar position tag -

The sidebar position allows us to set the position that the page will be located at on the sidebar, the value of this tag is upto you. It can be a random number or you can order the contents of the sidebar.

#### Image tag -

The image tag isn't something that should be modified, the image tag allows us to set an embedded image for our URL for example:

![](../../images/embedded.png)

# Markdown syntax

### Making text **bold**:
```
**This will be bold**
```
To make text bolded all you need to do is encapsulate the text within the asterisks as shown in the example above

**This is bold**

---

### Underline your __text__:
```
__This entire sentance will be underlined__
```
Underlining text is done in the same way as making your text bold, encapsulate the text you want underlined within two underscores `__` at the start and end of the text as shown in the example above.

__This is underlined__

---

### Link referencing
```
[This is google](https://google.com)
```
[Click me](https://xn--cdaaa.com/)

The click me above will take you somewhere, to make the text redirect to a link you can use the referenced text at the start. Encapsulate the text you want to redirect in two brackets [] then use two perentheses () after the right square bracket.

---
### Making text Italic

```markdown
*This text is italic*
```
To make text italic you'll need to place an `*` asterisk at the start and end of the text that you want to make italic. Example shown above

*This is italic*

---
### Quoting

```markdown
> This would be a quote
```
Adding quotes is simple, if you want to quote a specific section of the text use a greater than sign `>` and then add text right after. There's an example above. Below is what it would look like
> *"We know what we are, but not what we may be."* - Shakespeare

### Nested quotes
```markdown
> Shakespeare once said
>> Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.
```
A nested quote is a quotation encapsulated inside of another quote. Why is this useful? Perhaps it is, perhaps it isn't but at least you know how to use it now. Below is an example of what it would look like. Above is how you'd do it, you can also block quote infinitely

> This is a quote
>> This is a nested quote
---
### Listing items
```markdown
1. Item one
2. Item two
3. Item three
4. Item four
5. Item five

+ Dotted Item 1
+ Dotted Item 2
+ Dotted Item 3
```
Making lists in Markdown is as easy as 1,2,3. All you need to do is add a number and a period then list your items as shown above, below is an example of what it'll look like

1. Item one
2. Item two
3. Item three
4. Item four
5. Item five

+ Dotted Item 1
+ Dotted Item 2
+ Dotted Item 3

---
### Code blocks
```javascript
console.log('Hello World');
```
This is a block of code, what's different about this? With codeblocks you can specify the language you'd like the block to be in, in specific languages it'll colour cote the code. To do this add ` ``` `at the start of the code block then click enter. Type the code you'd like added into the blockquote and once done go to the next line and add another another 3 ` ``` ` backquotes. At the end you should have a result like the example shown above, to add a specific language to the blockquote you'll need to add the language name after the first set of back quotes ex: ` ```javascript `. **The language only needs to be added at the start of the backquotes not at the end**


---

### Image referencing
```
![This references an image](/path-to-image)
```
![Smart Waterloo](./static/img/Primary-logo-blue.svg)

Simillar to link referncing with image references you just need to add an exclamation mark (!) before the square brackets [] and instead of adding a link within the perentheses you'd add the path to the image.

---

### Headings
```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```
# This is a cool H1 Heading
## This is cool H2 Heading
### This is a cool H3 Heading
#### This is a cool H4 Heading
##### This is a cool H5 Heading
###### This is a cool H6 Heading

# Contribute

Have some useful information you'd like to share? Contribute to our docs. To contribute follow the instructions below:

1. Fork the repository
2. Create your markdown page in the proper directory:

For an article relating to game servers create it in`/docs/Game servers/` 

For articles relating to VPS create it in `/docs/VPS/`

For articles relating to Billing create it in `/docs/Billing area/`

For anything else create a new directory relating to the subject or create it in the docs directory.

3. After you've created your article ensure you have the proper formating as shown [above](#formating)

4. Once you're done writing your article create a pull request and include the following information

* What's included in your PR

That's it, once you've done the pull request we'll review it within 24 hours.

If there's any problems with your contributions please contact us on [discord](https://discord.gg/XxHx6PxwNn)
# Thanks for contributing 🙂