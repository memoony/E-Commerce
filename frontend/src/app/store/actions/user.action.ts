import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';

//* Kullanıcı sisteme giriş yaptıktan sonra kullanıcı bilgisini state'e eklemek için kullanılan action.
export const addUser = createAction('Add User', props<User>());

//* Kullanıcı sistemden çıkış yaptıktan sonra state bilgisini temizlemek için kullanılan action.
export const clearUser = createAction('Clear User');
