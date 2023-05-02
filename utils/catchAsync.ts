// eslint-disable-next-line import/no-anonymous-default-export
export default (
    func: (arg0: any, arg1: any, arg2: any) => any
  ) =>
  (
    req: any,
    res: any,
    next:
      | ((reason: any) => PromiseLike<never>)
      | null
      | undefined
  ) =>
    Promise.resolve(func(req, res, next)).catch(next);
