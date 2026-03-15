document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sidebar Toggle Logic ---
    const mobileToggle = document.getElementById('mobileToggle');
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');

    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
    };

    if(mobileToggle) mobileToggle.addEventListener('click', toggleSidebar);
    if(menuBtn) menuBtn.addEventListener('click', toggleSidebar);

    // --- 2. Fetch API Health ---
    const checkApiHealth = async () => {
        const statusText = document.getElementById('apiStatusText');
        const uptimeText = document.getElementById('apiUptimeText');
        const statusIcon = document.getElementById('apiStatusIcon');

        try {
            // Give it a tiny delay just for a nice visual loading effect
            await new Promise(r => setTimeout(r, 600)); 

            const res = await fetch('/api/v1/health');
            const data = await res.json();

            if (data.success && data.data.status === 'active') {
                statusText.textContent = "Online & Healthy";
                
                // Format uptime (seconds to hours/mins)
                const uptimeSecs = data.data.uptime;
                const hours = Math.floor(uptimeSecs / 3600);
                const minutes = Math.floor((uptimeSecs % 3600) / 60);
                
                if (hours > 0) {
                    uptimeText.innerHTML = `<i data-lucide="check-circle"></i> Uptime: ${hours}h ${minutes}m`;
                } else {
                    uptimeText.innerHTML = `<i data-lucide="check-circle"></i> Uptime: ${minutes}m ${Math.floor(uptimeSecs % 60)}s`;
                }
                uptimeText.className = "kpi-trend positive";

            } else {
                throw new Error("Invalid response");
            }

        } catch (err) {
            console.error(err);
            statusText.textContent = "Server Offline";
            statusIcon.className = "kpi-icon i-red";
            uptimeText.innerHTML = `<i data-lucide="x-circle"></i> Connection failed`;
            uptimeText.className = "kpi-trend negative";
        }
        
        // Re-init lucide icons for new injected HTML
        lucide.createIcons();
    };

    checkApiHealth();
    
    // Initial icon render
    lucide.createIcons();


    // --- 3. Initialize Charts (Chart.js) ---
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Outfit', sans-serif";

    // Common premium chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    boxWidth: 8
                }
            }
        },
        scales: {
            x: { grid: { color: 'rgba(255, 255, 255, 0.05)' } },
            y: { grid: { color: 'rgba(255, 255, 255, 0.05)' } }
        }
    };

    // Donation Chart (Line/Area)
    const ctxDonation = document.getElementById('donationChart');
    if (ctxDonation) {
        // Create gradient for area chart
        const gradientBlue = ctxDonation.getContext('2d').createLinearGradient(0, 0, 0, 400);
        gradientBlue.addColorStop(0, 'rgba(59, 130, 246, 0.5)');
        gradientBlue.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

        new Chart(ctxDonation, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'Donations (₹)',
                    data: [120000, 150000, 110000, 180000, 210000, 190000, 240000, 280000, 260000, 310000],
                    borderColor: '#3b82f6',
                    backgroundColor: gradientBlue,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4, // Smooth curves
                    pointBackgroundColor: '#0f111a',
                    pointBorderColor: '#3b82f6',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(15, 17, 26, 0.9)',
                        titleFont: { size: 14, family: "'Outfit', sans-serif" },
                        bodyFont: { size: 14, family: "'Outfit', sans-serif" },
                        padding: 12,
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return '₹ ' + context.parsed.y.toLocaleString('en-IN');
                            }
                        }
                    }
                }
            }
        });
    }

    // Region Impact Chart (Doughnut)
    const ctxRegion = document.getElementById('regionChart');
    if (ctxRegion) {
        new Chart(ctxRegion, {
            type: 'doughnut',
            data: {
                labels: ['Rajasthan', 'Madhya Pradesh', 'Haryana', 'Uttar Pradesh'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        '#8b5cf6', // Purple
                        '#3b82f6', // Blue
                        '#10b981', // Green
                        '#fbbf24'  // Gold
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%', // Make it thin and highly premium looking
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#e2e8f0',
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }
        });
    }

});
