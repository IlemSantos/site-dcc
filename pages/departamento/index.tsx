import axios from 'axios'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await axios('http://localhost:4000/departments')
  const departments = res.data

  return {
    props: {
      departments,
    },
  }
}

interface DepartamentoProps {
  departments: {
    id?: string | undefined;
    title: string;
  }[];
};

export default function Department({ departments }: DepartamentoProps) {
  return (
    <>
      <h1>Lista de Pages</h1>
      <ul>
        {
          departments.map((department, index) => (
            <li key={index}>{department.title} - <Link href={`/departamento/${department.id}`}>Ver mais</Link></li>
          ))
        }
      </ul>
    </>
  )
}