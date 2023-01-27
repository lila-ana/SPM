import React, { useState } from "react";
import Detail from "../Components/Solutions/detail";
import Layout from "../layout";

export default function Solutions() {
  const [name, setName] = useState(null);
  return (
    <div>
      <Layout name={name}>
        <Detail setName={setName} />
      </Layout>
    </div>
  );
}
