
function time(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
};