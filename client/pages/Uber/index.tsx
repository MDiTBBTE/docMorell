import React from "react";
import Layout from "../../layouts/Layout";
import { CONTENT } from "../../public/config.lang";



const Uber = ()=> {

return (
        // <Layout>
                <div className="container">
                        <div>
                                {CONTENT.Uber.map((e) => (
                                        <Uber key={e.title} {...e} />
                                ))}
                        </div>
                </div>
        //  </Layout>
    );
}

 export default Uber