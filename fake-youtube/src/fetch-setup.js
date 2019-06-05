import fetchMock from 'fetch-mock';
import { getAll} from './data/videos';
import 'whatwg-fetch';

fetchMock.get('/api/videos', getAll());

export default fetchMock;
