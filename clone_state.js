const _ = require("lodash");

module.exports = class StateManager {
  constructor() {
    this.state = null;
  }

  getState() {
    return _.cloneDeep(this.state);
  }

  setState(newState) {
    const changed = !_.isEqual(this.state, newState);
    this.state = newState;
    console.log("state:", changed, newState);
  }
};
