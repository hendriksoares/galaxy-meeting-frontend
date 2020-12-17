import GalaxyPage from "./galaxy-page";

import { GetServerSideProps, GetStaticPaths } from 'next';



export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${process.env.GALAXY_MEETING_API}/galaxy/`);
    const galaxies = await res.json();
    return {
        props: {
            galaxy: galaxies[0],
        }
    }
}


export default GalaxyPage;