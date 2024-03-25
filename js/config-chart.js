var dataCategories = {
  violations: {
    yearlyData: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "جميع الانتهاكات",
          data: [200, 250, 300, 280, 320],
          backgroundColor: "#ff6384",
        },
        {
          label: "هدم المنازل",
          data: [50, 60, 55, 65, 70],
          backgroundColor: "#ffcd56",
        },
      ],
    },
    monthlyData: {
      2019: {
        "جميع الانتهاكات": [20, 18, 22, 25, 24, 26, 28, 27, 26, 25, 24, 30],
        "هدم المنازل": [5, 10, 6, 5, 7, 5, 6, 4, 5, 6, 7, 5],
      },
      2020: {
        "جميع الانتهاكات": [21, 14, 19, 21, 14, 19, 21, 14, 19, 21, 14, 19],
        "هدم المنازل": [5, 10, 6, 5, 3, 6, 5, 3, 6, 5, 3, 6],
      },
      2021: {
        "جميع الانتهاكات": [25, 18, 23, 25, 18, 23, 25, 18, 23, 25, 18, 23],
        "هدم المنازل": [5, 10, 7, 6, 4, 7, 6, 4, 7, 6, 4, 7],
      },
      2022: {
        "جميع الانتهاكات": [30, 23, 28, 30, 23, 28, 30, 23, 28, 30, 23, 28],
        "هدم المنازل": [5, 10, 6, 5, 3, 6, 5, 3, 6, 5, 3, 6],
      },
      2023: {
        "جميع الانتهاكات": [28, 21, 26, 28, 21, 26, 28, 21, 26, 28, 21, 26],
        "هدم المنازل": [5, 10, 7, 6, 4, 7, 6, 4, 7, 6, 4, 7],
      },
    },
  },
  crimes: {
    yearlyData: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "جميع الجرائم",
          data: [150, 200, 180, 210, 230],
          backgroundColor: "#36a2eb",
        },
        {
          label: "سرقات",
          data: [30, 40, 35, 45, 50],
          backgroundColor: "#ff9f40",
        },
      ],
    },
    monthlyData: {
      2019: {
        "جميع الجرائم": [12, 15, 13, 16, 14, 13, 15, 14, 13, 16, 15, 18],
        سرقات: [3, 5, 3, 4, 3, 5, 4, 3, 4, 5, 4, 6],
      },
      2020: {
        "جميع الجرائم": [16, 18, 17, 20, 19, 18, 17, 20, 19, 18, 17, 20],
        سرقات: [4, 6, 4, 5, 6, 4, 5, 6, 4, 5, 6, 4],
      },
      2021: {
        "جميع الجرائم": [18, 20, 19, 22, 21, 20, 19, 22, 21, 20, 19, 22],
        سرقات: [5, 7, 5, 6, 7, 5, 6, 7, 5, 6, 7, 5],
      },
      2022: {
        "جميع الجرائم": [21, 23, 22, 25, 24, 23, 22, 25, 24, 23, 22, 25],
        سرقات: [6, 8, 6, 7, 8, 6, 7, 8, 6, 7, 8, 6],
      },
      2023: {
        "جميع الجرائم": [23, 25, 24, 27, 26, 25, 24, 27, 26, 25, 24, 27],
        سرقات: [7, 9, 7, 8, 9, 7, 8, 9, 7, 8, 9, 7],
      },
    },
  },
  resistanceHarvest: {
    yearlyData: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "عمليات المقاومة",
          data: [80, 100, 90, 120, 130],
          backgroundColor: "#4bc0c0",
        },
        {
          label: "استشهاديون",
          data: [20, 25, 22, 30, 35],
          backgroundColor: "#c9cbcf",
        },
      ],
    },
    monthlyData: {
      2019: {
        "عمليات المقاومة": [7, 8, 7, 9, 8, 7, 8, 9, 8, 7, 8, 9],
        استشهاديون: [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
      },
      2020: {
        "عمليات المقاومة": [8, 9, 8, 10, 9, 8, 9, 10, 9, 8, 9, 10],
        استشهاديون: [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4],
      },
      2021: {
        "عمليات المقاومة": [9, 10, 9, 11, 10, 9, 10, 11, 10, 9, 10, 11],
        استشهاديون: [4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5],
      },
      2022: {
        "عمليات المقاومة": [10, 11, 10, 12, 11, 10, 11, 12, 11, 10, 11, 12],
        استشهاديون: [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6],
      },
      2023: {
        "عمليات المقاومة": [11, 12, 11, 13, 12, 11, 12, 13, 12, 11, 12, 13],
        استشهاديون: [6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7],
      },
    },
  },
  // You can add more categories here if needed...
};

