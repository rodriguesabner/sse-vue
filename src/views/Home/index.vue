<template>
  <layout>
    <container>
      <wrapper-image>
        <image-component
          :src="homeImage"
        />
      </wrapper-image>
      <wrapper-info>
        <h1>
          Aguarde enquanto preparamos o seu pedido...
        </h1>
        <p>
          <b>Você sabia?</b> O nosso restaurante é um dos mais tradicionais da cidade de São Paulo.
        </p>
      </wrapper-info>

      <spinner-component>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </spinner-component>
    </container>
  </layout>
</template>

<script>
import {
  Container, Image, Layout, SpinnerComponent, WrapperImage, WrapperInfo,
} from './styles';
import HomeImage from '../../assets/home-image.png';

export default {
  name: 'Home',
  components: {
    Layout,
    Container,
    WrapperImage,
    'image-component': Image,
    WrapperInfo,
    SpinnerComponent,
  },
  data() {
    return {
      homeImage: HomeImage,
      listening: false,
    };
  },
  async mounted() {
    await this.registerClientToSSE();
  },
  methods: {
    registerClientToSSE() {
      const { token } = this.$route.params;

      const eventSource = new EventSource(`http://localhost:3010/sse/${token}`);
      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);

        this.listening = false;
        this.$router.push('/order/order-finished', {
          state: {
            order: data,
          },
        });

        eventSource.close();
      };
    },
  },
};
</script>
