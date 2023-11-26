

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

            }}></button>
    </>)

}


export default Resload;
