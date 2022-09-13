export const GET_RANDOM_GREET = "hello-rails-react/greeting/GET_RANDOM_GREET";

export function getRandomGreetingAction() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  console.log("dispatching action");
  return function (dispatch) {
    console.log("fetching");
    fetch("http://localhost:3000/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_RANDOM_GREET, payload: data });
      })
      .catch((error) => console.log(error));
  };
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
