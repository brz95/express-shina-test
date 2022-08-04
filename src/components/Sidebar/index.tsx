import React from 'react';
import styles from './index.module.scss';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { IPoints, SidebarProps } from '../../types';

const Sidebar = ({ setCoordinate, setZoom, places }: SidebarProps) => {
  const handleClick = (place: IPoints) => {
    setCoordinate([place.latitude, place.longitude]);
    setZoom(15);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <Scrollbars style={{ height: '95vh' }}>
          {places.map((place) => {
            return (
              <div
                className={styles.sidebar__items}
                key={place.latitude}
                tabIndex={0}
                onClick={() => handleClick(place)}
              >
                <div className={styles.sidebar__content_address}>{place.address}</div>
                <div className={styles.sidebar__content_buttons}>
                  {place.budgets.map((budget, index) => {
                    return (
                      <div className={styles.sidebar__content_button} key={budget + index}>
                        {budget}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Scrollbars>
      </div>
    </div>
  );
};

export default Sidebar;
