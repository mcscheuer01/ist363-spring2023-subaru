import { useState } from "react";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Link from "next/link";
import Heading from "../../components/Heading";
import Grid from "../../components/Grid";
import Tabs from "../../components/Tabs";

import { getAllVehicles } from "../../lib/api";

import { filterAllVehicleTypes } from "../../lib/utilities";

export async function getStaticProps() {
  const vehiclesData = await getAllVehicles();
  return {
    props: {
      vehiclesData
      },
    };
}

  // Get external data from the file system, API, DB, etc.

const VehiclesPage = ({ vehiclesData }) => {
    const [activeVehicleType, setActiveVehicleType] = useState("all");
    const vehicleTypes = ["all", ...filterAllVehicleTypes(vehiclesData)];
    
    const filteredVehicles = vehiclesData.filter((vehicle) => {
        const { vehicleTypes } = vehicle.node.vehicleInformation;
        return activeVehicle === "all" || vehicleTypes.includes(activeVehicleType)
    });

    return (
      <Layout>
        <Container>
          <Heading 
            level={1} 
            textAlign="center"
          >Vehicles</Heading>
          <Tabs 
            items={vehicleTypes} 
            activeItem={activeVehicleType}
            changeHandler={setActiveVehicleType}
          />
          <Grid 
            activeItem={activeVehicleType}
            items={filteredVehicles}
          />
        </Container>
      </Layout>
        )
      }
      export default VehiclesPage