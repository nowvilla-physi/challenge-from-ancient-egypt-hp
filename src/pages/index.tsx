import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import mv from '../../public/images/main-visual.png';
import question1 from '../../public/images/question1.png';
import question2 from '../../public/images/question2.png';
import question3 from '../../public/images/question3.png';
import question4 from '../../public/images/question4.png';
import question5 from '../../public/images/question5.png';
import question6 from '../../public/images/question6.png';
import question7 from '../../public/images/question7.png';
import question8 from '../../public/images/question8.png';
import question9 from '../../public/images/question9.png';
import question10 from '../../public/images/question10.png';
import appleStoreBadge from '../../public/images/apple-store-badge-black.svg';
import playStoreBadge from '../../public/images/google-play-badge.png';

const Home: React.VFC = () => {
    return (
        <div className={styles.home}>
            <h1>
                <Image src={mv} />
            </h1>
            <h2 className={styles.home__title}><span>古代エジプト</span>からの挑戦状</h2>
            <div className={styles.home__badges}>
                <Link href="https://apple.co/3thN518">
                    <a><Image src={appleStoreBadge} width={160} height={80} /></a>
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.physi.nowvilla.challenge_from_ancient_egypt">
                    <a><Image src={playStoreBadge} width={200} height={88} /></a>
                </Link>
            </div>
            <article>
                <section className={styles.home__section}>
                    <div className={styles.home__questions}>
                        <Image src={question1} />
                        <Image src={question2} />
                        <Image src={question3} />
                        <Image src={question4} />
                        <Image src={question5} />
                        <Image src={question6} />
                        <Image src={question7} />
                        <Image src={question8} />
                        <Image src={question9} />
                        <Image src={question10} />
                    </div>
                </section>
                <section className={styles.home__section}>
                    <h3 className={styles['home__section-title']}>アプリではクリア人数も表示されるぞ。</h3>
                    <p className={styles['home__section-text']}>あなたが何人目の正解者となるか世界中の人と競争しよう。</p>
                </section>
                <p className={styles.home__subtitle}>皆さんの挑戦をお待ちしております。</p>
            </article>
        </div>
    );
};

export default Home;
