# [Catching Car Mileage Numbers](https://www.codewars.com/kata/52c4dd683bfd3b434c000292)
## By [OverZealous](https://www.codewars.com/users/OverZealous)
![badge](https://www.codewars.com/users/csantosr/badges/small)
<hr/>
> "7777...*8?!??!*", exclaimed Bob, "I missed it again!  Argh!"  Every time there's an interesting number coming up, he notices and then promptly forgets.  Who *doesn't* like catching those one-off interesting mileage numbers?

Let's make it so Bob **never** misses another interesting number.  We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers.  We've got a box glued to his dash that lights up yellow or green depending on whether it receives a `1` or a `2` (respectively).

It's up to you, intrepid warrior, to glue the parts together.  Write the function that parses the mileage number input, and returns a `2` if the number is "interesting" (see below), a `1` if an interesting number occurs within the next two miles, or a `0` if the number is not interesting.

**Note:** In Haskell, we use `No`, `Almost` and `Yes` instead of `0`, `1` and `2`.

## "Interesting" Numbers


Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

```if-not:ruby,python
* Any digit followed by all zeros: `100`, `90000`
* Every digit is the same number: `1111`
* The digits are sequential, incementing<sup>†</sup>: `1234`
* The digits are sequential, decrementing<sup>‡</sup>: `4321`
* The digits are a palindrome: `1221` or `73837`
* The digits match one of the values in the `awesomePhrases` array
```
```if:ruby,python
* Any digit followed by all zeros: `100`, `90000`
* Every digit is the same number: `1111`
* The digits are sequential, incementing<sup>†</sup>: `1234`
* The digits are sequential, decrementing<sup>‡</sup>: `4321`
* The digits are a palindrome: `1221` or `73837`
* The digits match one of the values in the `awesome_phrases` array
```

> <sup>†</sup> For incrementing sequences, `0` should come after `9`, and not before  `1`, as in `7890`.<br>
> <sup>‡</sup> For decrementing sequences, `0` should come after `1`, and not before  `9`, as in `3210`.

So, you should expect these inputs and outputs:

```javascript
// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
```
```haskell
-- "boring" numbers
isInteresting 3     [1337, 256] -- 0
isInteresting 3236  [1337, 256] -- 0

-- progress as we near an "interesting" number
isInteresting 11207  [] -- No 
isInteresting 11208  [] -- No 
isInteresting 11209  [] -- Almost
isInteresting 11210  [] -- Almost
isInteresting 11211  [] -- Yes

-- nearing a provided "awesome phrase"
isInteresting 1335  [1337, 256] -- Almost
isInteresting 1336  [1337, 256] -- Almost
isInteresting 1337  [1337, 256] -- Yes
```
```coffeescript
# "boring" numbers
isInteresting(3, [1337, 256])    # 0
isInteresting(3236, [1337, 256]) # 0

# progress as we near an "interesting" number
isInteresting(11207, []) # 0
isInteresting(11208, []) # 0
isInteresting(11209, []) # 1
isInteresting(11210, []) # 1
isInteresting(11211, []) # 2

# nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]) # 1
isInteresting(1336, [1337, 256]) # 1
isInteresting(1337, [1337, 256]) # 2
```
```java
// "boring" numbers
CarMileage.isInteresting(3, new int[]{1337, 256});    // 0
CarMileage.isInteresting(3236, new int[]{1337, 256}); // 0

// progress as we near an "interesting" number
CarMileage.isInteresting(11207, new int[]{}); // 0
CarMileage.isInteresting(11208, new int[]{}); // 0
CarMileage.isInteresting(11209, new int[]{}); // 1
CarMileage.isInteresting(11210, new int[]{}); // 1
CarMileage.isInteresting(11211, new int[]{}); // 2

// nearing a provided "awesome phrase"
CarMileage.isInteresting(1335, new int[]{1337, 256}); // 1
CarMileage.isInteresting(1336, new int[]{1337, 256}); // 1
CarMileage.isInteresting(1337, new int[]{1337, 256}); // 2
```
```python
# "boring" numbers
is_interesting(3, [1337, 256])    # 0
is_interesting(3236, [1337, 256]) # 0

# progress as we near an "interesting" number
is_interesting(11207, []) # 0
is_interesting(11208, []) # 0
is_interesting(11209, []) # 1
is_interesting(11210, []) # 1
is_interesting(11211, []) # 2

# nearing a provided "awesome phrase"
is_interesting(1335, [1337, 256]) # 1
is_interesting(1336, [1337, 256]) # 1
is_interesting(1337, [1337, 256]) # 2
```

```ruby
# "boring" numbers
is_interesting(3, [1337, 256])    # 0
is_interesting(3236, [1337, 256]) # 0

# progress as we near an "interesting" number
is_interesting(11207, []) # 0
is_interesting(11208, []) # 0
is_interesting(11209, []) # 1
is_interesting(11210, []) # 1
is_interesting(11211, []) # 2

# nearing a provided "awesome phrase"
is_interesting(1335, [1337, 256]) # 1
is_interesting(1336, [1337, 256]) # 1
is_interesting(1337, [1337, 256]) # 2
```
```csharp
// "boring" numbers
Kata.IsInteresting(3, new List<int>() { 1337, 256 });    // 0
Kata.IsInteresting(3236, new List<int>() { 1337, 256 }); // 0

// progress as we near an "interesting" number
Kata.IsInteresting(11207, new List<int>() { });   // 0
Kata.IsInteresting(11208, new List<int>() { });   // 0
Kata.IsInteresting(11209, new List<int>() { });   // 1
Kata.IsInteresting(11210, new List<int>() { });   // 1
Kata.IsInteresting(11211, new List<int>() { });   // 2

// nearing a provided "awesome phrase"
Kata.IsInteresting(1335, new List<int>() { 1337, 256 });   // 1
Kata.IsInteresting(1336, new List<int>() { 1337, 256 });   // 1
Kata.IsInteresting(1337, new List<int>() { 1337, 256 });   // 2
```
## Error Checking

* A number is only interesting if it is greater than `99`!
* Input will *always* be an integer greater than `0`, and less than `1,000,000,000`. 
* The `awesomePhrases` array will always be provided, and will always be an array, but may be empty.  (Not *everyone* thinks numbers spell funny words...)
* You should only ever output `0`, `1`, or `2`.
