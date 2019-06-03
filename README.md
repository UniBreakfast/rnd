# rnd

The ```rnd(...)``` is the one function for multiple cases/situations I needed a solution for to get the appropriate random values or arrays of them.

## Table of Contents:

  * [Installation](#installation)
  * [Usage](#usage)
    * [shorthand for Math.random()](#example-0)
    * [random integer](#example-1)
    * [random character from a range](#example-2)
    * [random date](#example-3)
    * [random array element](#example-4)
    * [random object key by weight](#example-5)
  * [Contributing](#contributing)
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

### Example 0 - Math.random() shorthand:

  The simplest usage is just a shorthand for ```Math.random()``` and result is similar (cause ```Math.random``` used internally here and in all other cases too).

  ```js
    > rnd()
    // 0.06598564762879255  - random something like that
  ```

### Example group 1 - Integers:

  If you need a random integer from zero and up to, say, 77 you need to

  ```js
    > rnd(78)      // so it's "array element by array.length" -friendly
    // 28  - random something like that
  ```
  And if you need a random integer between two numbers (edge cases included) use

  ```js
    > rnd(18, 60)
    // 36  - something like that (but it could be 18 or 60 just as well)
  ```

### Example group 2 - Characters:

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

### Example group 3 - Dates:

  If you just need a random date and time in an ISO-standard format pass the ```Date``` constructor-function itself like this

  ```js
    > rnd(Date)
    // "1973-05-12 13:23:18"  - random something like that
  ```

  Output date would be in between "1970-01-01 00:00:00" (Unix Epoch Time 0 point) and your current datetime.

  And if you don't actually need it in that particular string format and want the Date-object itself use

  ```js
    > new Date(rnd(Date))
    // "Mon Jul 11 1994 18:34:49 GMT+0300 (Восточная Европа, летнее время)"
    // - that was my output, yours probably won't be with Cyrillic in it
  ```

  You can do that with the results of the rest of the cases in this example group as well.

  To get a random date starting not from the 1970 but from some exact date, say, January 1, 2012 and up until your current time, pass a Date instance you need as a single argument

  ```js
    > rnd(new Date("2012-01-01"))
    // or simply
    > rnd(new Date('2012'))
    // "2014-06-28 17:45:06"  - random something like that
  ```

  But if you need a random date in some particular range, say from "2000-02-20" to "2020-02-02" you should try

  ```js
    > rnd(new Date("2000-02-20"), new Date("2020-02-02"))
    // "2020-01-29 12:04:08"  - random something like that
  ```

  And, like always with Date constructor, you can make the Date instances using different kinds of arguments

  ```js
    > rnd(new Date("July 15, 1999"), new Date(2012, 7, 14, 23, 59))
    // "2007-02-03 17:43:24"  - random something like that
  ```

### Example group 4 - Array elements:

  To get random array element just pass the array as a single argument

  ```js
    > arr = ['alpha', 'beta', 'delta', 'gamma']
    > rnd(arr)
    // "delta"  - random something like that
  ```

  And it can be an array of any type of elements, not just strings.

  But with arrays of strings you can produce combinations of random elements of two arrays like this

  ```js
    > colors = ['red', 'orange', 'yellow', 'green', 'blue']
    > shapes = ['sphere', 'cube', 'pyramid', 'prism', 'cone', 'cylinder']
    > rnd(colors, shapes)
    // "green cube"  - random something like that
  ```

  If you try that with the arrays containing something other than strings it'll work by naively converting selected elements to strings.

### Example group 5 - Object property names:

  This one is good to randomly choose one of the multitude of string values with probability weights. So in order to do that you need and object like that

  ```js
    > statuses = {"never married": 26, married: 58, divorced: 10, widowed: 6}
    > rnd(statuses)
    // "never married"  - random something like that
    // but if you run it multiple times, you'll see that "married" is returned
    // more than twice as often as "never married" does, and "divorced" and
    // "widowed" are much more rare outputs
  ```

  Where keys (object properties) should be strings (if they are not valid identifiers wrap them in quotes) and values should be integers. In this example they sum up into 100, but it isn't necessary, any numbers would do, as long as they are integers.

  Good case I had was when I had an object of cities and towns of my country with corresponding populations like ```{Kyiv: 2709000, Kharkiv: 146000, Dnipro: 1050000, ... and other 507 of them }``` and I needed to generate random origin of mock-user with realistic probability.


### Example group X - GROUP_NAME:

  Text before example

  ```js
    > rnd
    // ""  - random something like that
  ```

  Text after example

  Text before example

  ```js
    > rnd
    // ""  - random something like that
  ```

  Text after example

  Text before example

  ```js
    > rnd
    // ""  - random something like that
  ```

  Text after example


### Example group X - GROUP_NAME:

  Text before example

  ```js
    > rnd
    // ""  - random something like that
  ```

  Text after example

  Text before example

  ```js
    > rnd
    // ""  - random something like that
  ```

  Text after example

  Text before example

  ```js
    > rnd
    // ""  - random something like that
  ```

  Text after example


### Example group X - GROUP_NAME:

  Text before example

  ```js
    > rnd
    // ""  - random something like that
  ```

  Text after example

  Text before example

  ```js
    > rnd
    // ""  - random something like that
  ```

  Text after example

  Text before example

  ```js
    > rnd
    // ""  - random something like that
  ```

  Text after example


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
