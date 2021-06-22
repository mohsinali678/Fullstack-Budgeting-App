export const apiURL = () => {
    return window.location.hostname === "localhost"
    ? "http://127.0.0.1:3003"
    : "https://fullstack-budget-app.herokuapp.com";
};