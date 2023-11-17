import {TagsIcon} from '@sanity/icons'

const industry = {

    name: 'industry',
    title: 'Industry',
    type: 'document',
    icon: TagsIcon,
    fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        }
 
    ]
}

export default industry;