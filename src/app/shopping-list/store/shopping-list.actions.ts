import { Action, createAction, props } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

const ADD_INGREDIENT = "ADD_INGREDIENT";
const ADD_INGREDIENTS = "ADD_INGREDIENTS";
const UPDATE_INGREDIENT = "UPDATE_INGREDIENT";
const DELETE_INGREDIENT = "DELETE_INGREDIENT";
const START_EDIT = "START_EDIT";
const STOP_EDIT = "STOP_EDIT";

// export class AddIngredient implements Action {
//   readonly type: string = ADD_INGREDIENT;

//   constructor(public payload: Ingredient) {}
// }

// export class AddIngredients implements Action {
//   readonly type: string = ADD_INGREDIENTS;

//   constructor(public payload: Ingredient[]) {}
// }

// export class UpdateIngredient implements Action {
//   readonly type: string = UPDATE_INGREDIENT;

//   constructor(public payload: { index: number; ingredient: Ingredient }) {}
// }

// export class DeleteIngredient implements Action {
//   readonly type: string = DELETE_INGREDIENT;

//   constructor(public payload: number) {}
// }

// export type ShoppingListActions = {
//   type: string;
//   payload: any;
// };

// export type ShoppingListActions =
//   | AddIngredient
//   | AddIngredients
//   | UpdateIngredient
//   | DeleteIngredient;

export const addIngredient = createAction(
  ADD_INGREDIENT,
  props<{ ingredient: Ingredient }>()
);

export const addIngredients = createAction(
  ADD_INGREDIENTS,
  props<{ ingredients: Ingredient[] }>()
);

export const updateIngredient = createAction(
  UPDATE_INGREDIENT,
  props<{ ingredient: Ingredient }>()
);

export const deleteIngredient = createAction(DELETE_INGREDIENT);

export const startEdit = createAction(START_EDIT, props<{ index: number }>());

export const stopEdit = createAction(STOP_EDIT);
