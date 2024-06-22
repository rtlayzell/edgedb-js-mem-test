import e from '../dbschema/edgeql-js';
import * as edgedb from 'edgedb';

const query = e.select(e.Exchange, () => ({
  ...e.Exchange['*']
}));