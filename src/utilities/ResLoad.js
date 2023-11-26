import { lazy } from "react"

function time(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
};

const Res = lazy(() =>
    import("../utilities/Res").then(module => {
        return { default: module.Res }
    })
)

const Resload = () => {

    return (<>
        <button
            onClick={() => {
                <Res/>
            }}>Click for Resume</button>
    </>)

}


export default Resload;
