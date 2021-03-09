$(document).ready();

const graphInfo = () => {
  fetch("/api/graph")
    .then(response => {
      return response.json();
    })
    .then(results => {
      console.log("Graph.js", results);
      createGraph(results);
    });
};
graphInfo();
const createGraph = () => {
  const ctx = document.getElementById("weekly-result");
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      datasets: [
        {
          label: "Water Intake",
          backgroundColor: "#3e95cd",
          data: [7, 6, 5, 5, 6, 7, 5]
        },
        {
          label: "Calorie Intake",
          backgroundColor: "#8e5ea2",
          data: [4, 6, 8, 5, 6, 4, 6]
        },
        {
          label: "Excercise",
          backgroundColor: "#3cba9f",
          data: [6, 5, 4, 5, 6, 7, 9]
        },
        {
          label: "Sleep",
          backgroundColor: "#e8c3b9",
          data: [7, 6, 6, 7, 8, 8, 7]
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
};
