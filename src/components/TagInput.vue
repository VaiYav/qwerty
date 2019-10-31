<template>
  <div class="position-relative w-100">
    <div class="input-group h-100">
      <div class="taginput control p-0 form-control border-0">
        <div class="taginput-container is-focusable">
          <span
            :title="tag[field]"
            class="tag"
            v-for="(tag, tagIndex) in value"
            :key="tagIndex"
            >
            <b class="has-ellipsis">{{tag[field]}}</b>
            <a class="delete is-small" @click.prevent="removeTag(tagIndex)">
              <VIcon name="times-circle"></VIcon>
            </a>
          </span>
          <div class="autocomplete control">
            <div class="control has-icons-left is-clearfix">
              <VIcon class="icon-search" name="search"></VIcon>
              <label class="w-100 m-0">
                <input
                    @input="input"
                    @focus="focus"
                    @blur="blur"
                    type="text"
                    class="input">
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TagInput',
  props: {
    value: {
      type: Array,
      default: () => ([])
    },
    field: {
      type: String,
      default: 'value'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    input(e) {
      this.$emit('input', this.searchFilters.search)
    },
    focus(e) {
      this.$emit('focus', e)
    },
    blur(e) {
      this.$emit('blur', e)
    },
    removeTag(index) {
      const values = JSON.parse(JSON.stringify(this.value))
      values.splice(index, 1)
      this.$emit('input', values)
    }
  },
  computed: {
    ...mapGetters({
      searchFilters: 'filters/searchFilters'
    }),
    tags: {
      get() { return this.value },
      set(e) {
        this.$emit('input', e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-search {
    position: absolute;
    left: 10px;
    top: 22%;
    z-index: 1000;
  }
  .input,
  .taginput .taginput-container.is-focusable {
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    padding: calc(.375em - 1px) calc(.625em - 1px);
    position: relative;
    vertical-align: top;
  }
  .input-group {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    width: 100%;
  }
  .input-group > .form-control,
  .input-group > .form-control-plaintext,
  .input-group > .custom-select,
  .input-group > .custom-file {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
  }
  .taginput .taginput-container.is-focusable {
    padding-bottom: 0;
    padding-top: calc(.275em - 1px);
    padding-left: 0;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: auto;
    cursor: text;
  }
  .input,
  .taginput .taginput-container.is-focusable,
  .textarea {
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .1);
    max-width: 100%;
    width: 100%;
  }
  .taginput .taginput-container .autocomplete {
    flex: 1;
  }
  .autocomplete {
    position: relative;
  }
  .control {
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: left;
  }
  .taginput .taginput-container .autocomplete input {
    height: 1.7em;
    margin-bottom: calc(.275em - 1px);
    padding-top: 0;
    padding-bottom: 0;
    border: none;
    box-shadow: none;
    min-width: 8em;
    outline: none;
  }
  .control.has-icons-left .input,
  .control.has-icons-left .taginput .taginput-container.is-focusable,
  .taginput .control.has-icons-left .taginput-container.is-focusable,
  .control.has-icons-left .select select {
    padding-left: 2.25em;
  }
  .input,
  .taginput .taginput-container.is-focusable,
  .textarea {
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .1);
    max-width: 100%;
    width: 100%;
  }
  .input,
  .taginput .taginput-container.is-focusable,
  .textarea,
  .select select {
    background-color: white;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
  }
  .tag:not(body) {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 4px;
    color: #4a4a4a;
    display: inline-flex;
    font-size: .75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: .75em;
    padding-right: .75em;
    white-space: nowrap;
  }
  .taginput .taginput-container > .tag:not(:last-child),
  .taginput .taginput-container > .tags:not(:last-child) {
    margin-left: .275rem;
  }
  .tag .has-ellipsis {
    max-width: 10em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .delete {
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: rgba(10, 10, 10, .2);
    opacity: .3;
    border: none;
    border-radius: 290486px;
    cursor: pointer;
    pointer-events: auto;
    display: inline-block;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 0;
    height: 20px;
    max-height: 20px;
    max-width: 20px;
    min-height: 20px;
    min-width: 20px;
    outline: none;
    position: relative;
    vertical-align: top;
    width: 20px;
    &:hover {
      opacity: .5;
    }
  }
  .is-small.delete {
    height: 16px;
    max-height: 16px;
    max-width: 16px;
    min-height: 16px;
    min-width: 16px;
    width: 16px;
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }
  .tag:not(body) .delete {
    margin-left: .25rem;
    margin-right: -.375rem;
  }
</style>
