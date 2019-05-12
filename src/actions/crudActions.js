function createActions(entityName) {
  return {
    CREATE: {
      SUCCESS: `${entityName}_CREATE_SUCCESS`,
      ERROR: `${entityName}_CREATE_ERROR`,
    },
    GET: {
      SUCCESS: `${entityName}_GET_SUCCESS`,
      ERROR: `${entityName}_GET_ERROR`,
    },
    GET_ALL: {
      SUCCESS: `${entityName}_GET_ALL_SUCCESS`,
      ERROR: `${entityName}_GET_ALL_ERROR`,
    },
    UPDATE: {
      SUCCESS: `${entityName}_UPDATE_SUCCESS`,
      ERROR: `${entityName}_UPDATE_ERROR`,
    },
    DELETE: {
      SUCCESS: `${entityName}_DELETE_SUCCESS`,
      ERROR: `${entityName}_DELETE_ERROR`,
    },
  };
}

export const WISHLIST = createActions('WISHLIST');
export const CATEGORY = createActions('CATEGORY');
export const ITEM = createActions('ITEM');

export const ACTIONS = {
  WISHLIST,
  CATEGORY,
  ITEM,
};
