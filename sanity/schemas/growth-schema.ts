import {PresentationIcon} from '@sanity/icons'

const growth = {

    name: 'growth',
    title: 'Growth',
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
            title: 'Course Title',
            description: 'Courses / Programmes / Degree Name',
            type: 'string'
        },
        {
            name: 'institution',
            title: 'Institution',
            type: 'string'
        },    
        {
            name: 'completedOn',
            title: 'Completed On',
            type: 'date',
            options: {
                dateFormat: 'DD MMMM, YYYY',
            }
        },
        {
            name: 'logo',
            title: 'Logo',
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
        },
        {
            name: 'externalLogo',
            title: 'External Logo',
            type: 'string'
        },
        {
            name: 'externalLogoAlt',
            title: 'External Logo Alt',
            type: 'string',
        }
    ]
};

export default growth;
