contrib-generator
===

This serious and very complicated tool allows you to make the contributions graph on your profile a little bit
more interresting.

[Demo](https://github.com/contrib-generator-test)

###Instructions

- Create a new git repository and a `text.txt` file somewhere (probably `/tmp`).
- Use all your ascii skills to create something nice in this textfile.
- You can use `figlet` if you want some text:
```
figlet -t -f banner "HELLO WORLD" > text.txt
```
- Get the `index.js` file from this repository and start it with a start date as parameter. Example: `node index.js "2014-04-13"`
- Push your repo to github
