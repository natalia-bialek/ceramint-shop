import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/components/TabsComponent.css";

export default function TabsComponent(props) {
  return (
    <Tabs>
      <TabList>
        <Tab>Opis</Tab>
        <Tab>Specyfikacja</Tab>
      </TabList>
      <TabPanel>{props.description && <p>{props.description}</p>}</TabPanel>
      <TabPanel>
        <p>Sztuk w magazynie: {props.stock}</p>
        <p>Wymiary: </p>
        <p>Tworzywo: </p>
        {props.capacity !== 0 && <p>Pojemność: {props.capacity}ml</p>}
      </TabPanel>
    </Tabs>
  );
}
