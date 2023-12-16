import { useRef, useState, useLayoutEffect } from "react";


export default function width() {
const ref = useRef(null);
const [width, setwidth] = useState(0);

useLayoutEffect(() => {
    setwidth(ref.current.offsetWidth);
}, []);

return (
 {width}
);
};