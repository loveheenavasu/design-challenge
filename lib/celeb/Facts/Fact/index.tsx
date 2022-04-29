import Link from 'next/link';
import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import { Fact as TFact } from '~/lib/components/types';
import styles from  './index.module.scss'

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();
  return (
    <div className={styles.factsDataContainer} >
      <div className={styles.date} >
        <small>{value.date}</small>
      </div>

      <div className={styles.factContent} >
        {(value.type === 'quote' && (
          <div>
            <p>
              {value.context}, {name} said
            </p>

            <blockquote className={styles.factContentQuote} >
              <p> {value.quote}</p>
            </blockquote>
          </div>
        )) ||
          (value.type == 'fact' && (
            <div>
              <p>{value.content}</p>
            </div>
          ))}
      </div>

       <div className={styles.factTags}  >
          {value.tags.map((t) => {
            return (
              <span key={t.tag.name}>
                # {t.isLowConfidence && 'Possibly '}
                {t.tag.name}
              </span>
            );
          })}
        </div>

      <div className={styles.factBottom} >
        <button>
          <i  className="fa fa-globe" />
          <Link href={value.source}>Source</Link>
        </button>
        <button className={styles.forumBtn} >
          <i  className="fa fa-link" />
          <Link href={value.forumLink}>Forum link</Link>
        </button>
      </div>
    </div>
  );
};
