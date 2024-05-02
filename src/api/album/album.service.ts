import { Photo } from '@api/photo/photo.model';
import { GET } from '@utils/api';
import { Album } from './album.model';

const SERVICE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/albums`;

const URLS = {
  ALBUMS: () => SERVICE_URL,
  ALBUM_DETAIL: (id: number) => `${SERVICE_URL}/${id}`,
  ALBUM_PHOTOS: (id: number) => `${SERVICE_URL}/${id}/photos`,
};

export class AlbumService {
  static readonly getAlbumList = async (): Promise<Album[]> =>
    GET<Album[]>(URLS.ALBUMS());

  static readonly getAlbumDetail = async (id: number): Promise<Album> =>
    GET<Album>(URLS.ALBUM_DETAIL(id));

  static readonly getAlbumPhotoList = async (id: number): Promise<Photo[]> =>
    GET<Photo[]>(URLS.ALBUM_PHOTOS(id));
}
