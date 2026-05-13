// const heading = document.createElement("h1");
// heading.innerHTML="ReactDay1"
// heading.style.backgroundColor="red"
// heading.style.color="blue"

// const root = document.getElementById("root1")
// root.appendChild(heading)

// const para = document.createElement("p");
// para.innerHTML="This is paragraph"

// root.appendChild(para)


// <div>
//     <Div>
//         <h1>

//         </h1>
//     </Div>
// </div>


// Here it creates a div element with id "parent" and inside 
// it creates two child divs with id "child". 
// Each child div contains an h1 and h2 tag with some text. 
// Finally, it renders the parent div to the root element in the HTML document.

import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div", { id: "child" , key : "child1"},
        [React.createElement("h1", {key : "h1"}, "iam h1 tag react 1"),
        React.createElement("h2", {key : "h2"}, "iam h2 tag")]),
    React.createElement(
        "div", { id: "child1" , key : "child2"},
        [React.createElement("h1", {key : "h3"}, "iam h1 tag"),
        React.createElement("h2", {key : "h4"}, "iam h2 tag")])
    ]);

// const heading = React.createElement("h1", {}, "This is day 1 of react");
const root = ReactDOM.createRoot(document.getElementById("root1"));
// console.log(heading);

root.render(parent)
