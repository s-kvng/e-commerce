import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classes from './index.module.scss'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { HeaderNav } from "../Nav"
import MobileNav from '../MobileNav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'


const HeaderComponent = ({ header }: { header: Header }) => {

  const pathname = usePathname()
  return (
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]}>
      <Gutter className={classes.wrap}>
        <Link href={"/"}>
          <Image src="/logo-black.svg" alt="logo" width={170} height={30} />
        </Link>

        <HeaderNav header={header} />
        <MobileNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent