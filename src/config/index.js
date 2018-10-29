const envEnum = ['development', 'production', 'staging'];
const { REACT_APP_NODE_ENV } = process.env;

// running a check to ensure the variable set by the user is one of the acceptable ones
// if it turns out it is an unknown variable then we default to `development`.
const NODE_ENV = (REACT_APP_NODE_ENV in envEnum) ? REACT_APP_NODE_ENV : 'development';

const allConfig = {
  testing: { API_BASE_URL: '' },
  development: { API_BASE_URL: 'http://localhost:3333' },
  production: { API_BASE_URL: '' },
  staging: { API_BASE_URL: '' },
};

const config = allConfig[NODE_ENV];

export default config;
