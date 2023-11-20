import {url} from './url';

const imageUrl = (imp) => {
    return imp.map((item) => {
        return {
            ...item,
            image: url + item.image
        }
    })
}

export default imageUrl;