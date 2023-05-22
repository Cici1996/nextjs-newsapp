'use client';
import { categories } from '@/constants'
import React from 'react'
import NavLink from './NavLink'
import { usePathname } from "next/navigation"

type Props = {}

const NavLinks = (props: Props) => {
    const pathName = usePathname();
    const isActive = (path: string) => {
        return pathName?.split("/").pop() === path
    }
    return (
        <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b'>
            {categories.map((item) => (
                <NavLink key={item} category={item} isActive={isActive(item)} />
            ))}
        </nav>
    )
}

export default NavLinks