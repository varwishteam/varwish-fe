import { create, getAll, getOne, update, remove } from './crudActionCreators';
import { WISHLIST, CATEGORY, ITEM } from './crudActions';

export { WISHLIST, CATEGORY, ITEM } from './crudActions';
export const ACTIONS = {
  WISHLIST,
  CATEGORY,
  ITEM,
};

export * from './userActions';
export * from './userActionCreators';
export * from './modalActions';
export * from './itemActionCreators';

export const createWishlist = data => create('WISHLIST', data);
export const getWishlist = data => getOne('WISHLIST', data);
export const getAllWishlists = () => getAll('WISHLIST');
export const updateWishlist = data => update('WISHLIST', data);
export const deleteWishlist = data => remove('WISHLIST', data);

export const createCategory = data => create('CATEGORY', data);
export const getCategory = data => getOne('CATEGORY', data);
export const getAllCategories = () => getAll('CATEGORY');
export const updateCategory = data => update('CATEGORY', data);
export const deleteCategory = data => remove('CATEGORY', data);

export const createItem = data => create('ITEM', data);
export const updateItem = data => update('ITEM', data);
export const deleteItem = data => remove('ITEM', data);
