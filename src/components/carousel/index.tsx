import { Album } from '@api/album/album.model';
import Image from 'next/image';
import './carousel.scss';

export default function Carousel({
  albumList,
  activeAlbumId,
  setActiveAlbumId,
}: {
  albumList: Album[];
  activeAlbumId: number;
  setActiveAlbumId: () => void;
}) {
  const isActiveAlbum = (albumId: number) => {
    return activeAlbumId === albumId;
  };

  return (
    <div className='carousel fx'>
      <div className='fx fx-center fx-cgap-xl'>
        {albumList.map((item: Album, index: number) => (
          <button
            className={
              'album fx fx-col fx-rgap-md ' +
              (isActiveAlbum(item.id) ? 'active' : '')
            }
            key={item.id}
            onClick={(e) => {
              e.stopPropagation();

              e.target.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
              });

              setActiveAlbumId(item.id);
            }}
            style={{ borderStyle: 'none' }}
          >
            <Image
              className='thumbnail'
              src={`https://picsum.photos/id/${item.id}/180/100`}
              alt={item.title}
              width={180}
              height={100}
              loading='lazy'
              style={{ objectFit: 'cover' }}
            />
            <div className='album-title txt-sm txt-left light px-lg'>
              {item.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
