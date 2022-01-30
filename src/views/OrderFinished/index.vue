<template>
  <layout>
    <container>
      <image-component :src="imageOrderFinished" />
      <h1>O seu pedido está pronto!</h1>
    </container>
  </layout>
</template>

<script>
import { Container, ImageComponent, Layout } from '@/views/OrderFinished/styles';
import OrderFinished from '../../assets/order-finished.png';

export default {
  name: 'OrderFinished',
  components: {
    Layout,
    Container,
    ImageComponent,
  },
  data() {
    return {
      imageOrderFinished: OrderFinished,
    };
  },
};
</script>
