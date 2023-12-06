

const SiteRefCard = ({ references }) => {

    const { id, name, link, linkText, message } = references;

    return (

    <a href={link}  target="_blank" rel="noreferrer">{name}{message}{linkText}</a>
      
    )
};

export default SiteRefCard;