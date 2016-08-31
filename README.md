# Google Web Payment Demo from Home24

[Demo link](https://sergeyshvager.github.io/React-Form-Builder/#/product/)

To run project
`npm start`


To build project
`npm run build`



###Store structure
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
