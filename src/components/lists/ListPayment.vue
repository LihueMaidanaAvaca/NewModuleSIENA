<template>
   <div class="payments-banner">
      <span class="payment-date">Fecha</span>
      <span class="payment-type">VEP/Boleta</span>
      <span class="payment-amount">Importe</span>
    </div>
    <ul class="payments-list">
      <li v-for="(pago, index) in pagos" :key="index">
        <span class="payment-date">{{ pago.fecha }}</span>
        <span class="payment-type">{{ pago.tipo }}</span>
        <span class="payment-amount">{{ pago.importe }}</span>
      </li>
    </ul>
</template>

<script>

export default {
  name: 'ListPayment',
  data() {
    return {
      pagos: [
        { fecha: '2023-08-15', tipo: 'VEP', importe: '$120.00' },
        { fecha: '2023-08-14', tipo: 'Boleta', importe: '$250.00' },
        { fecha: '2023-08-13', tipo: 'VEP', importe: '$180.50' },
        // Agrega más pagos aquí...
      ],
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.payments-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 8px;
  font-weight: bold;
}

.payments-list {
  list-style: none;
  padding: 0;
}

.payments-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 8px;
}

.payment-date,
.payment-type,
.payment-amount {
  flex-basis: 30%;
}
</style>