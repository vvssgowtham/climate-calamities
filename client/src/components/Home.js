import React from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <center>
        <h1>
          <u>ADVANCED CALAMITIES & CLIMATIC CONDITION</u>
        </h1>
      </center>
      <div className="card1">
        <div className="cardbody1">
            <button onClick={() => navigate("/earthquakes")}>Earthquakes</button>
            <button onClick={() => navigate("/pollution")}>Air Pollution</button>
            <button onClick={() => navigate("/floods")}>Floods</button>
        </div>
      </div>
      <div className="card2">
        <div className="cardbody2">
        <h2>Introduction</h2>
          <p>
            Climatic conditions encompass various atmospheric elements that
            influence the Earth's climate. Temperature, determined by the
            average weather over an extended period, can lead to extreme
            conditions such as heatwaves or cold snaps. Precipitation, including
            rainfall and snowfall, contributes to climate patterns and can
            result in phenomena like droughts and floods. Humidity, the amount
            of water vapor in the air, plays a role in comfort levels and
            environmental moisture. Wind patterns, both global and local, shape
            climates and can give rise to hurricanes, tornadoes, and cyclones.
            Earth is divided into climate zones, each characterized by specific
            climatic conditions, such as tropical, subtropical, temperate, and
            polar zones.
            <br />
            <br /> Calamities, on the other hand, represent natural disasters
            that arise from climatic conditions. Hurricanes, typhoons, and
            cyclones are powerful tropical storms with destructive winds and
            heavy rainfall. Tornadoes are violent windstorms marked by
            funnel-shaped clouds, causing localized damage. Earthquakes result
            from the movement of tectonic plates beneath the Earth's surface and
            can lead to tsunamis, landslides, and infrastructure damage. Floods
            occur when water overflows onto normally dry land, with flash floods
            and river floods being common types. Droughts are prolonged periods
            of abnormally low precipitation, impacting water supply,
            agriculture, and ecosystems. Wildfires, often exacerbated by dry
            conditions and winds, are uncontrolled fires that spread rapidly
            through vegetation. Extreme heatwaves and cold spells involve
            unusually high or low temperatures, affecting health, agriculture,
            and energy demand.
            <br />
            <br /> Addressing climatic challenges and preparing for potential
            calamities are essential for minimizing their impact on communities.
            Climate change adds complexity to these patterns, emphasizing the
            need for adaptation and sustainable practices. Early warning
            systems, resilient infrastructure, and community awareness play
            pivotal roles in reducing the adverse effects of climatic
            calamities. Developing strategies for climate resilience is crucial
            for the well-being of both human and natural systems in the face of
            evolving climatic conditions.
            <br />
            <br /> Climate change adds a layer of complexity to existing
            climatic conditions and calamities. The warming of the Earth's
            climate due to increased greenhouse gas emissions leads to shifts in
            weather patterns, contributing to more frequent and severe extreme
            events. Rising sea levels, a consequence of melting ice caps and
            glaciers, heighten the risk of storm surges and coastal flooding
            during hurricanes and typhoons. Changing precipitation patterns can
            exacerbate droughts or intensify rainfall, amplifying the likelihood
            of floods and landslides. The interconnected nature of these changes
            underscores the importance of global efforts to mitigate climate
            change through reducing emissions and adopting sustainable
            practices. <br />
            <br /> Adaptation becomes crucial in the face of these evolving
            challenges. This involves implementing strategies to minimize
            vulnerabilities and enhance resilience at both individual and
            community levels. Sustainable land-use planning, the development of
            climate-resilient infrastructure, and the promotion of eco-friendly
            practices contribute to long-term resilience. Additionally,
            fostering awareness and education about climate-related risks
            empowers communities to make informed decisions and take proactive
            measures. As we navigate a changing climate, a holistic approach
            that combines mitigation and adaptation efforts is essential for
            creating a more sustainable and resilient future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
