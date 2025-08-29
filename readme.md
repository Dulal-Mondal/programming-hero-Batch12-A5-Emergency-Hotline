
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

  Answer:getElementById(id): Selects a single element by its unique id attribute.
  Returns a single Element object or null if no element with the specified ID is found.As "id" is unique in the overall document, so it will select a specific element. In example : 
  <!-- <h1 id="title">Hello</h1> -->
  Then, document.getElementById("title") .


  getElementsByClassName(className): Selects all elements that share a specific class name.Returns a "live" HTML Collection of elements.
  If we select elements by the class name, we dont get single element rather than we get a list of elements.In example : 
  <!-- <p class="text">One</p>
  <p class="text">Two</p> -->
  Then document.getElementsByClassName("text").


  querySelector(selector): Selects the first element that matches a given CSS selector such as #id, .class, tag, attribute or combinations.Returns a single Element object or null.Example:
     " <h1 id="title">Welcome</h1>
      <p class="text">This is the first paragraph.</p>
      <p class="text">This is the second paragraph.</p>"

      document.querySelector(".text");


  querySelectorAll(selector): It is almost same as querySelector but the main difference between them is that querySelector gives only the first matching element and querySelectorAll gives all matching elements as an nodeList. Example :
      <!-- <h1 id="title">Welcome</h1>
      <p class="text">This is the first paragraph.</p>
      <p class="text">This is the second paragraph.</p> -->
      
      document.querySelectorAll(".text");

2. How do you **create and insert a new element into the DOM**?

  Answer:The document.createElement()  method is used to create a new HTML            element.

  const  newElement = document.createElement('p');


  Then, get the patent element to add the new element
        
  const  parentElement = document.getElementById('container');   

  Then, add the new element as a child of 'container'  

  parentElement.appendChild(newElement);   

3. What is **Event Bubbling** and how does it work?
   Answer: Event bubbling is a JavaScript mechanism where an event, like a click,   triggers on a child element and then propagates upwards through its parent elements and all the way to the document root.

    How Event Bubbling Works:

    1. Event Trigger:
    An event as a click, occurs on a specific target element within the Document Object Model. 

    2. Target Phase:
    The event listener on the target element itself is triggered first. 

    3. Bubbling Phase:
    The event then "bubbles" up from the target element to its immediate parent. 

    4. Ancestor Propagation:
    If the parent element also has an event listener for that event, it gets triggered. 

    5. Up the Hierarchy:
    The event continues to bubble up through each subsequent parent, grandparent, and so on, until it reaches the outermost element of the  Document Object Model, or is explicitly stopped. 

4. What is **Event Delegation** in JavaScript? Why is it useful?

    Answer: Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

    Usefulness:
    Improved Performance:
    Reduces the number of event listeners attached to the DOM.

    Simplified Code:
    Centralizes event handling logic, making the code cleaner, more organized, and easier to maintain.

    Handles Dynamic Content:
    Automatically works for elements added to the DOM after the initial page load.

    Reduced Complexity:
    Avoids the potential pitfalls of managing numerous individual event listeners, especially when elements are frequently added or removed from the DOM.

5. What is the difference between **preventDefault() and stopPropagation()** methods?


    Answer:preventDefault() and stopPropagation() are two distinct methods of the Event interface in the Document Object Model, both used to control event behavior, but serving different purposes.

    event.preventDefault():
    This method prevents the default action associated with an event from occurring.

    event.stopPropagation():
    This method prevents the event from propagating further through the DOM hierarchy. Events typically follow a "bubbling" or "capturing" phase, where they travel up or down the DOM tree. 





