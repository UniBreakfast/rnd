# rnd

The ```rnd(...)``` is the one function for multiple cases/situations I needed a solution for to get the appropriate random values or arrays of them.

## Table of Contents:

  * [Installation](#installation)
  * [Usage](#usage)
    * [shorthand for Math.random()](#example-0)
    1 [random integer](#example-1)
    2 [random character from a range](#example-2)
  * [Contributin](#contributing)
  * [Credits](#credits)
  * [License](#license)

## Installation:

Take **```rnd.js```** and put it in your project's folder and add a
```<script src="rnd.js">```
to your html if it suits you.
Or you may include it from github directly with
```<script src="https://raw.githubusercontent.com/UniBreakfast/rnd/master/rnd.js">```
Otherwise you are probably don't need instructions to **```import```** a one-function js file. And do the same for ```rndneeds.js``` if you're planning to use ```rnd(...)``` for dates or generation of arrays of random values at one go.

## Usage:

### Example 0:

  The simplest usage is just a shorthand for ```Math.random()``` and result is similar (cause ```Math.random``` used internally here and in all other cases too).

  ```js
    > rnd()
    // 0.06598564762879255  - something like that
  ```

### Example 1:

  If you need a random integer from zero and up to, say, 77 you need to

  ```js
    > rnd(78)      // so it's "array element by array.length" -friendly
    // 28  - something like that
  ```
  And if you need a random integer between two numbers (edge cases included) use

  ```js
    > rnd(18, 60)
    // 36  - something like that (but it could be 18 or 60 just as well)
  ```

### Example 2:

  If you need a random letter (or any character for that matter) from, say, A to Z

  ```js
    > rnd("A-Z")
    // "Y"  - something like that (but it could be A or Z just as well)
  ```
  Or, say, for Cyrillic from A to Я

  ```js
    > rnd("А-Я")
    // "Щ"  - something like that (but it could be А or Я just as well)
  ```
  Or even from ऄ to ह for some Devanagary

  ```js
    > rnd("ऄ-ह")
    // "ळ"  - something like that (but it could be ऄ or ह just as well)
  ```

### Example 3:

  If you just need a random date and time in an ISO-standard format pass the ```Date``` constructor-function itself like this

  ```js
    > rnd(Date)
    // "1973-05-12 13:23:18"  - something like that
  ```

  Output date would be in between "1970-01-01 00:00:00" and your current datetime.

  And if you don't actually need it in that particular string format and want the Date-object itself use

  ```js
    > new Date(rnd(Date))
    // "Mon Jul 11 1994 18:34:49 GMT+0300 (Восточная Европа, летнее время)"  - that was my output, yours probably won't be with Cyrillic in it
  ```

  You can do that with result of any case in this example group.

  But if you need a date in some particular range, say from "2000-02-20" to "2020-02-02" you should try

  ```js
    > rnd(new Date("2000-02-20"), new Date("2020-02-02"))
    // "2020-01-29 12:04:08"  - something like that
  ```

  And you can make the Date instances using different parameters

  ```js
    > rnd(new Date("July 15, 1999"), new Date(2012, 7, 14, 23, 59))
    // "2007-02-03 17:43:24"  - something like that
  ```



## Contributing:

Larger projects often have sections on contributing to their project, in which contribution instructions are outlined. Sometimes, this is a separate file. If you have specific contribution preferences, explain them so that other developers know how to best contribute to my work. To learn more about how to help others contribute, check out the guide for setting guidelines for repository contributors.

## Credits:

Well, "it was me all along". For now.

## License:

This is free and unencumbered software released into the public domain.

 Anyone is free to copy, modify, publish, use, compile, sell, or
 distribute this software, either in source code form or as a compiled
 binary, for any purpose, commercial or non-commercial, and by any
 means.

 In jurisdictions that recognize copyright laws, the author or authors
 of this software dedicate any and all copyright interest in the
 software to the public domain. We make this dedication for the benefit
 of the public at large and to the detriment of our heirs and
 successors. We intend this dedication to be an overt act of
 relinquishment in perpetuity of all present and future rights to this
 software under copyright law.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.

 For more information, please refer to [unlicense.org](http://unlicense.org)
