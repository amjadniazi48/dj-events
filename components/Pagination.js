import Link from 'next/link'
import { PER_PAGE } from '@/config/index'
import { useState } from 'react';
export default function Pagination({ page, total }) { 
 
    const lastPage = Math.ceil(total / PER_PAGE)

  //Total Number of Pages
  const totalPages = [];
  for (var i = 1; i <= lastPage; i++) {
      totalPages.push(i);
   }
   const [pageNumbers,setPageNumbers]=useState(totalPages);
   //==============================
  return (
    <>
      {page > 1 && (
        <Link href={`/?page=${page - 1}`}>
          <a className='btn btn-secondary'>Prev</a>
        </Link>
      )}
        {pageNumbers && pageNumbers.map((item,index)=>(
        <Link href={`/?page=${item}`} key={index}>
          <a className='btn btn-secondary m-2'>{item}</a>
        </Link>
        ))
        }
      {page < lastPage && (
        <Link href={`/?page=${page + 1}`}>
          <a className='btn btn-secondary m-2'>Next</a>
        </Link>
      )}
    </>
  )
}