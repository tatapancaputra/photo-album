import { User } from '@api/user/user.model';
import { UserService } from '@api/user/user.service';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const userList: User[] = await UserService.getUserList();

  return (
    <section className='home w-full fx fx-col fx-rgap-xl'>
      {userList.map((item: User) => (
        <Link
          className='card fx fx-cgap-lg p-xl'
          key={item.id}
          href={`/user/${item.id}`}
        >
          <Image
            src={`https://i.pravatar.cc/40?img=${item.id}`}
            alt={item.username}
            width={40}
            height={40}
            loading='lazy'
            style={{ objectFit: 'contain', borderRadius: 6 }}
          />
          <section className='fx fx-col fx-rgap-md fx-content-center'>
            <h1 className='dark'>{item.name}</h1>
            <p className='txt-sm gray-dark'>{item.website}</p>
          </section>
        </Link>
      ))}
    </section>
  );
}
