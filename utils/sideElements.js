import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/aqibwasikhan',
        'instagram': 'https://www.instagram.com/its_aqib_khan_yousufzaii/',
        'twitter': 'https://twitter.com/its_aqib_khan',
        'linkedin': 'https://www.linkedin.com/in/aqib-khan-0539b3196/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'aqibwasikhan43@gmail.com',
        onClick: () => openLink('mailto:aqibwasikhan43@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements