<template>
  <div>
    <ticket-response :boleta="true" />
  </div>
</template>

<script>
import TicketResponse from '@/views/TicketResponse.vue';

export default {
  components: {
    TicketResponse,
  },
};
</script>
