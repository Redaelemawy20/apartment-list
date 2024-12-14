import React, { ReactNode } from 'react';
import styles from './collection.module.css';
interface CollectionI<T> {
  title: string;
  collection: T[];
  renderItem: (item: T) => ReactNode;
}
function Collection<T extends { _id: string }>({
  title,
  collection,
  renderItem,
}: CollectionI<T>): ReactNode {
  return (
    <div className={styles.saleSection}>
      <h2>{title}</h2>
      <div className="container">
        <div className="row">
          {collection.map((item, index) => (
            <React.Fragment key={item._id ?? index}>
              {renderItem(item)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
