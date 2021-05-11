<template>
  <div class="detalhes-filmes">
    <h2>{{ movie.original_title }}</h2>
    <p>{{ movie.release_date }}</p>
    <img
      :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path"
      alt="Movie Poster"
      class="imagem-filme"
    />
    <p>{{ movie.overview }}</p>
    <div>
      <button class="botao-voltar" @click="goBack">Voltar para o início</button>
    </div>
  </div>
</template>


<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

export default {
  methods: {
    // Método para voltar a página.
    goBack() {
      return this.$router.go(-1);
    },
  },

  setup() {
    //Recebe a lista de dado do filme.
    const movie = ref({});

    //Recebe o id do filme.
    const route = useRoute();

    //Busca os dados do filme.
    onBeforeMount(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=74c36a162fc26c48e695f4508734b27d&language=pt-BR`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
        });
    });

    return {
      movie,
    };
  },
};
</script>

<style lang="scss">
.detalhes-filmes {
  padding: 16px;

  h3 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .imagem-filme {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
  }

  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 25px;
  }
}
.botao-voltar {
  width: 88%;
  max-width: 261px;
  background-color: #42b883;
  padding: 12px;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  transition: 0.4;
  margin-bottom: 2rem;
  margin-left: 2rem;
  border: none;
}
</style>