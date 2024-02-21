import React from "react";
import { useNavigate } from "react-router-dom";

import "./pollution.css";

function Pollution() {
    const navigate = useNavigate();
  return (
    <div className="pollution">
      <center>
        <h1 onClick={() => navigate("/")} style={{cursor: "pointer"}}>
          <u>POLLUTION</u>
        </h1>
      </center>
      <div className="pollutioncard1">
        <div className="pollutionbody1">
          <h2>Abstract</h2>
          <p>
            Air, the elixir of life, faces increasing threats from anthropogenic
            activities, particularly in developing nations like India. Constant
            industrial growth, transportation emissions, and domestic activities
            significantly impact air quality, necessitating efficient monitoring
            and prediction solutions. This work explores the potential of
            machine learning techniques for air quality analysis and prediction
            in India.
            <br />
            <br />
            Air pollution in the modern world is a matter of grave concern. Due
            to rapid expansion in commercial social, and economic aspects, the
            pollutant concentrations in different parts of the world continue to
            increase and disrupt human life. Thus, monitoring the pollutant
            levels is of primary importance to keep the pollutant concentrations
            under control. Regular monitoring enables the authorities to take
            appropriate measures in case of high pollution.
            <br />
            <br />
            Daily industrial, transport, and domestic activities are stirring
            hazardous pollutants in our environment. Monitoring and predicting
            air quality have become essentially important in this era,
            especially in developing countries like India. In contrast to the
            traditional methods, the prediction technologies based on machine
            learning techniques are proved to be the most efficient tools to
            study such modern hazards.
            <br />
            <br />
            The Gaussian Naive Bayes model achieves the highest accuracy while
            the Support Vector Machine model exhibits the lowest accuracy. The
            performances of these models are evaluated and compared through
            established performance parameters. The XGBoost model performed the
            best among the other models and gets the highest linearity between
            the predicted and actual data.
          </p>
          <h2>Introduction</h2>
          <p>
            Energy consumption and its consequences are inevitable in modern age
            human activities. The anthropogenic sources of air pollution include
            emissions from industrial plants; automobiles; planes; burning of
            straw, coal, and kerosene; aerosol cans, etc.
            <br />
            From industrial smokestacks and vehicle exhausts to burning waste
            and agricultural practices, human activities spew a cocktail of
            harmful pollutants into the atmosphere. These include notorious
            culprits like carbon monoxide (CO), carbon dioxide (CO2),
            particulate matter (PM), nitrogen dioxide (NO2), sulfur dioxide
            (SO2), and ozone (O3), impacting not just human health but the
            entire planet.Air pollution can cause a multitude of serious
            diseases in humans, from bronchitis to heart disease, from pneumonia
            to lung cancer, etc. Poor air conditions lead to other contemporary
            environmental issues like global warming, acid rain, reduced
            visibility, smog, aerosol formation, climate change, and premature
            deaths.
          </p>
          <h2>A Global Threat to Health and Environment:</h2>
          <p>
            The consequences of air pollution are far-reaching and global. It
            triggers a range of respiratory illnesses in humans, from bronchitis
            and pneumonia to lung cancer and heart disease. Beyond human health,
            it disrupts ecosystems, affecting animals and plant life. The list
            of environmental woes linked to air pollution is extensive,
            including:
            <br /> Global warming: Increased greenhouse gases trap heat,
            contributing to rising global temperatures and disrupting weather
            patterns.
            <br /> Acid rain: Sulfur and nitrogen oxides in the air combine
            with water vapor to form acidic rain, damaging soil, forests, and
            aquatic ecosystems.
            <br /> Reduced visibility: Smog, formed by pollutants reacting with
            sunlight, creates hazy conditions, impacting safety and visibility.
            <br /> Climate change: Air pollution amplifies climate change,
            leading to more extreme weather events, rising sea levels, and
            altered agricultural seasons.
            <br /> Damage to historical monuments: Pollutants can erode and
            discolor building materials, jeopardizing our cultural heritage.
            <br />
            <br />
            Monitoring and predicting air quality, particularly in densely
            populated urban areas, is crucial for protecting public health and
            the environment. The Air Quality Index (AQI) serves as a crucial
            tool, indicating the level of pollution and associated health risks.
            <br />
            <br />
            While studies often focus on developing countries, where air
            pollution levels are particularly severe, the issue demands a global
            response. We need comprehensive research and action plans to:
            <br />
            <br /> Develop advanced air quality prediction models: Utilizing
            machine learning and other techniques, we can better forecast air
            quality and inform preventive measures.
            <br /> Reduce emissions: Transitioning to clean energy sources,
            implementing stricter regulations, and promoting sustainable
            practices are essential.
            <br /> Raise awareness: Educating the public about the health and
            environmental impacts of air pollution can drive individual and
            collective action.
            <br />
            <br />
            By acknowledging the global nature of air pollution and taking
            coordinated action, we can breathe cleaner air and create a
            healthier planet for all.
            <br /> Traditional methods are limited in capturing complex
            relationships and real-time trends.
            <br /> Machine learning (ML) offers powerful tools for analyzing
            vast datasets, identifying patterns, and making data-driven
            predictions.
            <br />
            Using ML to predict Quality of Air using XGBoost Model : <br />
            <center>
              <img src="Indra/map.png" alt="pollution" />
            </center>
            Our dataset(global air pollution dataset.csv)contains following
            attributes:
            <br />
            <br /> Country: Name of the country  City: Name of the city  AQI
            Value: Overall AQI value of the city  AQI Category: Overall AQI
            category of the city  CO AQI Value: AQI value of Carbon Monoxide of
            the city  CO AQI Category: AQI category of Carbon Monoxide of the
            city  Ozone AQI Value: AQI value of Ozone of the city  Ozone AQI
            Category: AQI category of Ozone of the city  NO2 AQI Value: AQI
            value of Nitrogen Dioxide of the city  NO2 AQI Category: AQI
            category of Nitrogen Dioxide of the city
            <br />
            <br />
            <h2>
              This dataset provides geolocated information about the following
              pollutants:
            </h2>
            Nitrogen Dioxide [NO2]: Nitrogen Dioxide is one of the several
            nitrogen oxides. It is introduced into the air by natural phenomena
            like entry from stratosphere or lighting. At the surface level,
            however, NO2 forms from cars, trucks and buses emissions, power
            plants and off road equipment. Exposure over short periods can
            aggravate respiratory diseases, like asthma. Longer exposures may
            contribute to develoment of asthma and respiratory infections.
            People with asthma, children and the elderly are at greater risk for
            the health effects of NO2.
            <br />
            <br />
            Ozone [O3] : The Ozone molecule is harmful for outdoor air quality
            (if outside of the ozone layer). At surface level, ozone is created
            by chemical reactions between oxides of nitrogen and volatile
            organic compounds (VOC). Differently from the good ozone located in
            the upper atmosphere, ground level ozone can provoke several health
            problems like chest pain, coughing, throat irritation and airway
            inflammation. Furthermore it can reduce lung function and worsen
            bronchitis, emphysema, and asthma. Ozone affects also vegetation and
            ecosystems. In particular, it damages sensitive vegetation during
            the growing season.
            <br />
            <br />
            Carbon Monoxide [CO] : Carbon Monoxide is a colorless and odorless
            gas. Outdoor, it is emitted in the air above all by cars, trucks and
            other vehicles or machineries that burn fossil fuels. Such items
            like kerosene and gas space heaters, gas stoves also release CO
            affecting indoor air quality. Breathing air with a high
            concentration of CO reduces the amount of oxygen that can be
            transported in the blood stream to critical organs like the heart
            and brain. At very high levels, which are not likely to occur
            outdoor but which are possible in enclosed environments. CO can
            cause dizziness, confusion, unconsciousness and death.
            <br />
            <br />
            ParticulateMatter[PM2.5]: Atmospheric Particulate Matter, also known
            as atmospheric aerosol particles, are complex mixtures of small
            solid and liquid matter that get into the air. If inhaled they can
            cause serious heart and lungs problem. They have been classified as
            group 1 carcinogen by the International Agengy for Research on
            Cancer (IARC). PM10 refers to those particules with a diameter of 10
            micrometers or less. PM2.5 refers to those particles with a diameter
            of 2.5 micrometers or less.
            <br />
            <br />
            Data preprocessing: Quality of data is the first and most important
            prerequisite for effective visualization and creation of efficient
            ML models. The preprocessing steps help in reducing the noise
            present in the data which eventually increases the processing speed
            and generalization capability of ML algorithms. Outliers and missing
            data are the two most common errors in data extraction and
            monitoring applications.The data preprocessing step performs various
            operations on data such as filling out not-a-number (NAN) data,
            removing or changing outlier data.
            <br />
            <br />
            Data Visualization:
            <br />
            Histograms/Distribution Plots: Visualize the distribution of AQI
            values for each pollutant.
            <br />
            <center>
              <img src="Indra/plot.png" alt="plot" />
            </center>
            Box Plots: the distribution of AQI values across different AQI
            categories
            <br />
            <center>
              <img src="Indra/boxplot.png" alt="boxplot" />
            </center>
            Feature Selection :<br />
            <br />
            While evaluating our features, we also addressed issues related to
            collinearity, ensuring that our selected features provided unique
            and valuable information for our predictive model.
            <br />
            <br />
            Ultimately, after thorough analysis and consideration, we selected
            the following features as inputs for predicting air quality: CO AQI
            Value, Ozone AQI Value, NO2 AQI Value, and PM2.5 AQI Value. These
            features were chosen based on their strong correlations with air
            quality categories and their significant importance scores derived
            from feature importance analysis.
            <br />
            <br />
            Our rationale for selecting these features lies in their known
            impacts on air quality and their observed associations with air
            quality classifications. By focusing on these key pollutants, we aim
            to build a predictive model that accurately captures the dynamics of
            air quality.
            <br />
            <br />
            In summary, our feature selection process prioritized the most
            influential factors for predicting air quality, leading us to select
            the CO AQI Value, Ozone AQI Value, NO2 AQI Value, and PM2.5 AQI
            Value as our primary features for the predictive model.
            <br />
            <br />
            Data Splitting:
            <br />
            <br />
            In the data splitting step, we divided our dataset into two subsets:
            a training set and a testing set.
            <br />
            <br />
            The training set, comprising approximately 70-80% of the data, was
            used to train the predictive model.
            <br />
            <br />
            The testing set, containing the remaining data, served as an
            independent dataset to evaluate the model's performance.
            <br />
            <br />
            Model Training:
            <br />
            <br />
            With the training set prepared, we trained an XGBoost classification
            model, a powerful machine learning algorithm known for its
            effectiveness in handling complex datasets.
            <br />
            <br />
            The XGBoost model was trained to predict the air quality category
            (AQI Category) based on the selected features, including CO AQI
            Value, Ozone AQI Value, NO2 AQI Value, and PM2.5 AQI Value. During
            training, we specified parameters such as the number of trees
            (n_estimators), learning rate, and maximum tree depth (max_depth) to
            optimize the model's performance.
            <br />
            <br />
            Model Evaluation:
            <br />
            <br />
            After training the model, we evaluated its performance using the
            testing set.
            <br />
            <br />
            Common evaluation metrics for multi-class classification tasks, such
            as accuracy, precision, recall, and F1-score, were calculated to
            assess the model's predictive accuracy and effectiveness.
            <br />
            <br />
            Additionally, we visualized the model's performance using confusion
            matrices, which provide insights into the model's ability to
            correctly classify instances into different air quality categories.
            <br />
            <br />
            By analyzing these evaluation metrics and visualizations, we gained
            a comprehensive understanding of the model's strengths and
            weaknesses, allowing us to make informed decisions regarding its
            deployment and potential improvements.
            <br />
            <br />
            <center>
              <img src="Indra/scores.png" alt="scores" />
            </center>
            ROC:
            <br />
            <br />
            The Receiver Operating Characteristic (ROC) curve is a useful tool
            for evaluating the performance of a classification model,
            particularly in binary classification tasks. While ROC curves are
            commonly used in binary classification scenarios, they can be
            adapted for multi-class classification as well, though it requires
            considering each class individually.
            <br />
            <br />
            <center>
              <img src="Indra/roc.png" alt="roc" />
            </center>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pollution;
