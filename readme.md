
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Ans:** <br>
**getElementById** : When we want to find one element, we use getElementById. It returns a single element<br>
**getElementsByClassName** : When we want to find all the matching elements whom we give the same class name, we use getElementsByClassName. It returns a HTMLCollection.<br>
**querySelector** : When we want to select the first matching element by an Id or a ClassName, we use querySelector. It returns a single element.<br>
**querySelectorAll** : When we want to select the all matching element, we use querySelectorAll. It returns a NodeList.<br>


2. How do you **create and insert a new element into the DOM**?<br>

**Ans:** <br>
**Create a new element** : To create a new element I use **document.createElement()**. In the first bracket I put the name of the element that I want to create.<br>
**Insert a new element** : To insert a new element into the DOM I use **parentDiv.appendChild()** Here parentDiv is the element where I put a new element and in the first bracket I put the child element name.<br>

3. What is **Event Bubbling** and how does it work?<br>
**Ans:**<br>
When an events happen on an element, it first runs handlers on that elements. Then it bubble up to it's parent element, then bubble up to parent's parent.<br>

4. What is **Event Delegation** in JavaScript? Why is it useful?<br>
**Ans:**<br>
Event delegation is a design pattern in JavaScript used to efficiently manage and handle events on multiple child elements by attaching a single event listener to a common ancestor element. It is useful because instead of using multiple listeners, we use just one..<br>

5. What is the difference between **preventDefault() and stopPropagation()** methods?<br>
**Ans:** <br>
**preventDefault()** : Stops the default browser action.<br>
**stopPropagation()** : Stops the event from bubbling up.<br>

