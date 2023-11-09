import {PresentationIcon} from '@sanity/icons'

const course = {

    name: 'course',
    title: 'Course',
    type: 'document',
    icon: PresentationIcon,
    fields: [
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'cover',
            title: 'Cover',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields:[
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        }
    ]
};

export default course;
