import Image from "next/image";
import Layout from "../../components/Layout";
import Link from "next/link";

import { getAllVehicles } from "../../lib/api";

export async function getStaticProps() {
  const vehiclesData = await getAllVehicles();
  return {
    props: {
      vehiclesData
      }
    };
}

  // Get external data from the file system, API, DB, etc.

const VehiclesPage = ({ data }) => {
    return <Layout>
        <h1>Vehicles</h1>
        {data.edges.map((car) => {
      const { title, slug } = car.node;
      return <article>
        <Link href={`vehicles/${slug}`}>
            <Image
            src={`/vehicles/${slug}/medium.webp`}
            alt={`${title} car`}
            width={350}
            height={185}
            />
        </Link>
        <h2>{title}</h2>
      </article>
    })}
    </Layout>
}
export default VehiclesPage;