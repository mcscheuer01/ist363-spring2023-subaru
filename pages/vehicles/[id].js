import Image from "next/image";
import Layout from "../../components/Layout";
import Link from "next/link";

import { getAllCarSlugs, getSingleVehicleBySlug } from "../../lib/api.js";

export async function getStaticPaths() {
    const slugs = getAllCarSlugs();
    const paths = slugs.map(slug => {
          return {
              params: {
                  id: slug,
              }
          }
    })
    return {
      paths,
      fallback: false,
    };
  }  

  
  export async function getStaticProps({ params }) {
    const { id } = params;
    console.log({id});
    const vehicleData = await getVehicleDataBySlug(id);
    return {
      // Passed to the page component as props
      props: {
        vehicleData
      },
    }
  }

  export default function SingleVehiclePage({ vehicleData }) {
    const { title, featuredImage } = vehicleData;
    return ( 
      <div>
      <h1>{title}</h1>
      {featuredImage && (
        <Image
        src={featuredImage.node.sourceUrl}
        alt={featuredImage.node.altText}
        width={featuredImage.node.mediaDetails.width}
        height={featuredImage.node.mediaDetails.height}
        />
     )}
    </div>
    );
  }

const SingleCarTemplate =  ({ data }) => {
    const { model, slug } = data;
    return <Layout>
    <h4>
        <Link href="/vehicles">
            &laquo; Back to Vehicles Page
        </Link>
    </h4>
        <h1>{model}</h1>
        <Image
            src={`/vehicles/${slug}/medium.webp`}
            alt={`${model} car`}
            width={350}
            height={185}
            />
    </Layout>
}
export default SingleCarTemplate