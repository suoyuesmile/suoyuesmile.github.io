<template lang="pug">
  audio(controls="controls" autoplay="autoplay" preload hidden)
    source(:src="`http://music.163.com/song/media/outer/url?id=${id}.mp3`")
</template>

<script>

export default {
  name: 'app-music',
  props: {
    id: {
      type: String,
      default: ''
    }
  }
}
</script>
