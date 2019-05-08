import { ITEM } from '../actions';
import { store } from '../store';

export default function itemsHelper(wishlists) {
  let allItems = [];
  wishlists.forEach(wishlist => {
    allItems.push(...wishlist.items);
  });
  store.dispatch({ type: ITEM.GET_ALL.SUCCESS, payload: allItems });
}
