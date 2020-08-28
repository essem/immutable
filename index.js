const immer = require("immer");
const ImmutableStateManger = require("./immutable_state");
const CloneStateManger = require("./clone_state");

function test(stateManager) {
  let state = null;

  // initial state
  stateManager.setState({
    bag: ["phone", "mask"],
    age: 10,
  });

  // not changed
  stateManager.setState(stateManager.getState());

  // use previous state
  state = stateManager.getState();
  state.bag.push("laptop");
  stateManager.setState(state);

  // create new state with spread
  state = stateManager.getState();
  stateManager.setState({ ...state, bag: [...state.bag, "mouse"] });

  // create new state with immer
  state = immer.produce(stateManager.getState(), (draftState) => {
    draftState.bag.push("laptop");
  });
  stateManager.setState(state);
}

console.log("immutable_state_manager");
test(new ImmutableStateManger());

console.log("clone_state_manager");
test(new CloneStateManger());
