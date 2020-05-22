<template>
  <div>
    <div v-for="entry in entries" :key="entry.id">
      {{entry.title}}
    </div>

    {{home.title}}
  </div>
</template>

<script>
import pages from '~/apollo/queries/allEntries'
import entryType from '~/apollo/queries/queryEntryType'


export default {
  apollo: {
    entries: {
      query: pages
    },
    home: {
      query: entryType,
      variables () {
        return { section: 'home' }
      },
      update: data => data.entries[0]
    },
  },
  created () {
    // // Get the preview token from the URL
    // if (process.client) {
    //   let hashes = window.location.search.slice(window.location.search.indexOf('?') + 1).split('&')
    //   let params = {}
    //   hashes.map(hash => {
    //     let [key, val] = hash.split('=')
    //     params[key] = decodeURIComponent(val)
    //   })

    //   console.log(params)

    //   // x-craft-preview = params['x-craft-preview']
    //   // token = params['token']
    //   const auth = {
    //     token: params['token'],
    //     craftPreview: params['x-craft-live-preview']
    //   }
    //   console.log(auth)
    // this.$store.commit('setPreviewToken', auth)
    // }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
