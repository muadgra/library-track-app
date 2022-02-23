
import type {LinksFunction} from 'remix';
import stylesUrl from '../styles/index.css';
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      
      <div><h1>Selam</h1></div>
      
    </div>
  );
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
