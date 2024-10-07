import { Header } from '@/components/header/Header';
import '../styles/home.scss';
import { Experience } from '@/components/experience/Experience';
import { Information } from '../components/information/Information';
import { Button } from '../components/button/Button';

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Information />
      <Button />
    </main>
  );
}
