import axios from "axios";

export const getMovies = () => async dispatch => {
  console.log("Getting movies");
  dispatch({ type: "LOADING_START" });
  try {
    const response = await axios.get(
      "https://whispering-stream-19572.herokuapp.com/movies"
    );

    if (response.status === 200) {
      dispatch({ type: "GET_MOVIES", payload: response.data });
      dispatch({ type: "LOADING_FINISH" });
    }
  } catch (error) {
    console.log(error);
  }
};
