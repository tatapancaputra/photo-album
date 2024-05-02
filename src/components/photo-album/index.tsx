'use client';

import { Album } from '@api/album/album.model';
import { AlbumService } from '@api/album/album.service';
import { Photo } from '@api/photo/photo.model';
import Carousel from '@components/carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './photo-album.scss';

const VIEWPORT_WIDTH = Math.min(640, window.screen.width);
const IS_MOBILE_VIEW = VIEWPORT_WIDTH < 640;
const GAP = 12;
const PADDING_X = IS_MOBILE_VIEW ? 40 : 0;
const PHOTO_WIDTH = (VIEWPORT_WIDTH - GAP - PADDING_X) / 2;
const SCROLLABLE_HEIGHT = window.screen.height - (IS_MOBILE_VIEW ? 248 : 335);

export default function PhotoAlbum({
  userAlbumList,
}: {
  userAlbumList: Album[];
}) {
  const [activeAlbumId, setActiveAlbumId] = useState(userAlbumList[0].id);
  const [photoList, setPhotoList] = useState<Photo[]>([]);
  const [displayPhotoList, setDisplayPhotoList] = useState<Photo[]>([]);

  const loadMorePhotos = () => {
    setTimeout(() => {
      setDisplayPhotoList([...displayPhotoList, ...photoList]);
    }, 1000);
  };

  useEffect(() => {
    const fetchPhotoList = async (activeAlbumId: number) => {
      setPhotoList([]);
      setDisplayPhotoList([]);

      const data: Photo[] = await AlbumService.getAlbumPhotoList(activeAlbumId);

      setPhotoList(data);
      setDisplayPhotoList(data);
    };

    fetchPhotoList(activeAlbumId);
  }, [activeAlbumId]);

  return (
    <div className='photo-album fx fx-col fx-rgap-xl'>
      <Carousel
        albumList={userAlbumList}
        activeAlbumId={activeAlbumId}
        setActiveAlbumId={setActiveAlbumId}
      />
      <InfiniteScroll
        className='photo-list'
        dataLength={displayPhotoList.length}
        next={loadMorePhotos}
        hasMore={true}
        loader={<p className='w-full txt-center'>Loading...</p>}
        endMessage={<p className='w-full txt-center'>No more data to load.</p>}
        height={SCROLLABLE_HEIGHT}
      >
        {displayPhotoList.map((item: Photo, index: number) => (
          <Image
            className='photo'
            key={index}
            src={item.url}
            alt={item.title}
            width={PHOTO_WIDTH}
            height={PHOTO_WIDTH}
            loading='lazy'
            style={{ borderRadius: 16 }}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
