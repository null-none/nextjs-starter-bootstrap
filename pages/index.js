import Head from "next/head";
import { Button } from 'reactstrap';
import React from 'react';


const siteinfo = {
  title: "Title of Index Page",
  description: "Description of Index Page",
};
const Home = () => {
  return (
    <>
        <Button color="danger">Danger!</Button>
    </>
  );
};
Home.getInitialProps = () => {
  return { siteinfo: siteinfo };
};
export default Home;
