import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';
import { addUser, clearUser } from '../actions/user.action';

export const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,

  //* O anki mevcut state, boş bir dizi ile yer değiştirir.
  on(clearUser, (currentState) => []),

  //* Mevcut kullanıcı listesinin kopyası oluşturulduktan sonra yeni kullanıcı bilgisi gönderilir ve geriye yeni listeyi döndürür.
  on(addUser, (entries, user) => {
    const entriesClone: User[] = JSON.parse(JSON.stringify(entries));

    entriesClone.push(user);

    return entriesClone;
  }),
)
