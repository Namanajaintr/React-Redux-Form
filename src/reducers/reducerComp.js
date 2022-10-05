const initValues = {
  personInfo: [
    {
      name: "Namana",
      email: "namana@s.com",
      password: "1234",
    },
    {
      name: "megha",
      email: "megha@s.com",
      password: "abcd",
    },
    {
      name: "akshu",
      email: "akshu@s.com",
      password: "pqrs",
    },
  ],
};

const reducerComp = (state = initValues, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        personInfo: state.personInfo.concat(action.payload),
      };

    default:
      return state;
  }
};

export default reducerComp;
