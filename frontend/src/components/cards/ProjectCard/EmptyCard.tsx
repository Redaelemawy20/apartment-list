import styles from './project.module.css';
const EmptyCard = () => {
  return (
    <div className={`${styles.card} card`}>
      <div className={styles.imgWrapper}></div>
      <div className={styles.cardBody}>
        <p className={styles.emptyText}>No project details available</p>
      </div>
    </div>
  );
};

export default EmptyCard;
