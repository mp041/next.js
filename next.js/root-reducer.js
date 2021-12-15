const {combineReducers} = require('redux');
const  {ourTeamReducer}  = require('./components/Layout/components/OurTeam/OurTeam.reducers');
const  {shopCategoryReducer} = require('./components/Layout/components/ShopCategory.js/ShopCategory.reducers');
const { oneProductReducer } = require('./components/Layout/components/FeatureProducts/OneProduct.reducers');
const {oneBlogReducer} = require('./components/Layout/components/Blog/OneBlog.reducers');


export const rootReducer = combineReducers({
  teamMembers : ourTeamReducer,
  shopCategory : shopCategoryReducer,
  oneProduct : oneProductReducer,
  oneBlog : oneBlogReducer,
});

// export default rootReducer
