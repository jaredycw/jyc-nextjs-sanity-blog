import {TagsIcon} from '@sanity/icons'

const skill = {

    name: 'skill',
    title: 'Skill',
    type: 'document',
    icon: TagsIcon,
    fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        }
    ]
}

export default skill;