export const GET_RANDOM_GREET = "hello-rails-react/greeting/GET_RANDOM_GREET";

export function getRandomGreetingAction(greeting) {
  return { type: GET_RANDOM_GREET, payload: greeting };
}

function greetingReducer(state = { message: "No greeting message" }, action) {
  switch (action.type) {
    case GET_RANDOM_GREET:
      return action.payload;
    default:
      return state;
  }
}

export default greetingReducer;
