import { User } from '@api/user/user.model';
import Image from 'next/image';

export default function Header({ user }: { user: User }) {
  return (
    <header className='header fx fx-cgap-xl'>
      <Image
        className='profile-picture'
        src={`https://i.pravatar.cc/40?img=${user.id}`}
        alt='profile'
        width={40}
        height={40}
        loading='lazy'
        style={{ objectFit: 'contain', borderRadius: 100 }}
      />
      <section className='user-detail fx-1 fx fx-col fx-rgap-md'>
        <div className='wrapper fx fx-items-center fx-content-between'>
          <section class='name fx fx-cgap-lg fx-items-center txt-lg txt-bolder dark'>
            {user.name}
            <Image
              src='https://www.svgrepo.com/show/506621/verified.svg'
              alt='verified'
              width={16}
              height={16}
              loading='lazy'
              style={{ objectFit: 'contain' }}
            />
          </section>
          <Image
            className='menu'
            src='https://www.svgrepo.com/show/511063/menu-alt-01.svg'
            alt='menu'
            width={20}
            height={20}
            loading='lazy'
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className='occupation gray-dark'>
          Professional Food Photographer
        </div>
        <div className='contact fx fx-cgap-xl gray-dark'>
          <div className='location fx fx-items-center fx-cgap-md'>
            <Image
              src='https://www.svgrepo.com/show/504557/maps.svg'
              alt='location'
              width={12}
              height={12}
              loading='lazy'
              style={{ objectFit: 'contain' }}
            />
            {user.address.city}
          </div>
          <div className='email fx fx-items-center fx-cgap-md'>
            <Image
              src='https://www.svgrepo.com/show/502648/email.svg'
              alt='email'
              width={12}
              height={12}
              loading='lazy'
              style={{ objectFit: 'contain' }}
            />
            {user.email.toLowerCase()}
          </div>
        </div>
      </section>
    </header>
  );
}
