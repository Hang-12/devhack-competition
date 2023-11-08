import '@@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
