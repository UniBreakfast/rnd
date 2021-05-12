# rnd

The ```rnd(...)``` is the one function for multiple cases/situations I needed a solution for to get the appropriate random values or arrays of them.

## Table of Contents:

  * [Installation](#installation)
  * [Usage](#usage)
    * [shorthand for Math.random()](#example-0---mathrandom-shorthand)

    1. [random integer](#example-group-1---integers)
    1. [random character from a range](#example-group-2---characters)
    1. [random date](#example-group-3---dates)
    1. [random array element](#example-group-4---array-elements)
    1. [random object key by weight](#example-group-5---object-property-names)
    1. [random true/false by percentage](#example-group-6---boolean-with-probability)
    1. [predictably altered random](#example-group-7---predictably-altered-probability)
    1. [arrays of random results](#example-group-8---make-arrays-of-results)
    1. [preformatted dates](#example-group-9---preformatted-dates)
  * [Contributing](#contributing)
  * [Credits](#credits)
  * [License](#license)


## Installation:

Take **```rnd.js```** and put it in your project's folder and add a

```<script src="rnd.js">```

to your html if it suits you.
Or you may include it from github directly with

```<script src="https://raw.githubusercontent.com/UniBreakfast/rnd/master/rnd.js">```

And do the same for ```rndneeds.js``` if you're planning to use ```rnd(...)``` for dates or generation of arrays of random values at one go.

And if you fancy import you probably don't need instructions to **```import```** a one-function js-file.


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

  This one is good to randomly choose one of the multitude of string values with probability weights. So in order to do that you need an object like that

  ```js
    > statuses = {"never married": 26, married: 58, divorced: 10, widowed: 6}
    > rnd(statuses)
    // "never married"  - random something like that
    // but if you run it multiple times, you'll see that "married" is returned
    // more than twice as often as "never married" does, and "divorced" and
    // "widowed" are much more rare outputs
  ```

  Where keys (object properties) should be strings (if they are not valid identifiers wrap them in quotes) and values should be integers. In this example they sum up into 100, but it isn't necessary, any numbers would do, as long as they are integers.

  Good case I had was with an object with cities and towns of my country as keys and corresponding population as values like this ```{Kyiv: 2709000, Kharkiv: 146000, Dnipro: 1050000, ... and other 507 of them }``` and I needed to generate random origin of mock-user with realistic probability.


### Example group 6 - Boolean with probability:

  If you need a random simple answer Yes or No (true/false, 1 or 0) you can pass the desired probability percentage as a parameter like that

  ```js
    > rnd(85,'%')
    // 1  - randomly 0 (falsy) or 1 (truthy)
  ```

  or like that

  ```js
    > rnd('14%')
    // 0  - randomly 0 (falsy) or 1 (truthy)
  ```

  Another hacky way to get random truthy or falsy value with desired probability would be just

  ```js
    > rnd(4)
    // 2  - random integer from 0 to 3
  ```

  which for this use-case would simply mean "falsy 1 time out of 4" or the same as ```rnd('75%')```

  Or, for example,

  ```js
    > !rnd(10000)
    // false  - inverted boolean from random integer from 0 to 9999
  ```

  which for this use-case would simply mean "truthy 1 time out of 10000" or the same as 0,01% probability of success. And trust me, it would give the true as a result just around hundred times in a million.


### Example group 7 - Predictably altered probability:

  If you need to "tilt" the probability towards the lower or higher numbers use 'lower' or 'higher' as a second parameter

  ```js
    > rnd(100, 'higher')
    // 93  - random integer with a chance of being produced linearly increasing
    //        from 0 to 99
  ```

  You can also 'tilt' the randomness when you ask for a random array item

  ```js
    > animals = ['mouse', 'rat', 'cat', 'dog', 'wolf', 'bear', 'tiger']
    > rnd(animals, 'lower')
    // "rat"  - random array element but the chance is linearly decreasing
    //           towards the end of the list
  ```

  You may use the 'center' or 'average' as well if you need to alter the probability towards the middle linearly or quadratically respectively.

  You may also use the same four words ('lower', 'center', 'higher' or 'average') as a third parameter if you need to specify the range from one number to another

  ```js
    > rnd(11, 34, 'center')
    // 21  - random integer between 11 and 34 with a chance of being produced
    //        linearly increasing towards the middle of the range
  ```


### Example group 8 - Make arrays of results:

  In many cases you may get an array of random results simply by adding an argument - integer that would be the length of the results array like that

  ```js
    > rnd(Date, 4)
    // ["1977-12-13 00:40:26", "2015-04-24 23:30:42",
    //  "1984-07-14 09:36:42", "1992-11-20 14:15:17"] - 4 random dates
  ```

  or

  ```js
    > rnd('ഒ-ഹ', 20)
    // ["ഘ", "ഞ", "മ", "ര", "ഩ", "ബ", "ഓ", "ഞ", "ഒ", "ഥ", "ത", "ഩ",
    //  "ദ", "ച", "ള", "ധ", "ഭ", "ഴ", "ദ", "ല"]  - 20 random Malayan characters
  ```

  or

  ```js
    > names = ['Jacob', 'Jace', 'Jamal', 'Jennifer', 'Jasmine', 'Julia']
    > surnames = ['Jackson', 'Jenkins', 'Jefferson', 'Juarez', 'Jensen']
    > rnd(names, surnames, 6)
    // ["Jacob Jefferson", "Jace Juarez", "Jasmine Jensen",
    //  "Jacob Juarez", "Jasmine Jenkins", "Jacob Jenkins"]  - 6 random pairs
  ```

  or

  ```js
    > rnd({a:15, b:7, c:3, d:1}, rnd(20))
    // ["d", "b", "a", "a", "c", "b", "b", "a", "b", "a", "a", "b", "a", "a",
    //  "a", "a", "a", "c"]  - 18 random letters with desired frequency
  ```

  And if you need to use a combination of parameters that doesn't produce the array of results when a number argument added last, use the bonus ```makeArr(length, fn)``` function for that

  ```js
    > makeArr( 10000, ()=> rnd(-25, 25, 'average') )
    // "[13, 18, 21, 1, 16, -6, 0, 22, -23, 16, -13, -3, 2, 10, 3, 16, -14, 9,
    //  -11, -18, -15, -10, 9, 3, 0, 17, 6, 21, -16, -17, 3, 16, -12, 20, 11, 7,
    //  7, -5, 5, 7, -9, 5, 4, -9, -23, 15, -6, 10, -5, -10, 23, -20, 9, 23, 15,
    //  12, 4, 8, 8, 25, -15, 6, -2, -6, 16, -19, 12, 3, 9, 11, -10, -15, 19, 3,
    //  -20, 12, -23, 14, -24, 11, 10, 23, -15, 17, 15, -10, 9, -19, 5, -15, 9,
    //  -12, -6, -24, 25, 10, 8, 22, 9, 10, ...]"  - ten thousands of random
    //  integers between -25 and 25 with the higher probability of producing
    //  numbers that are closer to the average - zero
  ```

  This particular example produces the array of numbers with a frequency spread like that
  ![number of results grouped and counted by value](https://raw.githubusercontent.com/UniBreakfast/rnd/master/Graph01.PNG)

  Of course you can use that ```makeArr(length, fn)``` function to produce arrays of values made by any function, not just as simple as shown above.


### Example group 9 - Preformatted dates:

  If you need to produce a non-specific random date with a certain format you may use the format string as a single argument

  ```js
    > rnd('the Month DDth, year YYYY')
    // "the August 16th, year 2007" - something like that
  ```

  or

  ```js
    > rnd('month DD, HH:MM')
    // "Oct 23, 13:10" - something like that
  ```

  And if you need to get the formatted datetime string with other ```rnd(...)``` calls you can use another bonus function ```formatDatetime(datetime, format)``` like that

  ```js
    > formatDatetime( rnd(new Date("1997-10"), new Date("2001-10")),
                      'DD.MM.YYYY')
    // "27.08.2000" - something like that
  ```

  The supported formatting tokens are:

  * YYYY  - 4-digit year like 1962
  * YY    - 2-digit year like 99
  * MM    - 2-digit month like 12
  * Month - month name like January
  * month - short month name like Feb
  * DD    - 2-digit date like 08
  * DDth  - up to 2digit date like 7th, 21st etc
  * HH, MM, SS - 2-digit hours, minutes and seconds


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
