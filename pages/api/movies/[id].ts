// 6450e068fe038410e3efbf39
import nc from 'next-connect';

import { getOne } from '../../../controllers/getMovies';
import { onError } from '../../../utils';
import dbConnect from '../../../config';

const handler = nc({ onError });

dbConnect();

handler.get(getOne);

export default handler;
