const dev = {
  backend_url: "http://localhost:3001/api/v1",
};

const staging = {
  backend_url: "",
};

const production = {
  backend_url: "",
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
