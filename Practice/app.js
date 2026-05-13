
// 
//     <div>
//         <div>
//             <h1>

//             </h1>
//         </div>
//     </div>
// 

 const parent = React.createElement(
    "div", {id : "parent"}, 
     React.createElement("div", {}, 
        React.createElement("div", {}, 
            [React.createElement("h1", { id : "h1"}, ("This is h1")),
            React.createElement("h2", { id : "h2"}, "This is h2")])
        )
     );

     const root = ReactDOM.createRoot(document.getElementById("root"));

     root.render(parent)

    // const heading = React.createElement("h1", {}, "This is heading");

    // const root = ReactDOM.createRoot(document.getElementById("root"));

    // root.render(heading);