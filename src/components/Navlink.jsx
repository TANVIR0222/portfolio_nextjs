"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({links}) => {
    // click and nav link change  
    const pathName = usePathname();
    return (
        <Link className={`p-1 rounded ${pathName === links.url && 'bg-black text-white'}`} href={links.url}>{links.titel} </Link>
    );
};

export default Navlink;