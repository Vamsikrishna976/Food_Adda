
// 
//     <div>
//         <div>
//             <h1>

//             </h1>
//         </div>
//     </div>
// 

 

let heading;
heading = React.createElement("div",{},
    React.createElement("div",{},
        [React.createElement("div",{},
            [React.createElement("h1", {}, "This is h1"),
                React.createElement("h2", {}, "This is h2")]
        ),
        React.createElement("div",{},
            [React.createElement("h1", {}, "This is h1"),
                React.createElement("h2", {}, "This is h2")]
        )]
    )
);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)