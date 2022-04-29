import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import styles from './index.module.scss'

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <div className={styles.container}  >
      <div  className={styles.tagsContainer}>
        {tags.regular.map((t) => (
          <div className={styles.tags} key={t.tag.name}>{t.tag.name}</div>
        ))}
      </div>

      {tags.lowConfidence.length > 0 && (
        <div className={styles.lowConfidenceTags} >
        <p>Maybe</p>
          <div  className={styles.lowCtagsDiv} >
            {tags.lowConfidence.map((t) => (
              <div key={t.tag.name}>{t.tag.name}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
