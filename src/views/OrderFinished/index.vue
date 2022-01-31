<template>
  <layout>
    <container>
      <image-component :src="imageOrderFinished"/>
      <h1>O seu pedido está pronto!</h1>

      <div class="pedido">
        <ul>
          <li v-for="(item, index) of order" :key="index">
            <p>{{ item.produto }}</p>
            <p>
              R$ {{ item.valor.toFixed(2) }}
            </p>
          </li>
        </ul>

        <div class="total">
          <p>Total</p>
          <p>
            R$ {{ total }}
          </p>
        </div>
      </div>
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
      order: [],
    };
  },
  async mounted() {
    await this.getDataFromParams();
  },
  computed: {
    total() {
      const price = this.order.reduce((acc, item) => acc + item.valor, 0);
      return price.toFixed(2);
    },
  },
  methods: {
    async getDataFromParams() {
      const data = this.$route.params;
      this.order = data.order;
    },
  },
};
</script>
