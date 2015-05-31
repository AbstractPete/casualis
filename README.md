Casualis
=======
WTF IS THIS SHIT ?
---------------------
> It's a simple module that allows you to generate **surnames**, **names** and **patronymic** .
> Currently the module supports only Russian names.

Install
-------
> #### <i class="icon-upload"></i>  ``` npm install casualis ```
How to use
-------------

```
var csl = require('casualis');
 
var maleName = csl.getRandomFullName('male');
var femaleName = csl.getRandomFullName('female');
 
console.log('male is ' + maleName);
console.log('female is ' + femaleName);
```
