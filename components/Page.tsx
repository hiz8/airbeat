import Link from 'next/link';
import { connect } from 'react-redux';
import Clock from './Clock';
import AddCount from './AddCount';

export default connect(state => state)(({ title, linkTo, tick, add }: any) => {
  return (
    <>
      <h1>{title}</h1>
      <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
      <AddCount count={add.count} />
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </>
  );
});