document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  window.myChart = new Chart(ctx, {
    type: "line", // Continue with the line chart
    data: dataCategories.violations.yearlyData,
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
      plugins: {
        legend: {
          labels: {
            // This more stylistic font setting can make the legend easier to read
            font: {
              size: 14,
              style: "italic",
              weight: "bold",
            },
          },
        },
        tooltip: {
          // Use a callback to customize tooltip content if needed
          callbacks: {
            title: function (context) {
              return context[0].label + " (Click for monthly data)";
            },
          },
        },
      },
      elements: {
        line: {
          tension: 0.3, // Makes the line slightly curved
        },
        point: {
          radius: 5, // Increases the size of the point
          hoverRadius: 8, // Increases the size when hovered
          borderWidth: 2,
          borderColor: "white",
        },
      },
      plugins: [
        {
          beforeInit: function (chart) {
            chart.data.datasets.forEach(function (dataset, index) {
              // Apply a unique color and line style per dataset
              var baseColor = getBaseColor(index); // A function you'll define to get a color based on the index
              dataset.borderColor = baseColor;
              dataset.backgroundColor = "transparent"; // No fill for a cleaner look
              dataset.borderWidth = 3;
              dataset.borderDash = index % 2 === 0 ? [] : [5, 5]; // Dashed lines for every other dataset
            });
          },
        },
      ],
      onClick: function (e) {
        var activePoints = this.getElementsAtEventForMode(
          e,
          "nearest",
          { intersect: true },
          true
        );
        if (activePoints.length > 0) {
          var yearIndex = activePoints[0].index;
          var yearLabel = this.data.labels[yearIndex];
          var monthlyData = dataCategories.violations.monthlyData[yearLabel];
          if (monthlyData) {
            updateChartForMonthlyData(monthlyData, yearLabel);
          }
        }
      },
    },
  });

  function getBaseColor(index) {
    // Define a palette of colors to choose from
    var palette = [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF",
      "#C9CBCF",
      "#FF9F40",
    ];
    return palette[index % palette.length]; // Cycle through the palette based on index
  }

  function updateChartForMonthlyData(monthlyData, yearLabel) {
    // Assuming monthly labels are consistent across years
    var monthLabels = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var datasets = [];
    // Construct datasets from monthlyData
    for (var key in monthlyData) {
      datasets.push({
        label: `${key} in ${yearLabel}`,
        data: monthlyData[key],
        backgroundColor: key === "جميع الانتهاكات " ? "#ff6384" : "#ffcd56",
      });
    }

    myChart.data.labels = monthLabels;
    myChart.data.datasets = datasets;
    myChart.update();
  }

  function adjustChartOptionsForScreenSize() {
    var width = window.innerWidth;
    // Example: Adjusting options for a smaller screen
    if (width < 600) {
      myChart.update();
    } else {
      // Reset to default or adjust for larger screens
      myChart.update();
    }
  }


  function setupTabEventListeners() {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', function() {
        var category = this.getAttribute('data-category');
        if (category) {
          updateChartData(category);
          setActiveTab(this.id);
        }
      });
    });
  }
  
  function updateChartData(category) {
    var data = dataCategories[category].yearlyData;
    window.myChart.data.labels = data.labels;
    window.myChart.data.datasets = data.datasets;
    window.myChart.update();
  }
  
  function setActiveTab(activeTabId) {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(activeTabId).classList.add('active');
  }

  // Listen for window resize events to adjust the chart
  window.addEventListener("resize", adjustChartOptionsForScreenSize);
  setupTabEventListeners();
  
  
  
});
