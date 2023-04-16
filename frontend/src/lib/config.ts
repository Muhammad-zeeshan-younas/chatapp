const dev = {
  backend_url: "http://localhost:3001/api/v1",
};

const staging = {
  backend_url: "https://staging-backend.tapp.events/api/v1",
};

const production = {
  backend_url: "https://backend.tapp.events/api/v1",
};

export const config = () => {
  if (process.env.REACT_APP_STAGE === "production") {
    return production;
  } else if (process.env.REACT_APP_STAGE === "staging") {
    return staging;
  } else {
    return dev;
  }
};
