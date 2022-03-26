![Methods](https://github.com/Chandra-sekhar-pilla/HTML-methods/blob/main/Resources/Methods.png)

# HTML methods
 A package that can handle methods in html(for non repetative code).

# What is Methods?
 Have you ever get frustated of writing the same code in html to get what you want. Then here you are use this package? to make it easy by defining your method using a **"def"** tag and **"name"** attribute to name your method.

# Version info:
 - Methods class - Added because the import is not working when ``window.onload`` is used in the user script because Methods.js uses the same event.
 - Organised the folder structure
 - As Methods class is available user can access in their own script only when using ``window.onload`` event. If the event is not used in user script there is no need to access the class they can just link methods.js and can use import tags. For more info visit [docs](https://the-atelier.ml/Pages/Methods/methods.html)
# Usage:
**Using on same file (``<def>``):**
 - Methods package is very simple to use.
 - All you need to do is to define the method using **"def"** tag and **"name"** attribute.
 - And then to call the method you can use the value you provided in name attribute.
 - That's it.

**Example**
```html
<test></test>
<commit></commit>
<!--use the method name as the tag name-->
<def name="test">
    <p>Help</p>
</def>
<def name="commit">
    <p>commit</p>
</def>
```
**Note: You can copy any code that means if you want to copy the code which is at the bottom it will work.**

**Usage on other files (``<import>``):**
- Defining of the tags can be done as usual (use the syntax shown in index.html).
- Now use the instruction
```html
<import name="methodName" from="pathToTheSourceFile">
```
- The attribute ``name`` is the name of the tag and ``from`` is the path to that file
**Example:**
> index.html
```html
<def name="test">
    <p>Methods.js</p>
</def>
```
> anotherHtml.html
```html
<import name="test" from="index.html">
```
- This will automatically imports and includes the inner content of the def tags (methods) from index.html into anotherHtml.html file

**NOTE: You have to include the Methods.js script in every file in which you are using ``<def>`` and ``import`` tags.**

**NOTE: You can view index.html, anotherHtml.html and other html files in this repository to know more about the usage of Methods.js**

## NOTE:
- Remember that these def tags will be removed once the page is loaded so that you cannot see the code inside this def tags
- So the code inside these tags only works once you call them using as a tag name
- Run [index.html](https://github.com/Chandra-sekhar-pilla/HTML-methods/blob/main/index.html) file and inspect the changes in html so you can know more.

# Output:
 ![MethodsOutput](https://github.com/Chandra-sekhar-pilla/HTML-methods/blob/main/Resources/outPutv2.png)