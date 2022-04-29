import Image from 'next/image';
import React from 'react';
import { sanityImage } from '~/lib/components/sanityio';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import styles from './index.module.scss'

export const TopSection = () => {
  const context = useCelebContext();

  const picture = context.celeb.picture || context.placeholderImage;

  return (
    <div className={styles.container}>
      <section>
        <header>
          <div>
            <Image
              blurDataURL={picture.metadata.lqip}
              placeholder="blur"
              src={
                sanityImage(picture)
                .width(300)
                .height(350)
                .url()
              }
              width={200}
              height={250}
              priority
              alt={context.celeb.name}
            />
          </div>

          <p>
            <span>Religion, politics, and ideas of</span>
            <br /> <span><strong>{context.celeb.name}</strong></span>
          </p>
        </header>
      </section>
    </div>
  );
};
