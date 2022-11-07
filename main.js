"use strict";

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.innerHTML = routes[pathname];
};

const routes = {
  "/listagem": listagem,
  "/login": login,
  "/novoItem": novoItem,
  "/adicionar": adicionar,
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];
