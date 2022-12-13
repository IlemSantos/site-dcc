import { Heading } from '@chakra-ui/react';
import Link from 'next/link'

import api from '../../services/api';

export async function getStaticProps() {
  const res = await api('/departments')
  const data = res.data

  return {
    props: {
      data,
    },
  }
}

interface PageProps {
  data: {
    title: string;
    slug: string;
  }[];
};

export default function Page({ data }: PageProps) {
  return (
    <>
      <Heading mb={2}>Lista de Pages</Heading>
      <ul>
        {
          data?.map((element, index) => (
            <li key={index}>{element.title} - <Link href={`/departamento/${element.slug}`}>Ver mais</Link></li>
          ))
        }
      </ul>
    </>
  )
}