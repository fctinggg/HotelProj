import { useReducer } from "react";

const conditionReducer = (state, action) => {
  if (action.type === "CHECK1") {
    state.isChecked[0] = !state.isChecked[0];
    if (isChecked === true) {
      state.savedCondition = state.savedCondition.filter(
        (savedCondition) => savedCondition !== action.val
      );
    } else {
      state.savedCondition = [...state.savedCondition, action.val]
    }
  }
};

const FilterCheckbox = () => {
  const [conditionState, dispatchCheck] = useReducer(conditionReducer, {
    savedCondition: [],
    isChecked: [false, false, false, false],
  });

  const changeHandler1 = (event) => {
    dispatchCheck({ type: "CHECK1", val: "airPortService" });
  };

  return (
    <>
      <CheckBok onChange></CheckBok>
      <CheckBok onChange></CheckBok>
      <CheckBok onChange></CheckBok>
      <CheckBok onChange></CheckBok>
    </>
  );
};
