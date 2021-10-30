import React from 'react';


const Test = (prop) => {
    return (
        <div>
            <p>Test</p>

            <button onClick={e=> prop.change("come from test")}>Test</button>
        </div>
      );
}
 
export default Test;



   {/* <select className="Slink" onClick={() => CategorySelect("e.target.value")}>
//         <option className="listsearch" value="move" disabled>
//           Move to...
//         </option>
//         <option className="listsearch" value="currentlyReading">
//           Currently Reading
//         </option>
//         <option className="listsearch" value="wantToRead">
//           Want to Read
//         </option>
//         <option className="listsearch" value="read">
//           Read
//         </option>
//         <option className="listsearch" value="none">
//           None
//         </option>
//       </select> */}
//     </div>