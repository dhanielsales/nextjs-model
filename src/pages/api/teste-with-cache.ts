import databaseConnection from '@backend/middleware/databaseConnection';
import { Raw } from '@backend/model/db';
import { Handler } from '@root/backend/model/http';

interface Test {
  id: number;
  name: string;
}

const handler: Handler = async (request, response) => {
  try {
    if (request.method === 'GET') {
      const database = request.db;
      const data = await database.raw<Raw<Test>>('SELECT * FROM test_table');
      // const data = await database('test_table').select();

      console.log('LOG: Com cache');
      response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

      return response.status(200).json(data.rows);
      // return response.status(200).json(data);
    } else {
      return response.status(404).end();
    }
  } catch (err) {
    console.log(err);
    return response.status(500).send({ error: 'Internal Error' });
  }
};

export default databaseConnection(['GET'])(handler);
