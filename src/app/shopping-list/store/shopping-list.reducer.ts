import { createReducer, on } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

export interface AppState {
  shoppingList: State;
}
const initialState: State = {
  ingredients: [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export const shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListActions.addIngredient, (state, action) => ({
    ...state,
    ingredients: [...state.ingredients, action.ingredient],
  })),

  on(ShoppingListActions.addIngredients, (state, action) => ({
    ...state,
    ingredients: [...state.ingredients, ...action.ingredients],
  })),

  on(ShoppingListActions.updateIngredient, (state, action) => {
    const ingredient = state.ingredients[state.editedIngredientIndex];
    const updateIngredient = {
      ...ingredient,
      ...action.ingredient,
    };
    const updateIngredients = [...state.ingredients];
    updateIngredients[state.editedIngredientIndex] = updateIngredient;

    return {
      ...state,
      ingredients: updateIngredients,
      editedIngredient: null,
      editedIngredientIndex: -1,
    };
  }),

  on(ShoppingListActions.deleteIngredient, (state, action) => ({
    ...state,
    ingredients: state.ingredients.filter(
      (ig, index) => index !== state.editedIngredientIndex
    ),
  })),

  on(ShoppingListActions.startEdit, (state, action) => ({
    ...state,
    editedIngredientIndex: action.index,
    editedIngredient: { ...state.ingredients[action.index] },
  })),

  on(ShoppingListActions.stopEdit, (state, action) => ({
    ...state,
    editedIngredient: null,
    editedIngredientIndex: -1,
  }))
);

// export function shoppingListReducerold(
//   state = initialState,
//   action: shoppingListActions.ShoppingListActions
// ) {
//   switch (action.type) {
//     case shoppingListActions.ADD_INGREDIENT:
//       return {
//         ...state,
//         ingredients: [...state.ingredients, action.payload],
//       };

//     case shoppingListActions.ADD_INGREDIENTS:
//       const payload = action.payload as Ingredient[];
//       return {
//         ...state,
//         ingredients: [...state.ingredients, ...payload],
//       };

//     case shoppingListActions.UPDATE_INGREDIENT:
//       const payload = action.payload as
//       const ingredient = state.ingredients[action.payload.index];

//       return {
//         ...state,
//         ingredients: [],
//       };

//     default:
//       return state;
//   }
// }
