import { getDatabaseConnector } from '@backend/database/connection';
import { Handler, Request, RequestMethods, Response } from '@backend/model/http';

const connector = getDatabaseConnector();

export default (methods: RequestMethods) => {
  return (fn: Handler) => async (req: Request, res: Response): Promise<void> => {
    if (methods.includes(req.method)) {
      req.db = connector();
      await fn(req, res);
      await req.db.destroy();
    }
    await fn(req, res);
  };
};
