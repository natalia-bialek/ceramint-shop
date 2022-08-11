import * as React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/components/TabsComponent.css";

const tabPanelHeight = {
  height: "150px",
};

export default function TabsComponent(props) {
  return (
    <Tabs>
      <TabList>
        <Tab>Opis</Tab>
        <Tab>Specyfikacja</Tab>
      </TabList>
      <div className="react-tabs__tabContainer">
        <TabPanel style={tabPanelHeight}>
          {props.description && <p>{props.description}</p>}
        </TabPanel>
        <TabPanel style={tabPanelHeight}>
          <table>
            <tr>
              <td>Sztuk w magazynie:</td>
              <td>{props.stock}</td>
            </tr>
            <tr>
              <td>Wymiary</td>
              <td>aposdjaopsdj</td>
            </tr>
            {props.capacity !== 0 && (
              <tr>
                <td>Pojemność:</td>
                <td>{props.capacity}ml</td>
              </tr>
            )}
          </table>
        </TabPanel>
      </div>
    </Tabs>
  );
}
