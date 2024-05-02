import { Album } from '@api/album/album.model';
import { User } from '@api/user/user.model';
import { UserService } from '@api/user/user.service';
import Header from '@components/header';
import PhotoAlbum from '@components/photo-album';
import { Metadata } from 'next';

type Props = {
  params: { id: number };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const userDetail: User = await UserService.getUserDetail(params.id);
  const { name } = userDetail;

  return {
    title: `Album collection of ${name}`,
    description: `Album collection of ${name}`,
  };
};

export default async function Page({ params }: Props) {
  const userDetail: User = await UserService.getUserDetail(params.id);
  const userAlbumList: Album[] = await UserService.getUserAlbumList(params.id);

  return (
    <div className='w-full fx fx-col fx-rgap-xl'>
      <Header user={userDetail} />
      <PhotoAlbum userAlbumList={userAlbumList} />
    </div>
  );
}
