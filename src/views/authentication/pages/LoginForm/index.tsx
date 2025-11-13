// ** Styles Import
import styles from './index.module.scss';

// ** Another Import
import { useState } from 'react';

function LoginForm() {
  // ** State
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <div className={styles.loginForm}>
      <p className={styles.loginForm__header}>faniverse</p>

      <div className={styles.loginForm__form}>
        <p className={styles.loginForm__form__title}>Login</p>

        <div className={styles.loginForm__form__inputWrapper}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Enter your email'
          />
        </div>

        <div className={styles.loginForm__form__inputWrapper}>
          <label htmlFor='password'>Password</label>
          <div className={styles.password}>
            <input
              type={showPass ? 'text' : 'password'}
              name='password'
              id='password'
              placeholder='Enter your password'
            />

            <button
              className={styles.visibility}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <span className='material-symbols-outlined'>visibility</span>
              ) : (
                <span className='material-symbols-outlined'>
                  visibility_off
                </span>
              )}
            </button>
          </div>
        </div>

        <button className={styles.loginForm__form__forgot}>
          Forgot Password?
        </button>
        <button className={styles.loginForm__form__btnSigin}>Sign in</button>
        <p className={styles.loginForm__form__continue}>or continue with</p>
      </div>

      <div className={styles.loginForm__options}>
        <button className={styles.loginForm__options__item}>
          <img
            src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
            alt='google icon'
          />
        </button>
        <button className={styles.loginForm__options__item}>
          <img
            src='https://static.vecteezy.com/system/resources/previews/047/750/224/non_2x/facebook-icon-transparent-background-free-png.png'
            alt='facebook icon'
          />
        </button>
        <button className={styles.loginForm__options__item}>
          <img
            src='https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png'
            alt='instagram icon'
          />
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
