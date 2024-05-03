'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css'

interface Props {
    path: string;
    text: string
}

const ActiveLink = ({ path, text }: Props ) => {

    const pathName = usePathname()
            
  return (
    <div>
        <Link 
            className={ `${ style.link } ${ (pathName === path) && style['active-link']}` } 
            href={path}>
                {text}
        </Link>
      
    </div>
  )
}

export default ActiveLink
