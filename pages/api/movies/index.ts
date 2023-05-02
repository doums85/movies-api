// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect';
import { getAllMovies } from '../../../controllers/getMovies';
import { onError } from '../../../utils';
import dbConnect from '../../../config';

const handler = nc({ onError });

dbConnect();

handler.get(getAllMovies);
export default handler;
