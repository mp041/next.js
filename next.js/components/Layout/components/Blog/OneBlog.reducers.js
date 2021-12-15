const initialState = [
  {
    image: "images/blog-img.jpg",
    name: "Fusce in augue non nisi fringilla",
    about:
      "Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.",
  },
  {
    image: "images/blog-img-01.jpg",
    name: "Fusce in augue non nisi fringilla",
    about:
      "Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.",
  },
  {
    image: "images/blog-img-02.jpg",
    name: "Fusce in augue non nisi fringilla",
    about:
      "Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.",
  },
];

export const oneBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
