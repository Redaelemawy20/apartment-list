import styles from './area.module.css';
const EmptyCard = () => (
  <div className={`${styles.emptyCard} text-center`}>
    <div className={`${styles.imgPlaceholder} bg-light rounded mb-2`}></div>
    <p className="text-muted">No data available</p>
  </div>
);
export default EmptyCard;
