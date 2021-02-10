export const fetchRecipe = () => {
 return  fetch("https://test-es.edamam.com/search?q=chicken")
    .then((response) => response)
};
