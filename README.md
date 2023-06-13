# React Form Builder
In progress...
[Demo link](https://serhii-shvaher.github.io/React-Form-Builder)

To run project
`npm start`


To build project
`npm run build`



### Store structure
```javascript
{
    adminPanel: {
        selectedPageIndex: 0,
        product: {}
    },
    products: [{
        id: 'm7',
        name: 'Product name',
        pages: {
            title: 'Title',
            elements: [{
                type: 'textarea',
                title: '<strong>Hello</strong>',
                placeholder: 'yes'
            }]
        }
    }]
}
```
