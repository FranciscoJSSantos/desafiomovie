<template>
  <div class="home">
    <div class="card">
      <router-link to="/movie/460465">
        <img
          :src="'https://image.tmdb.org/t/p/w300/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg'"
          alt="Demon Slayer"
          class="imagem-capa"
        />
        <div class="detalhes-filmes">
          <h1>Mortal Kombat</h1>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="SearchMovies()" class="caixa-de-pesquisa">
      <input
        type="text"
        placeholder="Que filme você está procurando?"
        v-model="search"
      />
      <input type="submit" value="Buscar" />
    </form>

    <div class="lista-de-filmes">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="link-filme">
          <div class="imagem-filme">
            <img
              :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path"
              alt="Movie Poster"
            />
          </div>
          <div class="detalhes-filmes">
            <p class="ano-lancamento">{{ movie.release_date }}</p>
            <h3>{{ movie.title }}</h3>
          </div>
        </router-link>
      </div>
    </div>

    <div class="lista-de-filmes">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="link-filme">
          <div class="imagem-filme">
            <img
              :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path"
              alt="Movie Poster"
            />
          </div>
          <div class="detalhes-filmes">
            <p class="y">{{ movie.release_date }}</p>
            <h3>{{ movie.title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    //Recebe o valor de busca.
    const search = ref("");

    //Recebe a lista de dados dos filmes.
    const movies = ref([]);

    //API key
    const api_key = "74c36a162fc26c48e695f4508734b27d";

    //Buscar todos os filmes.
    const SearchMovies = () => {
      if (search.value != "") {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${search.value}&language=pt-BR`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            movies.value = data.results;
            search.value = "";
          });
      }
    };

    //Buscar filmes populares.
    fetch(
      `https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=74c36a162fc26c48e695f4508734b27d&page=1&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        movies.value = data.results;
        search.value = "";
      });

    return {
      search,
      movies,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss">
.home {
  .card {
    position: relative;

    .imagem-capa {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    }
    .detalhes-filmes {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;

      h1 {
        color: #fff;
        margin-bottom: 16px;
      }
    }
  }
  .caixa-de-pesquisa {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: #fff;
        background-color: #496583;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #42b883;
        padding: 16px;
        border-radius: 8px;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4;

        &:active {
          background-color: #3b8070;
        }
      }
    }
  }
  .lista-de-filmes {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 0px;

    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;
    }

    .link-filme {
      display: flex;
      flex-direction: column;
      height: 100%;

      .imagem-filme {
        position: relative;
        display: block;

        img {
          display: block;
          width: 100%;
          height: 275px;
          object-fit: cover;
        }
      }

      .detalhes-filmes {
        background-color: #496583;
        padding: 16px 8px;
        flex: 1 1 100%;
        border-radius: 0px 0px 8px 8px;

        .ano-lancamento {
          color: #aaa;
          font-size: 14px;
        }

        h3 {
          color: #fff;
          font-weight: 600;
          font-size: 18px;
        }
      }
    }
  }
}
</style>