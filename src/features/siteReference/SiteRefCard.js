

const SiteRefCard = ({ references }) => {

    const { id, name, link, linkText, message } = references;

    return (
        <ul>
            <li>
                <a href={link} target="_blank" rel="noreferrer">
                    {linkText}
                </a>
            </li>
            <li>{name}</li>
            <li>{message}</li>
        </ul>
    )
};

export default SiteRefCard;