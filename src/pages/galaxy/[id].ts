import GalaxyPage from './galaxy-page';

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const currentOrder = parseInt(context.query.id as string, 10);

  return {
    props: {
      currentOrder,
    },
  };
};

export default GalaxyPage;
