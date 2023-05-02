import {
  APIFeatures,
  AppError,
  catchAsync,
} from '../utils';
import Movie from '../models/movieModel';

export const getAllMovies: any = catchAsync(async function (
  req,
  res,
  next
) {
  const features = new APIFeatures(Movie.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const data = await features.query.select('__v');

  if (!data || data.length === 0)
    next(new AppError('No document found', 404));

  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
});

export const getOne: any = catchAsync(
  async (req, res, next) => {
    const data = await Movie.findById(req.query.id).select(
      '-__v'
    );

    if (!data)
      next(
        new AppError('No document found with that ID', 404)
      );

    res.status(200).json({
      status: 'success',
      results: data.length,
      data,
    });
  }
);
