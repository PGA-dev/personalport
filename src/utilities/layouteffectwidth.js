import { useRef, useState, useLayoutEffect } from "react";



export default function width({projects}) {
const ref = useRef(null);
const [width, setwidth] = useState(0);

useLayoutEffect(() => {
    setwidth(ref.projects.current.offsetWidth);
}, [projects]);

return width

};

