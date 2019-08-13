# Documentation

Welcome to the documentation for this project!

The latest Sketch files for this project are located at the following link: https://sketch.cloud/s/8Az7w

## Survivor Application

The Survivor Application is essentially a set of HTML `form` elements rendered using React. If you haven't made forms with React please read through <a href="https://reactjs.org/docs/forms.html">the article at this link which describes how React handles forms</a>.

Currently (August 13, 2019), the Survivor Application data flow is as follows (there are some exceptions which are discussed below):

1. User inputs data to `form` element and `onChange` event fires
2. For the majority of elements, `handleChange` (<a href="https://github.com/vishalbakshi/CallForCode/blob/master/src/components/WildfireSurvivorApp/index.js#L25">`components/WildfireSurvivorApp/index.js`</a>) adds the key-value pair `[event.target.name]: event.target.value` to a copy of the previous `state`
3. `localStorage.setItem()` and `setState()` are called. `setState` causes page to re-render.
4. `useState` is called, which uses either the initial state of `localStorage.getItem()` to populate `state` 
5. Since each `form` elements' `value` is set to `state[field_name]` the updated value is displayed on the page

### Codepen Examples

My intention is not to provide these codepens as examples of _best practices_ in an absolute or objective way but rather to illustrate how I have understood problem and how I've implemented my solution. Also, it gives you a targeted way to explore alternative solutions.  If something looks off/wrong/inefficient, it very well might be so please open a PR with edits.

- <a href="https://codepen.io/vishalbakshi/pen/ZEzQaOE?editors=1010">Text Input React Form Example</a>
  - This represents how WSMS handles inputs to the majority of form elements. Please open your browser's developer tools to watch local storage update.

- <a href="https://codepen.io/vishalbakshi/pen/RwbrxyX?editors=0010">Dynamically Generated Input Elements</a>
   - Two categories of fields (i.e. fieldsets) in WSMS require the ability to add form elements dynamically: Household Members and Case Managers. This pen shows you how I've implemented that feature.

- <a href="#">Pseudo-Routing</a>
  - Currently, the "routing" implemented in WSMS needs to be replaced with functionality to handle browser functionality (back/forward buttons) with something like <a href="https://reacttraining.com/react-router/">React-Router</a>
  - The current "routing" implementation just toggles the visiblity of each page in the Application (StartPage, PreviewPage, ConfirmationPage)
   
