import { useRef, useState, useEffect } from "react";

export const UseClickOutside = initialValue => {
  const ref = useRef();
  const [visible, setVisible] = useState(initialValue);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contians(event.target)) setVisible(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  return { visible, setVisible, ref };
};

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
