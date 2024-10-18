import { classNames } from '~/utils/classNames';
import styles from './RayContainer.module.scss';

export const RayContainer = () => {
  return (
    <div className={styles.RayContainer} data-theme="dark" data-chat-started="false">
      <div className={classNames(styles.LightRay, styles.RayOne)} data-ray="one"></div>
      <div className={classNames(styles.LightRay, styles.RayTwo)} data-ray="two"></div>
      <div className={classNames(styles.LightRay, styles.RayThree)} data-ray="three"></div>
      <div className={classNames(styles.LightRay, styles.RayFour)} data-ray="four"></div>
      <div className={classNames(styles.LightRay, styles.RayFive)} data-ray="five"></div>
    </div>
  );
};
