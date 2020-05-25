import { appendById, loadJSON } from '../../utils';
import createUsersList          from '../UsersList';

loadJSON( './data/users.json' )
.then( (employees) => {
  if (Array.isArray( employees )) {
    appendById( 'ourteam', createUsersList( employees ) );
  }
} );