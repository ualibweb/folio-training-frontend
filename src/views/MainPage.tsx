import React from 'react';
import css from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={css.wrapper}>
      <h1>Cool stuff is coming</h1>
      <span className={css.eyesWrapper}>
        <span className={css.eyes}>👀</span>
      </span>
    </div>
  );
}
