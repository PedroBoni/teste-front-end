const loadInitialValue = () => {
  fetch("https://private-21e8de-rafaellucio.apiary-mock.com/users").then(
    (response) => {
      return response.json().then((json) => {
        localStorage.setItem(usersKey, JSON.stringify(json));
      });
    }
  );
};
