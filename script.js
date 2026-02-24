const ctx = document.getElementById('earningsChart').getContext('2d');

// Create a gradient fill
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(108, 93, 211, 0.6)'); // Lighter at the top
gradient.addColorStop(0.5, 'rgba(108, 93, 211, 0.3)'); // Midpoint transition
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Fully transparent at the bottom

// Data limited to 5 months
const earningsData = [500, 750, 510, 950, 360];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Earnings',
            data: earningsData,
            borderColor: 'rgba(108, 93, 211, 1)',
            borderWidth: 2,
            backgroundColor: gradient,
            fill: true,
            pointBackgroundColor: 'rgba(108, 93, 211, 1)',
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            enabled: true,
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Earnings ($)'
                }
            }
        }
    }

});
