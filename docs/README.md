# Documentation

Welcome to the documentation for this project!

## Survivor Application

The Survivor Application is essentially an HTML `<form>` built with React. If you haven't made forms with React, or haven't used React, please read through their docs, <a href="https://reactjs.org/docs/forms.html">particularly this section which describes how React handles forms</a>.

Currently (August 13, 2019), the Survivor Application data flow is as follows (there are some exceptions which are discussed below):


1. User inputs data to `form` element and `onChange` event fires
2. For the majority of elements, `handleChange` (<a href="https://github.com/vishalbakshi/CallForCode/blob/master/src/components/WildfireSurvivorApp/index.js#L25">`components/WildfireSurvivorApp/index.js`</a>) adds the key-value pair `[event.target.name]: event.target.value` to a copy of the previous `state`
3. `localStorage.setItem()` and `setState()` are called. `setState` causes page to re-render.
4. `useState` is called, which uses either the initial state of `localStorage.getItem()` to populate `state` 
5. Since each `form` elements' `value` is set to `state[field_name]` the updated value is displayed on the page

### Codepen Examples

My intention is not to provide these codepens as examples of "best practices" in an absolute or objective way (although I've tried!) but rather to provide these as codepens to illustrate how I have understood problem and how I've implemented my solution. If something looks off/wrong/inefficient, it very well might be so please open a PR with any appropriate edits. Also if you know of an easy way to embed codepens into this markdown, PR for that as well.

- <a href="https://codepen.io/vishalbakshi/pen/ZEzQaOE?editors=1010">Text Input React Form Example</a>
  - This represents how WSMS handles inputs to the majority of form elements. Please open your browser's developer tools to watch local storage update.

- <a href="#">Dynamically Generated Input Elements</a>
   - Two categories of fields (i.e. fieldsets) in WSMS require the ability to add form elements dynamically: Household Members and Case Managers. This pen shows you how I've implemented that feature.
   
   
