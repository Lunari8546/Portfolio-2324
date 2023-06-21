<template>
  <Section heading="biography">
    <p>
      Studying computer science and passionate in softwares,
      I've been trying to craft visually-stunning experiences
      since the early days of my development journey.
      Creating these experiences were really satisifying and it fills in my inner-void.
      I tried making games and apps, though in my opinion,
      it's far more complex than websites.
    </p>
    <p>
      I started the joruney when I was around 11,
      watched numerous of YouTube tutorials to become a self-taught developer.
      Luckily it paid off,
      and I can finally build projects with my bare hands... and with the docs.
    </p>
    <p>
      Besides than developing,
      I was also addicted to video games,
      digging useless stuff online,
      and procrastinating on important matters.
    </p>
    <p>
      Also feel free to check out my
      <NuxtLink class="underlined" to="https://www.instagram.com/lunari.cr/">Instagram</NuxtLink>
      page,
      from time to time I will post some of my poster designs, or random pictures I've took.
      You could also say hello to me there rather than using emails.
    </p>
    <p class="note">
      (Not much was written as I suck at writing about-me's. And I hate doing maths.)
    </p>
    <hr />
    <div class="splitscreen">
      <div class="awards">
        <h3>awards: CURRENTLY NONE.</h3>
      </div>
      <div class="experiences">
        <h3>experiences:</h3>
        <NuxtLink class="btn" to="https://github.com/SHELTER-ZONE">
          shelter zone: frontend developer (2021 - present)
        </NuxtLink>
        <NuxtLink class="btn" to="https://github.com/TeamHarTex">
          team hartex: frontend developer (2022 - present)
        </NuxtLink>
      </div>
    </div>
  </Section>
</template>

<style scoped lang="postcss">
*:not(section) {
  @apply mb-12;
}

p:not(.note) {
  @apply text-2xl opacity-100 mb-12;
}

.splitscreen {
  @apply flex;
}

.splitscreen div {
  @apply flex-1;
}

.splitscreen h3 {
  @apply text-2xl;
}

.experiences {
  @apply flex flex-col;
}

.experiences a {
  @apply mx-0 w-full text-center;
}

.experiences a:last-child {
  @apply mb-0;
}

@screen lt-xl {
  *:not(section) {
    @apply mb-6;
  }

  .splitscreen {
    @apply flex-col;
  }

  .experiences a {
    @apply text-2xl;
  }
}
</style>
