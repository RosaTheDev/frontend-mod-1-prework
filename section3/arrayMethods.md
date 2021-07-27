- converting arrays to strings
    - .toString()
  const fruits =["Banana", "Orange", "Apple", "Mango"];
  decument.getElementById("demo").innerHTML = fruits.toString();

      - result
          Banana,Orange,Apple,Mango

- joining all array elements into a strings
  - behaves just like toString(), but you can specify the separator

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo").innerHTML = fruits.join(" * ");

      - result
          Banana * Orange * Apple * Mango

- Popping and Pushing
  - remove elements and add new elements
      - popping items out of an array
      - pushing items into an array

- Popping
  - pop() removes the last element from an array
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let x = fruits.pop() // Removes "Mango" from fruits

    - result
    // fruits = ["Banana", "Orange", "Apple"];
      x = "Mango"
    **Returns the value that was popped out**

- Pushing
  - push() method add a new element to an array (at the end)

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi");   // Adds "Kiwi" to fruits

    - result
     fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
      let x = fruits.push("Kiwi");   //  x = 5
      **Returns the new array length**

- Shifting Elements
  - Shifting is equivalent to popping, working on the first element instead of the last
  - shift() method removes the first array element and "shifts" all other elements to a lower index

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();   // Removes "Banana" from fruits

    - result
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
      let x = fruits.shift();    // x = "Banana"
    **Returns the value that was "shifted out"**
