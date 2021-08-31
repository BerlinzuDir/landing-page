import React from 'react'

import {InfoElementWithIconHorrizontal} from ".";

export default {
    title: 'Components/InfoElementWithIconHorrizontal',
    component: InfoElementWithIconHorrizontal,
}

const Template = (args) => <InfoElementWithIconHorrizontal {...args} />

export const Default = Template.bind({})
Default.args = {
    image: '/icons/icon_bycicle.png',
    title: 'Für Geschäfte',
    description: 'Wir helfen Ihnen, Ihre Produkte über unseren Online-Marktplatz zu verkaufen. \n * Unser Marktplatz ist exclusiv für lokale Läden und Produzenten. \n * Wir helfen beim Einstellen der Produkte. \n * Falls verfügbar, auch automatisch per Schnittstelle. \n * Bestellungen werden einmal am Tag zur festen Zeit abgeholt.'
}