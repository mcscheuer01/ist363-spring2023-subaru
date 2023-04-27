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
    </div>
    );
  }