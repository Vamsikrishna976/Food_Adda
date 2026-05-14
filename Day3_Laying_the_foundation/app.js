import React from "react";
import ReactDOM from "react-dom/client" 

//                                                JSX
// using jsx
// 1. create a variable and assign jsx to it
// 2. create a root using ReactDOM.createRoot and pass the root element to it
// 3. use the render method to render the jsx variable

const jsxheading = (<h1>this is jsx</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading)

//                                          Funtional Based Component
// using functional component
// 1. create a functional component and return jsx from it
// 2. create a root using ReactDOM.createRoot and pass the root element to it
// 3. use the render method to render the functional component
// using functional component
// using functional component with return keyword
// using functional component with implicit return and without return keyword

// using functional component
const Heading = () => {
    return (<h1>This is functional h1</h1>);
}

// using functional component with implicit return
const Heading1 = () => {
    return <h1>This is functional h1</h1>;
}

// using functional component with implicit return and without return keyword
const Heading2 = () => <h1>This is functional h1</h1>;   

const HeadingComponent = () => (<h1>This is functional h1</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


// component composition
// using functional component with another functional component
// <title/>
//{title()}
// <Title></Title>
// Above are the same thing, we can use any of the above to call the functional component

const Title = () => (<h1>this is jsx</h1>);

const Heading = () => 
    (<div>
        <Title/>
        <h2>This is functional h1</h2>
        </div>
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
