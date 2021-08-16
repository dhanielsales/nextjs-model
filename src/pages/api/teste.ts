import databaseConnection from '@backend/middleware/databaseConnection';
import { Raw } from '@backend/model/db';
import { Handler } from '@root/backend/model/http';

interface Test {
  id: number;
  name: string;
}

const handler: Handler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const database = req.db;
      const data = await database.raw<Raw<Test>>('SELECT * FROM test_table_2');
      // const data = await database('test_table_2').select();

      return res.status(200).json(data.rows);
      // return res.status(200).json(data);
    } else {
      return res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Internal Error' });
  }
};

export default databaseConnection(['GET'])(handler);
