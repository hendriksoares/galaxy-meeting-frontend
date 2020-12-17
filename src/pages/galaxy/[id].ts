import GalaxyPage from "./galaxy-page";

import { GetServerSideProps } from 'next';
import { GalaxyDto } from "dtos/galaxy.dto";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const current = parseInt(context.query.id as string,10);

    const res = await fetch(`${process.env.GALAXY_MEETING_API}/galaxy`);
    const galaxies = await res?.json();

    const next = (current + 1) % galaxies.length;
    const previous = (current - 1 + galaxies.length) % galaxies.length;
 
    return {
        props: {
            previous: galaxies.filter((x: GalaxyDto) => x.order == previous)[0],
            current: galaxies.filter((x: GalaxyDto) => x.order == current)[0],
            next: galaxies.filter((x: GalaxyDto) => x.order == next)[0],
        }
    }
}

export default GalaxyPage;