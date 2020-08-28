module.exports = class StateManager {
  constructor() {
    this.state = null;
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    const changed = this.state !== newState;
    this.state = newState;
    console.log("state:", changed, newState);
  }
};
