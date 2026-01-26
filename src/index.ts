import _ from 'lodash';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';

const main = () => {
  console.log('Project Initialized!');
  console.log(
    'UUID:',
    uuidv4()
  );
  console.log(
    'Current Time:',
    DateTime.now().toISO()
  );
  console.log(
    'Lodash Version:',
    _.VERSION
  );
};

main();
