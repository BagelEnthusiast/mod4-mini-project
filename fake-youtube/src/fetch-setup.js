import fetchMock from 'fetch-mock';
import { getAll, getByType } from './data/pets';
import 'whatwg-fetch';

fetchMock.get('/api/videos', getAll());

export default fetchMock;
