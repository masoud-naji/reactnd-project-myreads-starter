import React from 'react';


const ShelfChanger = (prop) => {
    return (
        <div>
            <p>ShelfChanger</p>

            <button onClick={e=> prop.change("come from ShelfChanger")}>ShelfChanger</button>
        </div>
      );
}
 
export default ShelfChanger;



//       {/* <select className="Slink" onClick={() => CategorySelect("e.target.value")}>
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
