import { useRef, useState, useEffect } from "react";

// export const UseClickOutside = ref => {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         alert("You clicked outside of me!");
//         return true;
//       }
//     }

//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// };

//import { useClickAway } from "react-use";

/* export const UseClickOutside = () => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    console.log("OUTSIDE CLICKED");
  });
}; */
const UseClickOutside = (visible, setVisible, ref) => {
  //const ref = useRef(null);
  //const [visible, setVisible] = useState(initialValue);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contians(event.target))
      setVisible(!visible);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  //return { visible, setVisible, ref };
};
export default UseClickOutside;
// handleClick() {
//   // attach/remove event handler
//   if (!this.state.showSettings) {
//     document.addEventListener("click", this.handleOutsideClick, false);
//   } else {
//     document.removeEventListener("click", this.handleOutsideClick, false);
//   }

//   /*  this.setState(prevState => ({
//     showSettings: !prevState.showSettings
//   })); */
// }

// handleOutsideClick(e) {
//   // ignore clicks on the component itself
//   /*   alert("hi");
//   if (this.ref.contains(e.target)) {
//     return;
//   } */

//   this.handleClick();
// }
// /*   handleClickOutside() {
//   this.toggle();
// }
// toggle = () => {
//   this.props.setState({ showSettings: !this.state.showSettings });
// };

// useOutsideClick = (ref, callback, visibility) => {
//   const savedCallBack = useRef(callback);

//   useEffect(() => {
//     savedCallBack.current = callback;
//   });
//   function handler(e) {
//     if (ref.current && !ref.current.contians(e.target)) {
//       savedCallBack.current();
//     }
//   }
//   useEffect(() => {
//     if (visibility) {
//       document.addEventListener("click", handler);
//     }
//     return () => {
//       document.removeEventListener("click", handler);
//     };
//   }, [visibility]);
// }; */
