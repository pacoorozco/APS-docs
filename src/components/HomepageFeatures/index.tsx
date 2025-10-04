import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/bag-business.svg').default,
    description: (
      <>
          Your existing <code>pass</code> vault works instantly on your device.
      </>
    ),
  },
  {
    title: 'Zero‑Knowledge Encryption',
    Svg: require('@site/static/img/guard-protection-safe.svg').default,
    description: (
      <>
          Zero‑access architecture means <b>only you</b> ever see the keys.
      </>
    ),
  },
  {
    title: 'Easy & Autofill',
    Svg: require('@site/static/img/computer-password-privacy.svg').default,
    description: (
      <>
          Find, copy, or autofill credentials in seconds.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
