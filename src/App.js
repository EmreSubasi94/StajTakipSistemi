import "./App.css";

import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.content}>
      <div className={styles.bluecard}>
        <div className={styles.logo}>
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <h1 className={styles.header1}>Stajyer Takip Sistemi</h1>
        <p className={styles.p1}>
          Öğrenciler, kurumlar ve üniversiteler için kullanışlı ve modern bir
          staj takip platformu
        </p>
      </div>
      <div className={styles.whitecard}>
        <div className={styles.logo2}>
          <div className={styles.logo_icon}>IFS</div>
          <div className={styles.logo_text}>Stajyer Takip</div>
        </div>
        <h1 className={styles.header2}>Hoş Geldiniz</h1>
        <label for="username" className={styles.label}>
          Kullanıcı Adı
        </label>
        <input
          className={styles.input}
          placeholder="Kullanıcı adınızı giriniz"
        ></input>
        <label for="password" className={styles.label}>
          Şifre
        </label>
        <input className={styles.input} placeholder="Şifrenizi giriniz"></input>
      </div>
    </div>
  );
}

export default App;
