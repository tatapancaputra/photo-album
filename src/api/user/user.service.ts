import { Album } from '@api/album/album.model';
import { GET } from '@utils/api';
import { User } from './user.model';

const SERVICE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`;

const URLS = {
  USERS: () => SERVICE_URL,
  USER_DETAIL: (id: number) => `${SERVICE_URL}/${id}`,
  USER_ALBUMS: (id: number) => `${SERVICE_URL}/${id}/albums`,
};

export class UserService {
  static readonly getUserList = async (): Promise<User[]> =>
    GET<User[]>(URLS.USERS());

  static readonly getUserDetail = async (id: number): Promise<User> =>
    GET<User>(URLS.USER_DETAIL(id));

  static readonly getUserAlbumList = async (id: number): Promise<Album[]> =>
    GET<Album[]>(URLS.USER_ALBUMS(id));
}
