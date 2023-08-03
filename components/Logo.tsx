import { EnvVars } from 'env';

export default function Logo({ ...rest }) {
  return <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{EnvVars.SITE_NAME}</p>;
}
