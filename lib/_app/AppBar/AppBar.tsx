import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import styles from './index.module.scss'

export const AppBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={styles.navBar}>
      <section>
        <div className={styles?.headerContainer } >
          <div >
            <Link passHref href="/">
              <a>
                <Image
                  src="/images/logo.svg"
                  width={250}
                  height={30}
                  alt="Hollowverse"
                  layout="fixed"
                />
              </a>
            </Link>
            </div>
            <div>
              <i onClick={() => setToggle(prevState => !prevState)} className="fa fa-search" />
            </div>
        </div>
        {<div style={{ height: !toggle ? 0 : 40, overflow: 'hidden', }}  className={styles.searchSection} >
        <input placeholder="Search for a celebrity" type="search" />
        <div>{" "}</div>
        </div>}
      </section>
      
    </nav>
  );
};
