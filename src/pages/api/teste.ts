import databaseConnection from '@backend/middleware/databaseConnection';
import { Handler } from '@root/backend/model/http';

const handler: Handler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const database = req.db;
      // const data = await database.raw('SELECT * FROM test_table');
      const data = await database.raw(`
        SELECT *
        FROM information_schema.tables
        WHERE table_name = 'test_table';
      `);

      return res.status(200).json(data);
    } else {
      return res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Oops! Something went wrong!' });
  }
};

export default databaseConnection()(handler);
