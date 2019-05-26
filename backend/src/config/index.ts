import path from 'path';

const env = 'NODE_ENV' in process.env ? process.env.NODE_ENV : 'dev';
const DEFAULT_CONFIG = { PORT: 3000 };
let config = {};

try {
  config = require(path.join(__dirname, `config-${env}`));
} catch (e) {
  config = require(path.join(__dirname, `config-dev`));
};

export default Object.assign({}, DEFAULT_CONFIG, config);
