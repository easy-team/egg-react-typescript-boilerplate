import { UPDATE, ADD, DEL } from './constant';

export const updateState = item => {
  return {
    type: UPDATE,
    item
  };
}

export const add = item => {
  console.log('item', item);
  return {
    type: ADD,
    item
  };
};

export const del = id => {
  return {
    type: DEL,
    id
  };
};

