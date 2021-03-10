$(document).ready();

const createGraph = () => {
  fetch("/api/graph")
    .then(response => {
      return response.json();
    })
    .then(results => {
      console.log("Graph.js", results);
      // Get an example of the createdAt data.
      console.log("Graph.js", results[0].createdAt);
      const dailyScore = [];
      const waterIntake = [];
      const exercise = [];
      const calorieIntake = [];
      const sleepHour = [];
      const daysOfWeek = [];

      // const dailyScorearr = results;
      for (let i = 0; i < results.length; i++) {
        dailyScore.push(results[i].daily_score);
        waterIntake.push(results[i].water_intake);
        exercise.push(results[i].exercise);
        calorieIntake.push(results[i].calories);
        sleepHour.push(results[i].sleep);
        daysOfWeek.push(moment(results[i].createdAt).format("dddd"));
      }

      // createGraph(results);

      // const createGraph = () => {
      const ctx = document.getElementById("weekly-result");
      // eslint-disable-next-line no-unused-vars
      const myChart = new Chart(ctx, {
        // type: "line",
        // data: {
        //   datasets: [
        //     {
        //       label: "Daily Score",
        //       backgroundColor: "#000000",
        //       data: dailyScore,
        //       options: options
        //     }
        //   ]
        // },
        type: "bar",
        data: {
          labels: daysOfWeek,
          datasets: [
            {
              label: "Daily Score",
              backgroundColor: "none",
              borderColor: "#849396",
              fill: false,
              data: dailyScore,
              type: "line",
              pointRadius: 2,
              borderWidth: 3
            },
            {
              label: "Water Intake",
              backgroundColor: "#3e95cd",
              data: waterIntake
            },
            {
              label: "Calorie Intake",
              backgroundColor: "#8e5ea2",
              data: calorieIntake
            },
            {
              label: "Excercise",
              backgroundColor: "#3cba9f",
              data: exercise
            },
            {
              label: "Sleep",
              backgroundColor: "#e8c3b9",
              data: sleepHour
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "Self Score (Rating 1-10)"
          }
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    });
};

createGraph();
