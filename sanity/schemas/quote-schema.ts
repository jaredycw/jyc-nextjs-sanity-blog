import {OlistIcon} from '@sanity/icons'

const industry = {

    name: 'quote',
    title: 'Quote',
    type: 'document',
    icon: OlistIcon,
    fields:[
        {
            name: 'blackWording',
            title: 'Black Wording',
            type: 'string',
        },
        {
            name: 'greyWording',
            title: 'Grey Wording',
            type: 'string',
        }
 
    ]
}

export default industry;