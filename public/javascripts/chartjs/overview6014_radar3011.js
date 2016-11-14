var ctx = document.getElementById('radar6014_3011');
var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Nightvision [m]', 'Megapixel', 'Power Consumptions [W]', 'IR LEDs', 'Focal Length [mm]'],
        datasets: [{
          label: 'IN-6014 HD',
          backgroundColor: 'rgba(2, 117, 216, 0.5)',
          borderColor: 'rgba(2, 117, 216, 1)',
          data: [10, 1, 8, 12, 4.2],
        }, {
          label: 'IN-3011',
          backgroundColor: 'rgba(240, 173, 78, 0.5)',
          borderColor: 'rgba(240, 173, 78, 1)',
          data: [12, 0.3, 7.6, 10, 6],
        },],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          },],
        },
      },
    });
