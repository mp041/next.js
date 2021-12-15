const initialState = [
  {
    images: "images/img-pro-01.jpg",
    intro:
      "Lorem ipsum dolor sit amet",
    price: "$10.79",
  },
  {
    images: "images/img-pro-03.jpg",
    intro:
      "Lorem ipsum dolor sit amet",
    price: "$7.79",
  },
  {
    images: "images/img-pro-02.jpg",
    intro:
      "Lorem ipsum dolor sit amet",
    price: "$9.79",
  },
  {
    images: "images/img-pro-04.jpg",
    intro:
      "Lorem ipsum dolor sit amet",
    price: " $15.79",
  },
];

export const oneProductReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
