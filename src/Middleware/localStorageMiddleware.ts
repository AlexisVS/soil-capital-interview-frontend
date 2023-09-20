const localStorageMiddleware = (store) => (next) => (action) => {
    next(action); // Let the action pass through first.

    // Define the key under which to store the state in localStorage.
    const localStorageKey = 'root';

    // Save the relevant part of the state to localStorage.
    const stateToPersist = {
        auth: store.getState().auth, // Replace 'auth' with your actual slice name.
        // Add other slices as needed.
    };

    localStorage.setItem(localStorageKey, JSON.stringify(stateToPersist));
};

export default localStorageMiddleware;
