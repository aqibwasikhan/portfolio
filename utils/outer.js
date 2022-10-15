import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Aqib Khan,',
    decrypTexts: [
        'A Software Engineer',
        'A FrontEnd Developer',
        'I build things for the web',
        // 'A Traveler',
    ],
    desciption: `A dedicated and disciplined Full Stack engineer who love to create things for internet, `,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:aqibwasikhan43@gmail.com?subject=Hello')
    }
}

export default outer
