// 1. create context
import { createContext, useState } from "react";

//2. create a context object - with method s and variable it will use - exported since we will use it somewher else
export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

// 3. we can create a functional component in the context file
// the component or provider will be warrped around any component that needs to
// interact with this context
function FavoritesContextProvider({ children }) {
  //4. the actual implementation of the above context object will be here
  // that will manage all the variables and methods in the context object

  //create state to manege the meals id
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    // filter out the one not needed
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  // then pass our data/state into the context provider
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// 5. export
export default FavoritesContextProvider;
