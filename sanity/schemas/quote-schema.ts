import {BlockquoteIcon} from '@sanity/icons'

const industry = {

    name: 'quote',
    title: 'Quote',
    type: 'document',
    icon: BlockquoteIcon,
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