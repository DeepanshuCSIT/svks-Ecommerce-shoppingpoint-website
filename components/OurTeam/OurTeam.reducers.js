const initialState = [
  {
    name: "Deepanshu Saxena/Founder",
    designation: "Web Developer",
    image: "images/img-1.jpg",
    about:
      "Deepashu Saxena(Founder) has survived not only five centuries, remaining essentially unchanged. It was popularised in the 2000s with the release, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "$VK$ Company",
    designation: "Company Logo",
    image: "images/img-2.jpg",
    about:
      "$vk$ has survived not only five centuries, It was popularised in  the release, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Himanshu Saxena",
    designation: "Chief Finance Officer",
    image: "images/img-3.jpg",
    about:
      "Himanshu has survived not only five centuries, remaining essentially unchanged. It was more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    name: "Deepanshu Saxena",
    designation: "Mobile Developer",
    image: "images/img-1.jpg",
    about:
      "Deepanshu has survived not only five centuries, remaining essentially unchanged. It was more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const ourTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ourTeamReducer;
