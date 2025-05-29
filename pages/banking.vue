<template>
  <div class="banking-container">
    <h2>Banking Dashboard</h2>

    <section class="stats-cards">
      <Card class="stat-card" header="Total Balance">
        <div class="stat-value">\${{ totalBalance.toLocaleString() }}</div>
      </Card>
      <Card class="stat-card" header="Monthly Spending">
        <div class="stat-value">\${{ monthlySpending.toLocaleString() }}</div>
      </Card>
      <Card class="stat-card" header="Savings">
        <div class="stat-value">\${{ savings.toLocaleString() }}</div>
      </Card>
    </section>

    <section class="charts-section">
      <Card header="Balance Over Time" class="chart-card">
        <!-- Added inline style height -->
        <Chart style="height: 100%;" type="line" :data="balanceChartData" :options="chartOptions" />
      </Card>

      <Card header="Spending Breakdown" class="chart-card">
        <!-- Added inline style height -->
        <Chart style="height: 100%;" type="doughnut" :data="spendingChartData" :options="chartOptions" />
      </Card>
    </section>

    <section class="transactions-section">
      <h3>Recent Transactions</h3>
      <DataTable :value="transactions" :paginator="true" :rows="5" responsiveLayout="scroll">
        <Column field="date" header="Date" />
        <Column field="description" header="Description" />
        <Column field="category" header="Category" />
        <Column field="amount" header="Amount" :body="amountTemplate" />
      </DataTable>
    </section>
  </div>
</template>

<script setup>
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Chart from 'primevue/chart'
import { ref } from 'vue'

const totalBalance = ref(52340)
const monthlySpending = ref(1345)
const savings = ref(12400)

const balanceChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Balance',
      backgroundColor: 'rgba(0, 122, 217, 0.2)',
      borderColor: '#007ad9',
      data: [50000, 51000, 52000, 51800, 52500, 53000, 52340],
      fill: true,
      tension: 0.4,
    },
  ],
}

const spendingChartData = {
  labels: ['Rent', 'Groceries', 'Entertainment', 'Utilities', 'Others'],
  datasets: [
    {
      data: [500, 300, 200, 200, 145],
      backgroundColor: ['#007ad9', '#00bfa5', '#f9a825', '#ef5350', '#8e24aa'],
      hoverBackgroundColor: ['#005ea3', '#008d75', '#c17900', '#b71c1c', '#6a1b9a'],
    },
  ],
}

const chartOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
}

const transactions = ref([
  { id: 1, date: '2025-05-01', description: 'Rent payment', category: 'Rent', amount: -1200 },
  { id: 2, date: '2025-05-03', description: 'Grocery store', category: 'Groceries', amount: -230 },
  { id: 3, date: '2025-05-10', description: 'Salary', category: 'Income', amount: 3500 },
  { id: 4, date: '2025-05-15', description: 'Electricity bill', category: 'Utilities', amount: -90 },
  { id: 5, date: '2025-05-18', description: 'Movie night', category: 'Entertainment', amount: -45 },
  { id: 6, date: '2025-05-20', description: 'Savings deposit', category: 'Savings', amount: -500 },
])

function amountTemplate(row) {
  return row.amount < 0
      ? `<span style="color: #ef5350;">$${Math.abs(row.amount)}</span>`
      : `<span style="color: #00c853;">$${row.amount}</span>`
}
</script>

<style scoped>
.banking-container {
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #007ad9;
}

.stats-cards {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.stat-card {
  flex: 1 1 30%;
  min-width: 220px;
  text-align: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.charts-section {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.chart-card {
  flex: 1 1 45%;
  min-width: 300px;
  height: 320px;
  /* ensure cards use flex container properly */
  display: flex;
  flex-direction: column;
}

/* Make Chart fill the card */
.chart-card > .p-chart {
  flex-grow: 1;
}

.transactions-section h3 {
  margin-bottom: 1rem;
  color: #007ad9;
}
</style>