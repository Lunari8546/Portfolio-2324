<template>
  <Section heading="biography">
    <div class="paragraphs">
      <p>
        Studying computer science and passionate in softwares, I've been trying
        to craft visually-stunning experiences since the early days of my
        development journey.
      </p>
      <p>
        My joruney started when I was around 11, watching numerous of tutorials
        to become a self-taught developer. Eventually... it paid off, and I can
        finally build projects with my own hands... and with the guidance of
        documentations.
      </p>
      <p>
        Feel free to check out my
        <NuxtLink
          class="underlined"
          to="https://www.instagram.com/lunari.cr/"
          target="_blank"
        >Instagram
        </NuxtLink
        >
        page, from time to time I will post some of my poster designs, or random
        pictures I've took. You could also say hello to me there rather than
        using emails.
      </p>
    </div>
    <hr/>
    <div class="splitscreen">
      <div class="awards">
        <h3>awards:</h3>
        <p>N/A</p>
      </div>
      <div class="experiences">
        <h3>experiences:</h3>
        <NuxtLink
          class="btn"
          to="https://github.com/SHELTER-ZONE"
          target="_blank"
        >
          shelter zone: frontend developer (2021 - present)
        </NuxtLink>
        <NuxtLink
          class="btn"
          to="https://github.com/TeamHarTex"
          target="_blank"
        >
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

.paragraphs p {
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
  @apply mx-0 w-full text-center text-2xl;
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
    @apply text-xl;
  }
}

@screen lt-md {
  .paragraphs p {
    @apply text-xl;
  }
}
</style>
