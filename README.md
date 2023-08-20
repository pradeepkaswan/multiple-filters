# Multiple Filters

Given a list of products and a list of filters, create a multi-filters buttons bar with a list of filters. If any of the filter is clicked, the list of products should change and reflect the appropriate products.

![Demo](https://res.cloudinary.com/algochurn/image/upload/v1677225042/assets/ezgifcomvideotogifgif-f88d6f4739.gif)

## User Stories

1. Create a ```<Solution />``` component that takes care of the entire page, including filters bar and products list.
2. When a ```button``` or a ```filter``` is clicked, the products should change. For example, if ```Bags``` are clicked, the products list should only show products that have a category of Bags.
3. When an already selected filter is clicked, it should remove the clicked filtered from the list of active filters.
4. There can be more than 1 filter at a time.
5. Selected filteres should have a different background color.
6. If no filters are selected, it should render out all the products which are provided in the ```items``` array.

Given to you are:

1. ```items``` file that has products with ```name``` and ```category``` attributes.
2. ```filters``` file with an array of all the filter button texts.

```json
name: string
category: string
```

Important
For the test cases to pass, keep in mind the following points.

1. Every filter button should have a ```data-testid``` attribute which corresponds to the specific button. For example: ```Bags``` button should have a ```data-testid="Bags-button"``` attribute. ALL THE TEXT IS CASE SENSITIVE.
2. Filter buttons should be wrapped in a ```buttons-container``` component.
3. Every product item should have a ```data-testid``` attribute which is the name of the product itself. For example: ```Prada``` product should have a ```data-testid="Prada"``` for the test case to run and pass.
