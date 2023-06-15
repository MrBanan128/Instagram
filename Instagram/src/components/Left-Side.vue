<template>
  <div class="main">
    <div class="menu">
      <div class="logo">
        <h1>Vuestagram</h1>
    </div>
      <div class="single-element">
        <router-link to="#">
          <img src="../assets/home.png" alt="glowna">
          <a class="strona_glowna">Strona Główna</a>
        </router-link>
      </div>
      <div class="single-element">
        <router-link to="#">
          <img src="../assets/loupe.png" alt="loupe">
          <a class="szukaj">Szukaj</a>
        </router-link>
      </div>
      <div class="single-element">
        <router-link to="#">
          <img src="../assets/explore.png" alt="explore">
          <a class="Eksproluj">Eksploruj</a>
        </router-link>
      </div>
      <div class="single-element">
        <router-link to="#">
            <img src="../assets/messages.png" alt="messages">
            <a class="wiadomosci">Wiadomości</a>
        </router-link>
      </div>
      <div class="single-element">
        <router-link to="#">
          <img src="../assets/notifications.png" alt="notifications">
          <a class="powiadomienia">Powiadomienia</a>
        </router-link>
      </div>
      <div class="single-element">
        <router-link to="#">
          <img src="../assets/create.png" alt="create">
          <a class="utworz">Utwórz</a>
        </router-link>
      </div>
      <div class="single-element">
        <router-link to="#">
          <img src="../assets/profil.png" alt="profil">
          <a class="profil">Profil</a>
        </router-link>
      </div>
      <div class="single-element-settings">
        <router-link to="#">
          <img src="../assets/settings.png" alt="Settings">
          <a class="ustawienia">Więcej</a>
        </router-link>
      </div>
  </div>
</div>
</template>

<script>

export default {

}


</script>
<style>

.menu {
  min-width: 50px;
  float: left;
  border-right: #8F8F8F 1px solid;
  height: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
  height: 100vh;
  row-gap: 10px;
}
.single-element {
  margin: 10px;
  float: left;
}
.single-element-settings{
  margin: 10px;
  float: left;
}
.single-element img,.single-element-settings img {
  width: 40px;
  height: 40px;
  margin: 10px;
  display: inline;
}
.single-element img, .single-element a,.single-element-settings img, .single-element-settings a {
  vertical-align: middle;
}

 .single-element a{
  position: static;
  margin-right: 10px;
  font-size: 1.3rem;
  text-align: center;
  display: inline;
} 
.single-element-settings a{
  position: static;
  margin-right: 10px;
  font-size: 1.3rem;
  text-align: center;

}
.single-element:hover,.single-element-settings:hover,.logo:hover{
  background-color:#8F8F8F;
  border-radius: 10px;
}
.logo{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 10px;
  color: #0EC978;
  margin-right: 10px;
}
</style>