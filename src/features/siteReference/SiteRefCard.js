

const SiteRefCard = ({ reference }) => {

    const { name, link, linkText, message } = reference;

    return (

        <>
            <p>
                {name}
            </p>
            <p>
                {message}
            </p>
            Source Link<a href={link}  target="_blank" rel="noreferrer">{linkText}</a>
        </>
    )
};

export default SiteRefCard;