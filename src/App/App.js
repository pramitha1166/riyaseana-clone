import './App.css';
import {Container, makeStyles} from '@material-ui/core';
import Header from '../component/Header';
import SearchTool from '../component/SearchTool';
import SideBar from '../component/SideBar';
import SingleVehicle from "../component/SingleVehicle"
import {BrowserRouter as Route, Router, Switch, Link} from "react-router-dom";
import ViewVehicle from "../component/ViewVehicle";

const useStyles = makeStyles({
  appMain: {
    //paddingLeft: '260px',
    width: '100%',
    display: "block",
    margin: 0,
    padding: 0,
    verticalAlign: "baseline",
    display: "block"
  },
  bodyMain: {
    marginLeft: '20px',
    marginRight: '20px',
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
})

function App() {

  const classes = useStyles();

  return (
    <>
      
      <div className={classes.appMain}>
        <Header />
        <Container minWidth="xs">
         
          <SearchTool />
         
          <hr style={{marginTop: "20px"}}/>

          <div className={classes.bodyMain}>
      

            <SingleVehicle />
            <SingleVehicle />
            <SingleVehicle />
            <SingleVehicle />
            <SingleVehicle />
            <SingleVehicle />
            <SingleVehicle />
            <SingleVehicle />
            <SingleVehicle />
            <SingleVehicle />
            <SingleVehicle />
          </div>

      
        </Container>
      </div>
    </>
  );
}

export default App;
