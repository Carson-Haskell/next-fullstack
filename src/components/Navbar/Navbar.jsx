'use client';

import Link from 'next/link';
import React from 'react';
import { LINKS } from './navbar.constants';
import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

function Navbar() {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/">lamamia</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {LINKS.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
