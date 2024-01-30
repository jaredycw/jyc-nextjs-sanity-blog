const myCodeField = {
      type: 'code',
      name: 'myCodeField',
      title: 'My Code Field',
      description: 'Code with all options',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'Javascript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'Python', value: 'python'},
        ],
        withFilename: true,
        highlightedLines: true,
      },
    

}
export default myCodeField;

 