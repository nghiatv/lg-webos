export const navigate = (path) => {
  return {
    type: 'NAVIGATE',
    path
  };
};

// import ItemActions from './ItemActions';
// import CartActions from './CartActions';
import authActions from './authActions';
import homeActions from './homeActions';
import categoryActions from './categoryActions'
// import CouponActions from './CouponActions';
// import RegionActions from './RegionActions';

export default {
  authActions,
  homeActions,
  categoryActions
};
